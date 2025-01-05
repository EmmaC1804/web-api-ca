export const getMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };
  
    export const login = async (username, password) => {
      const response = await fetch('http://localhost:8080/api/users', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({ username: username, password: password })
      });
      return response.json();
  };
  
  export const signup = async (username, password) => {
      const response = await fetch('http://localhost:8080/api/users?action=register', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({ username: username, password: password })
      });
      return response.json();
  };

  export const getUpcomingMovies = async() =>{
    const response = await fetch(
        'http://localhost:8080/api/movies/tmdb/upcoming', {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
      )
      return response.json();
  };

  export const getTrendingMovies = async() =>{
    const response = await fetch(
        'http://localhost:8080/api/movies/tmdb/trending', {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
      )
      return response.json();
  };

  export const getTopRatedMovies = async() =>{
    const response = await fetch(
        'http://localhost:8080/api/movies/tmdb/top_rated', {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
      )
      return response.json();
  };

  export const getNowPlayingMovies = async() =>{
    const response = await fetch(
        'http://localhost:8080/api/movies/tmdb/now_playing', {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
      )
      return response.json();
  };

  export const getPopularMovies = async() =>{
    const response = await fetch(
        'http://localhost:8080/api/movies/tmdb/popular', {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
      )
      return response.json();
  };

  export const getHomeMovies = async() =>{
    const response = await fetch(
        'http://localhost:8080/api/movies/tmdb/discover', {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
      )
      return response.json();
  };

  export const getSimilarMovies = async() =>{
    const response = await fetch(
        'http://localhost:8080/api/movies/tmdb/similar', {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
      )
      return response.json();
  };

  export const getMovie = async() =>{
    const response = await fetch(
        'http://localhost:8080/api/movies/tmdb/movie', {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
      )
      return response.json();
  };

  export const getMovieReviews = async() =>{
    const response = await fetch(
        'http://localhost:8080/api/movies/tmdb/reviews', {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
      )
      return response.json();
  };

  export const getMovieImages = async() =>{
    const response = await fetch(
        'http://localhost:8080/api/movies/tmdb/images', {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
      )
      return response.json();
  };

