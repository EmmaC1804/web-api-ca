import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {
    getUpcomingMovies
  } from '../tmdb-api';

  import{
    getGenres
  }from '../tmdb-api';

  import {
     getTrendingMovies
  } from '../tmdb-api';

  import { getTopRatedMovies } from '../tmdb-api';
  import { getPopularMovies } from '../tmdb-api';
  import { getNowPlayingMovies } from '../tmdb-api';
  import { getMovies } from '../tmdb-api';
  import { getMovie } from '../tmdb-api';
  import { getMovieImages } from '../tmdb-api';
  import { getSimilarMovie } from '../tmdb-api';
  import { getMovieReviews } from '../tmdb-api';

  //Shows
  import { getShows } from '../tmdb-api';
  import { getTVGenres } from '../tmdb-api';
  import { getCurrentShows } from '../tmdb-api';
  import { getPopularShows } from '../tmdb-api';
  import { getTopRatedShows } from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/tmdb/trending', asyncHandler(async (req, res) => {
    const trending = await getTrendingMovies();
    res.status(200).json(trending);
}));

router.get('/tmdb/top_rated', asyncHandler(async (req, res) => {
    const top_rated = await getTopRatedMovies();
    res.status(200).json(top_rated);
}));

router.get('/tmdb/now_playing', asyncHandler(async (req, res) => {
    const now_playing = await getNowPlayingMovies();
    res.status(200).json(now_playing);
}));

router.get('/tmdb/popular', asyncHandler(async (req, res) => {
    const popular = await getPopularMovies();
    res.status(200).json(popular);
}));

router.get('/tmdb/discover', asyncHandler(async (req, res) => {
    const discover = await getMovies();
    res.status(200).json(discover);
}));

router.get('/tmdb/movie', asyncHandler(async (req, res) => {
    const movie = await getMovie();
    res.status(200).json(movie);
}));

router.get('/tmdb/similar', asyncHandler(async (req, res) => {
    const similar = await getSimilarMovie();
    res.status(200).json(similar);
}));

router.get('/tmdb/reviews', asyncHandler(async (req, res) => {
    const reviews = await getMovieReviews();
    res.status(200).json(reviews);
}));

router.get('/tmdb/images', asyncHandler(async (req, res) => {
    const images = await getMovieImages();
    res.status(200).json(images);
}));

//Shows
router.get('/tmdb/tvGenres', asyncHandler(async (req, res) => {
    const tvGenres = await getTVGenres();
    res.status(200).json(tvGenres);
}));

router.get('/tmdb/discover', asyncHandler(async (req, res) => {
    const disc = await getShows();
    res.status(200).json(disc);
}));

router.get('/tmdb/top_rated', asyncHandler(async (req, res) => {
    const top = await getTopRatedShows();
    res.status(200).json(top);
}));

router.get('/tmdb/now_playing', asyncHandler(async (req, res) => {
    const current = await getCurrentShows();
    res.status(200).json(current);
}));

router.get('/tmdb/popular', asyncHandler(async (req, res) => {
    const pop = await getPopularShows();
    res.status(200).json(pop);
}));

export default router;