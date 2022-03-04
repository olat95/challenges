# Frontend Engineering Challenge
 
This challenge is used by B+B for evaluating candidates for frontend development positions.

This challenge is a chance for engineers at B+B to see how you code and organize a project to implement a specification.

## Deliverables
The expected deliverable is a fully functional project that includes the following:

* Code of the application
* Tests of the application
* Documentation for launching a development environment and running the application
* You are expected to match the mockups and use the right components as needed.

## Technical Stack
The application should use one of the following stacks:
```
React or VueJS with any of Material/ChakraUI/Reactstrap/Tailwind UI Libraries  
```
* Using SSG/SSR such NextJS, Nuxt, Gatsby is a plus.
* CSS Library such as 

Except for these requirements, feel free to use whichever libraries, frameworks  or tools you deem necessary.

### HTTP API calls
This challenge requires HTTP API calls when a user loads the fetch posts, views a single posts and creates a comment.

What we recommend is to implement the calls as standard HTTP requests to a REST API with the following specification:
```
 GET: To fetch all posts
  https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/
```
```
GET: To fetch a particular post
  https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/{id}
```
```
POST: To comment on a post
  https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/{id}
```

## Expectations
Your code will be reviewed by our team at B+B and will serve as the base for a discussion in interviews.
We want to see how you approach working on a complete project and strongly recommend that you work on this challenge alone. 
We will particularly focus on your attention to details and expect the code to be professionally structured, commented, documented, and tested.

If anything is unclear, feel free to ask any question that might help you understand the specifications or requirements better.

## Delivery
Your application can be sent to us as a GitHub repository (in which case you are welcome to fork this repository) or as a compressed archive containing all the deliverables.

## The challenge
Seeks to see how you transform UI Designs to Responsive, Functional and User-friendly App. In this case we use a simple blog using WordPress as Backend



## Product specification
The application is composed of two major views.


1. The Landing Page - Shows all blog posts by category
2. A Single Blog - Shows a single blog post, with form for user to submit their comments and list of comments on the post
```
See the mockups here https://www.figma.com/file/mznMhyPC5AHJ4sIyNQwzqd/Everyday-News?node-id=0%3A1
```

## Review session
After receiving your code challenge, we organize a review session with you and a few engineers from B+B. During the review session, we will:

* Ask you to share you screen and do a quick demo of the app you built
* Ask you to present your project structure and walk us through the code (the different components, the state management, etc.)
* Ask you general technical questions related to your project and frontend architecture
* A few examples of the topic that we like to discuss in more details:
   Scaling of an SPA
   Smart/dumb components
   UI libraries
   State management
   Styling
   Testing
