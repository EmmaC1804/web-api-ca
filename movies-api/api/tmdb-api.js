import fetch from 'node-fetch';

export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

  export const getTrendingMovies = async () => {
    try{
        const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );
        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

  export const getTopRatedMovies = async () => {
    try{
        const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
} catch (error) {
    throw error;
}
};

  export const getNowPlayingMovies = async () => {
    try{
        const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
} catch (error) {
    throw error;
}
};


  export const getPopularMovies = async () => {
    try{
        const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
} catch (error) {
    throw error;
}
};

export const getMovies = async () => {
    try{
        const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
} catch (error) {
    throw error;
}
};

export const getSimilarMovie = async ({queryKey}) => {
    try{
    const [, idPart] = queryKey;
    const { id } = idPart;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.TMDB_KEY}&language=en-US`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
} catch (error) {
    throw error;
}
};

  export const getMovieImages = async ({ queryKey }) => {
    try{
    const [, idPart] = queryKey;
    const { id } = idPart;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
} catch (error) {
    throw error;
}
};

  export const getMovieReviews = async ({ queryKey }) => {
    try{
    const [, idPart] = queryKey;
    const { id } = idPart;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
} catch (error) {
    throw error;
}
};

  export const getMovie = async (args) => {
    try{
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
} catch (error) {
    throw error;
}
};


  //Shows not working

export const getShows = async () => {
    try{
        const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
} catch (error) {
    throw error;
}
};

    
    export const getTVGenres = async () => {
        try{
            const response = await fetch(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.TMDB_KEY}&language=en-US`
      );
      if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
} catch (error) {
    throw error;
}
};
    
  
    export const getCurrentShows = async () => {
        try{
            const response = await fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
      );
      if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
} catch (error) {
    throw error;
}
};
  
    export const getPopularShows = async () => {
        try{
            const response = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
      );
      if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
} catch (error) {
    throw error;
}
};
  
    export const getTopRatedShows = async () => {
        try{
            const response = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1"
      );
      if (!response.ok) {
        throw new Error(response.json().message);
    }

    return await response.json();
} catch (error) {
    throw error;
}
};
