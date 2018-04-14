---
title: "Fiber in My (React) Diet"
date: "2018-04-01T22:40:32.169Z"
layout: post
draft: false
path: "/posts/react-fiber/"
category: "Programming"
tags:
  - "Javascript"
  - "React"
description: "A deep dive into React 16's new Fiber rendering through trying to replicate it in my own front-end Javascript library, Weact"
---

Despite my rather ambivalent attitude towards Facebook as a company (an attitude that a lot of people are sharing with me lately, no doubt), I _love_ React. It makes me feel like I can point my thoughts at the screen like a magic wand and presto an app into existence. I mean, not really. There's tons of debugging and tinkering, and obviously nothing is perfect, but it somehow still _feels_ like magic even after working with it on so many projects.

Many developers aren't comfortable with "magic" -- that is to say, with code that's just doing things for you that you don't know about or fully understand. Personally, I love magic. The less brainpower I'm devoting to smaller details, the more attention I can put to the bigger ones, the ones that matter, the ones that lead to clever implementations and rich user experiences. But I agree that magic shouldn't necessarily be trusted implicitly, and a developer looking to gain full mastery over their toolset should open the hood to see what's really going on under there. That's why I built my own backend framework and ORM based on Rails a few months back. And its also why I've been reading a lot about React's internal plumbing and putting together my own modest version that I have oh-so-cleverly called _Weact_. Because with it, _we_ can _act_, get it? Actually, mostly because it just sounds like React said by Homestar Runner and that makes me happy.

The virtual DOM reconciliation algorithm was hands down the most interesting part of building Weact -- basically a big recursive function comparing two data trees and making changes to the DOM as necessary. However, React has gone through a lot of internal restructuring as of version 16 which completely changes the way it works through reconciliation and updating the DOM. It accomplishes this via the implementation of a new workflow using "fibers". It's completely fascinating and incredibly clever! I'm indebted to [Andrew Clark's thorough "React Fiber Architecture"](https://github.com/acdlite/react-fiber-architecture) for wrapping my head around the high-level concept. He works at Facebook and is a co-creator of Redux so you know he knows what he's talking about. I recommend you check it out!

Basically, it turns out that the most expensive, time-consuming part of a React re-render is _not_, as many of us might have once assumed, the actual changes to the DOM. Instead, its the reconciliation process of comparing the virtual DOM to the real one that takes up the most time. This actually made a lot of sense once it was laid out for me and once I had written a version of that reconciliation algorithm myself. It's a recursive function traveling down potentially the entire DOM tree, which, in a large app with many nodes, could mean a lot of work, even with React's under-the-hood optimizations to reduce unnecessary comparisons. During each re-render, Javascript's single thread is stuck working through the full reconciliation until its completely finished. This was causing problems as React has grown across platforms and into wider use cases such as animation where blocking the main thread causes noticeable performance issues.

Enter the "fiber" - essentially, a record of one unit of work in the greater process of reconciling and updating the DOM. By breaking up the work into these bite-sized chunks, we are able to queue them and process them whenever we want rather than being stuck doing all the work all at once. This means that, with fibers, React can stop in the middle of a re-render to address other important work, pause re-rendering until we have the data we want (the upcoming React Suspense feature will give an API for exactly that), and process the workflow in order of priority. And anything on the DOM during re-render is still inter-actable! We have a lot more flexibility in how the work actually gets done and when. A fiber is just a plain old Javascript object with all the details related to that unit of work. These objects can be queued up and processed as the browser has time for them.

I was immediately interested in updating my humble Weact to give it an an incremental rendering / time-slicing reconciliation algorithm inspired by the new React 16 architecture, even if there was no way I'd be able to mimic all its features or efficiency exactly. I understood what was happening with fibers at a high level but needed help getting started with implementation details. I am highly indebted to [Rodrigo Pombo's "Build Your Own React"](https://engineering.hexacta.com/didact-fiber-incremental-reconciliation-b2fe028dcaec) series of posts in which he walks through his interpretation of a simple Fiber-based reconciliation process. It was hugely helpful in getting started, but I knew I wanted to go further; his guide is very narrowly focused so it doesn't include component lifecycle methods or even functional components, both features I really wanted to implement in Weact.

There are three major phases to the new reconciliation process of Weact - 1) traversing the tree to get the next node/fiber to queue up, 2) processing that fiber to figure out what the new DOM should look like at that node, and 3) committing our work by actually updating the DOM. The core of the process that keeps everything going is a global object that keeps track of three things: a queue of nodes waiting to be processed, the next fiber to process to compare actual changes (this is set to each node one at a time as they dequeue), and a pendingCommit if we are ready to go ahead and start the changes to the DOM itself. The `nextFiber` can be processed or changes in the queue can be shifted off and implemented whenever the thread is idle using the browser's `requestIdleCallback()` -- if something urgent comes along that needs to be processed, the whole workflow can just chill and wait for everything to clear before being processed again. The global object starts off very simple, but will be the master overseer of the whole process:

```js
const globalQueue = {
  updateQueue: [],
  nextFiber: null,
  pendingCommit: null,
}
```

