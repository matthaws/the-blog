webpackJsonp([50655900786643],{389:function(e,t){e.exports={data:{site:{siteMetadata:{title:"The Blog - Matt Haws",subtitle:"Thoughts on programming, technology, pop culture, and life.",copyright:"© All rights reserved.",author:{name:"Matt Haws",twitter:"#"},disqusShortname:"",url:"https://matthaws.github.io/the-blog"}},markdownRemark:{id:"/Users/appacademy/Desktop/Personal Projects/blog/src/pages/articles/2018-02-01---Building-A-Eurovision-App-Part-One/index.md absPath of file >>> MarkdownRemark",html:'<h1>The Idea</h1>\n<p>I could write an entire blog post on why I love the Eurovision Song Contest so much — and maybe eventually I will. But for the sake of brevity <a href="https://en.wikipedia.org/wiki/Eurovision_Song_Contest">here’s a link to the Wikipedia page</a> about it and an image that sums it all up:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/the-blog/static/ukraine_granny-b50d80675c6135d854f954c07195d76d-88d31.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.326530612244895%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABRr8BkDln/8QAGhABAAMAAwAAAAAAAAAAAAAAAgABAwQSMf/aAAgBAQABBQIYA1WZubCw3PDyFff/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhEEFRcZH/2gAIAQEABj8CVy0OvCNaxXCF0f/EABoQAAIDAQEAAAAAAAAAAAAAAAExABEhURD/2gAIAQEAAT8hsQGyUIPttYUowpdOeAeSDhP/2gAMAwEAAgADAAAAEJAv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/ELGP/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8QGG//xAAdEAEAAgICAwAAAAAAAAAAAAABABExQSFRYXGR/9oACAEBAAE/EAZRo/K5Q3olJ42rwDt6l71yh4Vv3mK0EEQESxu4g7EaPDMn4P1Wf//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Eurovision granny"\n        title=""\n        src="/the-blog/static/ukraine_granny-b50d80675c6135d854f954c07195d76d-d564d.jpg"\n        srcset="/the-blog/static/ukraine_granny-b50d80675c6135d854f954c07195d76d-865fd.jpg 240w,\n/the-blog/static/ukraine_granny-b50d80675c6135d854f954c07195d76d-d40a0.jpg 480w,\n/the-blog/static/ukraine_granny-b50d80675c6135d854f954c07195d76d-d564d.jpg 960w,\n/the-blog/static/ukraine_granny-b50d80675c6135d854f954c07195d76d-88d31.jpg 980w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>I was first introduced to the glory that is Eurovision in 2004 when I was in London for a semester abroad and happened to catch it on TV. It’s a <em>huge</em> event in Europe, and while as many Europeans hate is as love it, it’s as impossible to avoid as the Super Bowl or the Olympics, which makes it particularly interesting that so few Americans have heard of it.</p>\n<p>I was re-introduced to Eurovision some years later by my friend Brendan, a die-hard fan with an encyclopedic knowledge of past contests and winners. For years, it had been his tradition to hold annual Eurovision parties with friends to watch and score the entries not according to the official system of the contest but based on his own custom criteria on hand-made scoresheets: up to 12 points each in the categories of song, dance, costume, and “eurocheese”, with an optional field for arbitrary bonus points. Everybody rates each entry and then argues with each other about their ratings.</p>\n<p>This was fun. A lot of fun. We do it every year.</p>\n<p>So, naturally, when Brendan and I both made career transitions into web development we knew we wanted to turn his annual scoring game into a social web app that we, our friends, and any Eurovision lover with a healthy sense of humor could use. And thus, <em>Douze Points</em> was born.</p>\n<h1>Designing the App</h1>\n<p>We knew we wanted this application to be a platform and demo for the web development skills we’ve learned but also to push and challenge us to go further. Using that criteria, the high-level shape of the app started to come together.</p>\n<p>The core MVP features to be implemented in the first iteration of the app were soon fleshed out. When finished, users would be able to:  </p>\n<ul>\n<li>log in with their Facebook account.</li>\n<li>view past contests and entries (with embedded Youtube links)</li>\n<li>make “scoresheets”, each associated with a given year’s contests</li>\n<li>give each entry on a scoresheet a scoring, with up to 12 points assigned in each category just like in Brendan’s home-made sheets.</li>\n<li>view each other’s scoresheets and profiles</li>\n<li>leave comments on entries, scoresheets, and profiles</li>\n<li>follow other users to see recent activity on the home page</li>\n</ul>\n<p>Building off the tech stack we already knew, we started to visualize the completed app in the following parts:</p>\n<h1>Backend API</h1>\n<p>First up was a JSON API that would be implemented using Rails 5 in API-only mode and a PostgreSQL database. Designing the database schema proved interesting given the requirements of the MVPs and the interconnectedness of the proposed tables. We settled on this configuration:</p>\n<ul>\n<li>Countries would have a name and a url for their flag image.</li>\n<li>Contests would have a year and have a foreign key pointing to their host country.</li>\n<li>Entries would belong to a country and a contest, and have columns containing the url of an associated video, title of song, name of artist, and their final ranking and score in the official contest.</li>\n<li>Users would have many scoresheets. Scoresheets would also need to belong to the contest they were scoring.</li>\n<li>Scoresheets would have many scorings. Scorings would represent the set of scores a user gave to one individual entry, so it would serve a join table between scoresheets and entries and would contain the user’s scores for the four categories and the bonus field.</li>\n<li>Lastly, comments would be allowed to be associated with many of the other tables via Rails’ polymorphic associations.</li>\n</ul>\n<p>Here’s a model of our proposed database:  </p>\n<p>  \n  <a\n    class="gatsby-resp-image-link"\n    href="/the-blog/static/db-d51520e2f012b4f33b018f5ac901f062-181b1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 713px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 73.07152875175316%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABSElEQVQ4y4VU6ZqDIAzkrXqolVvtVvv+T0OZYCyHu/sjX0DITDIJCq2fwbk1WPs6fG7jOAWtF1ob81NYfo/3AoBSzkGpuQCFxyWcnQWrSIJYY54lYJ1RfviXgWgcfUxkieRbmWFi+r+c/IzWdm1LBgM2uZZ1JjXR4f27+S6knCjtYbD0wfuNgOFh0CjXk4mIPAK6NsOZAKWaM6YUAHs8HBmI+84UoMiwKZnZuNxU/lLoiHUth4HFZjSAjS72qyd8UWI+i78BWtN28n5XsUwfuk7TaNQVWM7+rOTEtl/Yg/o+aQWfBr4dDw1p7NqMG82hi91Ue1O4o2djUj8/67bjvtvXoovlocsoE6PD5fHYsH68h03Tm/RF99njHs7E5TIQEAChWd71M+NATML1OsZYF243SZpThgBDhmDhV3P2Z6ll4Mw4FgQg+gApmh9FSli1fgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Douze Points db"\n        title=""\n        src="/the-blog/static/db-d51520e2f012b4f33b018f5ac901f062-181b1.png"\n        srcset="/the-blog/static/db-d51520e2f012b4f33b018f5ac901f062-c2eac.png 240w,\n/the-blog/static/db-d51520e2f012b4f33b018f5ac901f062-3b60c.png 480w,\n/the-blog/static/db-d51520e2f012b4f33b018f5ac901f062-181b1.png 713w"\n        sizes="(max-width: 713px) 100vw, 713px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Backend routes and controllers were designed according to RESTful conventions and we would use jbuilder to shape our JSON responses.</p>\n<h1>Frontend</h1>\n<p>For the app itself, we decided to go with React/Redux, with which we were already very familiar. We also decided to use create-react-app to quickly get started with developing. I’ve been in love with create-react-app for a while now and was itching to use it in a full-fledged project.</p>\n<p>Key to group collaboration was to decide on stylistic conventions and a normalized state shape for our Redux store. We decided we would use prettier to help us keep to a consistent style (I’m a big fan of it as well!). Our driving guideline for state shape was to consistently store all resources in their slice of state under keys of their ids. Resources that referenced others (such as a scoresheet that had many scorings) would hold an array of the ids of the resources that they need (easily produced on the backend with ActiveRecord’s #pluck method and our jbuilder views). With an array of scoring ids, for example, we could easily grab all the scorings that a scoresheet needed out of their slice of state without the need to iterate through all of the scorings stored there. Keeping the Redux store consistent and easy to use would save us a lot of pain down the road — pain that we had both learned about the hard way on other projects.</p>\n<p>When it came to the styling and UI, Brendan and I bounced around and also looped in my partner, Ian, who has a design background and who had expressed interest in helping us design and implement the project, particularly the frontend styling and React components. I’m a big fan of teamwork and collaboration, so I was excited to get another person’s perspective on the project. After hearing what we wanted from the app, he went and made some very basic wireframes for us to start to get an idea of what it might look like.</p>\n<p>  \n  <a\n    class="gatsby-resp-image-link"\n    href="/the-blog/static/splash-9069a92f05608837ad8610cb67e854ed-59fbd.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 710px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 84.78873239436619%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAAEWUlEQVQ4y5WSW2xUVRSGT2em05k5c790zlw60+mN6W1oSztD25leKL1A6S20KK1AqbUBhBrFWGMVRYmIt2hINMYYhEKVIA2UBtCWYALFRGgLhBefeBBsI7ZNTEx8MPncihrjmyf5z1pZa+ff/17rl6avXmFubpYbN64zNzv7Z/7veHNujmvXprk2Pf2w9l+IMzMzM9y+dZNLU5NI09NXuX37Fnfu3OHu3bvcu3ef+YUF5ufnH0aBhb/wT/3vnogLC/MsPlhgcWmJycmvkBYXF/kDy8tLLC894Jefl/k/328C3/3wKz/9OM/9+98jHR8Z5cTxUY4dG2Xk5EVGL8wwduEbzpyb4sz5K5yZusG58fMiv8zYpVnOTnwpMMXYxWnGxyc4PTbOR0fHOPbZBEdGvkCSJFn8FCRtKZKvA5W/hRT7KiRdGCm1CckYE327yKuRgq1IGoeoiZ49jpQkkySpUalMSIZiJH0Wks1XRWLdIKGSbYTLNhEuqCNetZFYwwClrc8RLmoiNb0cVVY7mrQqjGYPKUoMtbcG2eTBaDCjk92ozCvR2XKQAuFmNve9wPBLbzL0/Gs0Nm+lvrmPvqffZXDobZ4ZOkhacadQuAatK4Le6EXjjpHkKEWrV9DprKQYvKhMBeisglAjEqcSoaAwTqyijZLoBkrq+onW97GyugdZidLWNUBFQzcqewSzPRtTIEFetIMVeQnCuXGhLA/JFcPgEePRm0PipjS0xnxkeyl6by369GbsRY+QktNCRm6C65+8wluDveiCCRwVj6OU9TD83gn2vfEhPXv2Y4ttJad1NwEhRjIGKtClxtDKmWjFPKVgBxq/WEZ+J46m3ezd3svwtkfZuTZO86anMG45jD8+wMnL3/LBqUl6Dx3H1/UqdWJEhVWCUOVvF5tpxFE9gLlpELWzkpRQGypvnEh5HY3lq0n3Z1CRn8vW7l5ytwzjyKnnyMTXvHPqMk8ePkuo80VKn/2UsBiRlKwvIFmOiKGvIynzMTRZm1EHOjArxXiVIGq1DpfDjd3uxuFUKOzcgy3cwt7XP2bn+6fpP/Q52fUDZLbtJbuyS9gvOYLGFEVtKkJryEaTWovKswGTowi71YXTnkrQn47b5cVtd1GwdjO6QA3rtu+ja/8IG4aP4o1twRXtxlu0HsnpbcLgbiRFEBqMWSLmo7WVo/XXo7cEUFJ9hAIZKG4fZtmOZVUralcZ8fX9NO06SOeul4k07MRYuRtXjjD/6ppu3L4GDLIgtOQLk+Zi8iTQFfdj9pUR9IYIpWXjcroxWzOxrnlC2CNKONFD9Z4DbNwxRKS6C02wFsuKBqSC8CbxnGpk3UpM5ohQKaDUYMhsQVHyCAhCvycdq8WGzZaBHNuG7CnFkh7H07qD1EQX1mg7Kc4CjJmVSBlKOy5TtVBYgtlUjMUaRm9bhdFRjMcZwqeExFK8omfBZg2iK+oQfqxFthWiX1GOOVKHXNJCsjkHOVDO76H9rqk9iT10AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Splash Page"\n        title=""\n        src="/the-blog/static/splash-9069a92f05608837ad8610cb67e854ed-59fbd.png"\n        srcset="/the-blog/static/splash-9069a92f05608837ad8610cb67e854ed-4ffbf.png 240w,\n/the-blog/static/splash-9069a92f05608837ad8610cb67e854ed-cf458.png 480w,\n/the-blog/static/splash-9069a92f05608837ad8610cb67e854ed-59fbd.png 710w"\n        sizes="(max-width: 710px) 100vw, 710px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>The concept for the splash screen / landing page</em></p>\n<p>  \n  <a\n    class="gatsby-resp-image-link"\n    href="/the-blog/static/scoresheet-5ae007ade5f504cc75771b8aecb1ad6b-59fbd.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 710px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 84.78873239436619%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAACVUlEQVQ4y51TyY7TQBTsv+TEPyA+gQtXTnAFThwR4jCHREIimQmaxB5myUiTfXXi2EmceMvmouuFZkwQl2np6bW7n6ur6nWrcuk7bNtCtXoJ27Jkns9Xto3z8zLK5dLjnlX7nS1YEjVcX/9EsVCAqlQucHt3i/v7Ovr9HhxnDNd1/4rZbPbf8D3uu/B9H8WiBuz1euh2uxqsD84dx0GSJIjjWLKJOI6wXq8llsslVquVjgDDGb8DJLq+2WxC8ZRAby7mcwRBIEAcWZbhcDhgt9tJbDYbRFEkQdAwDBHp8INE/k/TRIgpgnjuDP2xg56W3Ol00Gq10Gg0RNJ+v8d2uxVQzk8jOzDvhATtUcvFAu3RABdfP6PfamOu5XBjOp1irllTLlmROaUyGyVkyTnrGPV6HSqNUxSq3/D+xTMMmx2so1BABoOBGD0cDoXpZDLBaDQSAPq80ER4MGt4OC2iKuVrZOy1V5sjbXqVpuk/TTGNMnusM97SEgKShApXa9y1H/Duyyfxjo2gFJ5MGSaTEVmyu2TE7HmeBFUQmDdFxXGCH7UK3rx9DWfqgp7SM26yeDweS6Y8SqVkAtJPHsRMSzh47ZTne8gPyjASODdXhx01V8jE6dqRYRihZNn4+PI5Hq5uBJQe8dS8ZAYZ8g6SITP3TOP+AEZRgqp9ibMPrzAZHaVQMosIQt/4Ew8w3slj0NJZa67No2TtT3bIsM2OHSY7ArKbp13OP0nmfHBNXgpPlGe2P/rFuXl2p/l0LV/LQTWKXpi3+9Rh/qUlwtAsPjUMQwL+AgPIBxVh4mGKAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Scoresheets"\n        title=""\n        src="/the-blog/static/scoresheet-5ae007ade5f504cc75771b8aecb1ad6b-59fbd.png"\n        srcset="/the-blog/static/scoresheet-5ae007ade5f504cc75771b8aecb1ad6b-4ffbf.png 240w,\n/the-blog/static/scoresheet-5ae007ade5f504cc75771b8aecb1ad6b-cf458.png 480w,\n/the-blog/static/scoresheet-5ae007ade5f504cc75771b8aecb1ad6b-59fbd.png 710w"\n        sizes="(max-width: 710px) 100vw, 710px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>Scoresheets</em></p>\n<p>  \n  <a\n    class="gatsby-resp-image-link"\n    href="/the-blog/static/entry-ded426ef9191d1a69ce840dec4128a18-59fbd.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 710px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 84.78873239436619%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAADCElEQVQ4y41UWWgTYRBeBRELPpUWpGpM1ValplU0aitSoiIYQUV9Et9890XUF0VQFA8EEQ9QS61gPWq9RTQFrYk9bBMtrUWahjT3sWmT3WQ3V/P5z28aWw/qwMdM/tn99pv5ZyJYzB9hs1nR0/MZNquVx5P9F5sNnz5ZYLGYf+WsvXlvhZWjF319X9FmMkHo7OxA/0A/Bge/weUagd/vQygUmoJwOPxPRETKhxCJRNDWxghHRkbgdDrhYt7lciEQCEBV1T+gKApkWeaIRqOQJJkhBm84zn7HoLK83W6HQArogbFYDKOjo4gxn06nf0MGqVQK8XicQ5KkfCxDjKnsHYl/lIQJlBgfB6LBMHI5FuRtnB0ScrlcAX+3X7lgMAhBjMo4e+Uomvcb4XC6MTw8jKGhIYiiyAhzyGQyHL+TTwblCoRyQkV7+0t4+7pAx7ExkZUeQVJV2MezSCdVZNJJ1pYxZLPZv2ucrDDNetM38B0NzS249+g57j39iDcmMx4+M+F282s03n+FW3db4HR5eEsmLimZTEJlUBSV97lASMGR4ycxq6QcZVUGaNYdwMZNBszXbcVs7XYUaQ0QiqvR+tKEVFKBx+uFwxOE0xvCsDsIO4MnIPKy6YI54ZnzF1GsWY5KvREVdQexbHE5KlbUQqffDa1+L+avMuLdh04oCRleRiiKYa4m4PczkiCCbNSoHQXCK9evorKmGsv09dAZ9uFSxRIcXlOHqnojtu3Zi1rjbpi7uxGXJXg8Hvh8Pk5MoJjOaNwKJZ84fQ5z52mxSLcBmpVrUVVegdX6DdBt3YG1hs1YWLMeb9+3s4tS+ctERAtAoNjtdk8lPHTsFARhBmYWFaN0XhnmlJShZPUWaGp3YkHdLgilS9H67AVvPG1FIpHgoK2Z8IWS6YbMHV24cPkabty8jaamO2hovIuGB29w5/EHND2x4HpjCxwOB6YzrpCk/q/RvE2sII0NeRohKp2MKyS59CDf2fxW/ES2gHR+U8iI8Oefg8T7RqRENIVw8rRPp3C6kn8AqOicHkf9xt0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Entry Details"\n        title=""\n        src="/the-blog/static/entry-ded426ef9191d1a69ce840dec4128a18-59fbd.png"\n        srcset="/the-blog/static/entry-ded426ef9191d1a69ce840dec4128a18-4ffbf.png 240w,\n/the-blog/static/entry-ded426ef9191d1a69ce840dec4128a18-cf458.png 480w,\n/the-blog/static/entry-ded426ef9191d1a69ce840dec4128a18-59fbd.png 710w"\n        sizes="(max-width: 710px) 100vw, 710px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>Detail view for individual entries</em></p>\n<p>We knew some or all of this might change once we got started, but we had a clear idea of how to begin. I volunteered to get both the backend Rails app and frontend React app started and to set up the login via Facebook.</p>\n<p>This proved a bit more complicated than I expected, which will be the topic of part 2 of this series!</p>',fields:{tagSlugs:["/tags/web-development/"]},frontmatter:{title:"Building a Eurovision App - Part One",tags:["Web Development"],date:"2018-02-01T22:40:32.169Z",description:"The story of conceiving, planning, and beginning to build a social Eurovision scoring web application."}}},pathContext:{slug:"/posts/eurovision-app-part-one"}}}});
//# sourceMappingURL=path---posts-eurovision-app-part-one-d14045f1c9010a49a882.js.map