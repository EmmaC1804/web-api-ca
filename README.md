# Assignment 2 - Web API.

Name: Emma Clarke

## Features.
 
 + Login, Signup, Logout feature
 + 4 new pages displaying popular movies, new, top rated and popular tv shows
 + All movie pages accessible from site header now read from my api
 + All except home page are protected routes

## Setup requirements.
No non startdard setup steps necessary

## API Configuration

.env that is in movies-api
______________________
NODEENV=development
PORT=8080
HOST=localhost
mongoDB=mongodb://localhost:27017/movies_db
TMDB_KEY= Replace with key
secret=YourJWTSecret
______________________

.env that is in react-movies
______________________
REACT_APP_TMDB_KEY= Replace with key
FAST_REFRESH=false
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies/tmdb/upcoming | GET | Gets a list of upcoming movies 
- /api/movies/tmdb/discover | GET | Gets a list of movies 
- /api/movies/tmdb/trending | GET | Gets a list of trending movies 
- /api/movies/tmdb/top_rated | GET | Gets a list of top rated movies 
- /api/movies/tmdb/now_playing | GET | Gets a list of new movies 
- /api/movies/tmdb/popular | GET | Gets a list of popular movies 
- /api/movies/tmdb/similar | GET | Gets a list of similar movies 
- /api/users | Post | Registers user 
- /api/users?action=register | Post | Creates a new user 

## Security and Authentication

All routes accessible from the site header except for the Home (/discover) are protected and you must be logged in to access them.
Following the final lab I set up a login and signup page to create and authenticate users. In the top right corner of the sight header there is a profile button. If you are not logged in it brings users to the login page, if users are logged in then it instead acts as the logout button.

## Integrating with React App
movies-api/api/tmdb-api.js - where the new connections to the tmdb api are. Similar to those in the api in react-movies

movies-api/api/movies/index.js - import from tmdb-api.js. where I put my router.get which will be accessed from frontend

react-movies/src/api/movies-api.js - frontend where functions are called in the backend. Functions from the backend are exported to here when called

//Pages that no longer call tmdb-api.
Movies Home Page
Movies Upcoming Page
Movies Trending Page
Movies Top Rated Page
Movies New Page
Movies Popular Page

Attempted to integrate shows and movie images & reviews