There are two ways the rendering process can be kicked off, either a call to `Weact.render`, which is likely just rendering the parent component to the app, or from a component's `setState`. In either case, we're going to enqueue an object with a reference to the element in question (the literal dom node we are hooking into with `render` or the instance of the Weact class that called `setState`) along with some extra info including any children, the new state, and where this change is starting from (HOST or CLASS). Our algorithm will dequeue the change and get started by comparing the the old DOM tree with what it should look like now. It does this (and this is a very clever bit, full credit to Pombo for this) by _descending_ the tree from the root node until it reaches a leave, a node with no parent, where it then compares what is currently on the DOM with what it should look like after the new props are applied. Changes get added to the global queue
with references to the node in question (before and after change) and a `type` of change: UPDATE, DELETION, or PLACEMENT. Then it moves on to any siblings and does the same by updating 'nextFiber'. Once done with siblings or if there weren't any, it moves back up to the parent and process that node, and then any its siblings. But the process always starts with children, calling `reconcileChildArray` so that we will definitely get to every leaf in the tree -- we're also using this to slowly collect shorthand for all the DOM changes by having them "trickle up" from child to parent until they reach the root. Eventually this process will get to every part of the tree and make it all the way back up to the root node with all the changes required queued up and ready to go.

It's important to recongize that this is _not_ happening in one big recursive call like it was in my first version of Weact. Each step of this process is done simply by processing one `nextFiber` at at time with specific data and queuing up nodes to be processed in the `updateQueue` accordingly. This means that at any time in this process the browser can stop to do other work before continuing processing the queue. It's super clever and I can in no way take credit for coming up with the concept -- implementing it was fun enough challenge for me as it was.

The part I wanted to add to all this, however, were lifecycle functions. How do those fit in to this new process? If there's not current an instance of the appropriate class on the DOM in the node whose fiber we are currently processing, we know its about to be mounted. Therefore, all the mounting lifecycle methods should happen before we finalize what the new node should look like, run render on that instance, and then reconcile the changes with what we had before. I abstracted this work into a function I called `componentMountingPhase`:

```js
const componentMountingPhase = (instance, fiber) => {
  instance.componentWillMount()
  const newChildElements = instance.render()
  instance.componentDidMount()
  reconcileChildArray(fiber, newChildElements)
}
```

Otherwise, if there is already an instance of this class at the same position in the tree, we know we are doing an update/re-render. We need to apply those lifecycle methods here as appropriate:

```js
instance.componentWillReceiveProps(prevProps, nextProps)
if (instance.shouldComponentUpdate(nextProps, nextState)) {
  instance.componentWillUpdate(nextProps, nextState)
  instance.props = fiber.props
  instance.state = nextState
  fiber.newStateStuff = null
  const newChildElements = fiber.stateNode.render()
  instance.componentDidUpdate(prevProps, prevState)
  reconcileChildArray(fiber, newChildElements)
} else {
  cloneChildFibers(fiber)
}
```

If `shouldComponentUpdate` returns a false-y value, we'll simply clone was already there rather than spend any time reconciling children. Otherwise, we need to call the other lifecycle methods as appropriate. Note: I'm using the "classic" lifecycle methods here, some of which are soon to be phased out (including my dear old friend, `componentWillReceiveProps` who I probably abused like everybody else leading to React getting rid of it - this is why we can't have nice things). I hope to upgrade to the new `getDerivedStateFromProps` and `getSnapshotBeforeUpdate` in the future.

Once the changes are queued up, its just a matter of making the right changes to the DOM during the final commit phase. Once we've processed the whole queue, we set a `pendingCommit` variable to the root node. Throughout the whole process phase, we have collected all the changes that need to happen for a node and its children and passed them up to the parent, meaning that by now the root should have an array of all the changes that need to take place this re-render. Each change is a POJO with reference to the nodes in question and their parent, so this is not too hard: append the new element to the parent if its a placement, update its properties if its an update to an existing node, and remove from the DOM if its going away or being replaced. If the node is an instance of a class, I call `componentWillUnmount` before the actual deletion -- at least for now, since its also being deprecated.

Adding a functional component was fairly easy after figuring out how the class lifecycle worked. We needed a way to distinguish functions that were just pure functional components and functions that were constructors for a class component -- I eventually settled for checking to see if the function in question had lifecycle methods defined on their `prototype` since all classes that extend `Weact.Component` will inherit them. This approach works but doesn't necessarily seem like the most elegant solution. I'd like to revisit with a better approach. But for now, if we have determined we are working with a pure function, we just find out the new state of the DOM for that node by running it and passing in the new props.

There are a lot of tiny implementation details I'm skipping over, of course. You can check out [my github repo](www.github.com/matthaws/weact) to see the code itself and my working demo of Weact in action. Overall, though, it was an incredibly educational and rewarding project and not just in the incremental rendering part. Writing `Weact.createElement` and teaching Babel to use it to process JSX was really rewarding, and really helped me peer beneath the super useful "magic" that JSX really is for working React. Overall, I was left deeply awed by the clever team that works on React and by just how much really was happening when I make my React apps that I never have to even think about.

I highly recommend recreating this project or a similar one for tech that you use frequently. Nothing helps you understand a tool better than taking it apart and putting it back together, and nothing is quite so satisfying either. Give it a try!
