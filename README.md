# Ripples-of-Hope
This application will be a place that you can read stories from a charity, a recipient, or a donor. You can get a brief overview of donation items that are needed and a location to drop off the donations. There is also an option for you to give a cash donation through the app.

## User Story

```md
As a member of the community
I WANT an app that manages local charities 
SO THAT I can easily make donations
```

## Acceptance Criteria 

```md
GIVEN an app that manages local charities
WHEN I open the app
THEN I am greeted with the home page with user stories, about, and login/signup, and a donate button
WHEN I click the signup
THEN I am able to create a login 
WHEN I click the login
THEN I am able to share a story about a charity
WHEN I click the donate button
THEN I am taken to the donate form
WHEN I click logout
THEN I am taken to the home page and I can view stories and donate but I can not share a story, update my story, delete my story.
```
<img width="1134" alt="screeshot" src="https://user-images.githubusercontent.com/110792983/217613115-96e2756a-0731-46d2-82cb-25232fad60ca.png">

## Mock-up
![Home page](client\public\home.png)

## Technologies Used
* React for the front end
* GraphQL with Node.js and Express.js server
* MongoDB and Mongoose ODM for the database
* Queries and mutations for retrieving, adding, updating, and deleting data
* Deployed to Heroku
* JWT authentication
* Bootstrap/ react-bootstrap
* Stripe payment platform

## Links
[GitHub](https://github.com/kristyvanatta/Ripples-of-Hope)
[Heroku](https://ripples-of-hope-2.herokuapp.com/)
