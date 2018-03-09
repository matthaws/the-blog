---
title: Building a Eurovision App - Part Two
date: "2018-02-14T22:40:32.169Z"
layout: post
draft: false
path: "/posts/eurovision-app-part-two"
category: "Programming"
tags:
  - "Web Development"
description: "Work begins on our Eurovision Scoring app"
---
# Getting Started

With our plan for the app more or less in place, I got started building both our front and backend pieces from scratch. The first thing I knew I wanted to work out was a login via Facebook. There are a number of libraries designed to help you paper over the OAuth2 protocol that allows to you to authenticate with third-party providers like Facebook, but I wanted to at least try to implement it myself in order to better understand what was going on.

Needless to say, I learned a lot.

OAuth2 is a fairly straightforward process under normal conditions. After registering my app with Facebook, I just needed to provide FB with a callback URL that it would send a response to once it was done authenticating the user.  However, because we were essentially working with two different apps (a Rails JSON API server and a React app), the normal OAuth flow was trickier than expected.

The user is interacting with the React frontend and kicks off the login process from there. Should I send a request to my backend Rails API, which then authenticates with Facebook and returns a response? The chain of asynchronous calls that would involve seemed like a nightmare and after tinkering I decided that wasn't an ideal solution.

But on the other hand, if I sent the request to Facebook via the frontend, I would still need to send the response on to Rails in order to create or find the appropriate user in my database. That didn't seem like a great solution either. Considering that having the frontend and backend seems very commonplace or even ideal in certain situations, I was surprised by the lack of guides or published best practices on how to handle OAuth2 authentication under those circumstances.

In the end, I decided to go with the second option and have my frontend contact Facebook. The decision ultimately came down to which process would give the best user experience. By integrating my frontend Javascript with Facebook via their SDK, I was able to have a Facebook login window pop up to ask the user to log in and give permission to the app. In the success callback to that async call, I then start a Redux loop that sends the temporary access token that Facebook gave me to my Rails backend. Rails can then use that token to fetch user information including a unique id from Facebook, which I use as my primary means of user lookup in my database.

This means two requests to Facebook, one from my frontend, one from my backend. I'm not thrilled with that, but it seemed to be the best solution given the tools I had and what I knew how to do in the moment. I'm sure there must be a better way, but I went with this solution for time being.

In order to send the user's temporary access token to my backend in an HTTP request, I learned about HTTP Basic Auth protocol which involves an "Authentication" header and Base64 encoding. Koala, a handy gem for Rails, provided a nice API for using that access token to then fetch user information from FB, including name and profile picture.

```ruby
def self.from_facebook(graph)
  uid = graph.get_object('me')['id']
  username = graph.get_object('me')['name']
  photo_url = graph.get_picture_data('me', type: 'large')['data']['url']
  self.where(uid: uid).first_or_initialize.tap do |user|
    user.uid = uid
    user.username = username
    user.avatar_url = photo_url
    user.save!
  end
end
```

Now I could get user information and could make or find the user's entry in my database. But what about persisting the state of being "logged in"?

# Logged In - What Does That Even Mean?

In previous web apps, I'd used cookies to maintain the concept of a current user and being logged in. When a user logs in, a session token is generated and saved in a column in that user's entry in the database and the same token is put in the session cookie for the app. Rails makes working with cookies incredibly simple, so this was a pretty quick and easy way to implement auth.

However, I wasn't convinced that was the best solution and wanted to try another approach. With a session token, you have to store extra auth-related information in the database. That information needs to be reset on each log out and log in, adding extra work for the server. Furthermore, truly RESTful APIs should technically be stateless. Session tokens were a great way to get started with authentication, but now that I had a solid grasp on that approach I knew I didn't want to simply use them again for this new project.

Instead, I researched other alternatives. JSON Web Tokens are an interesting solution for this problem. Instead of using a persistent cookie, we send the client a specially generated token as part of the Rails response when they log in. That token is stored in the browser locally through sessionStorage and then included in the "Authentication" header of all future HTTP requests to my API endpoints that require a logged in user. Now the actual controller actions are actually stateless as a helper method checks the viability of the token in the header before running the action, keeping the API far more RESTful. On a refresh of the app, if there's a token being stored locally the app knows to go and fetch the current user's data using it.

```javascript
export const authHeaders = () => {
  if (sessionStorage.getItem("token")) {
    return {
      Authorization: `bearer ${sessionStorage.getItem("token")}`
    };
  } else {
    return null;
  }
};
```

This worked out nicely and was straightforward to implement. I've definitely read about some downsides to JWTs in terms of security and also efficiency when scaling a service. It puts the logic for being logged in or not on the client side, which means giving up some control - I read of one company that needed users to log out in order to have access to a new feature. If they had session tokens, they could just reset them for all users effectively logging everyone out very efficiently and knowing their feature was now accessible by everybody. Without that ability, they were relying on their users logging out in order to clear the JSON Web Token, and had to basically beg them repeatedly through lots of messages to do so, a much lengthier and more annoying process. Plus, JWT  relies on my app's secret key to generate the tokens, and if that single key were to be compromised it could mean all the tokens are vulnerable. But for the scope of our little app I felt these issues would not be relevant and the ease of implementation, the benefit of learning a new kind of authentication protocol, and JWTs other pluses as outlined above made it worth it.
