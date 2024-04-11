import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cast from './Cast.js'
import "./index.css";

const SingleMoviePage = () => {
  const { movie } = useParams();

  const [movieData, setMovieData] = useState(null);
  const [castData, setCastData] = useState(null);
  

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.slice(
            1
          )}?api_key=0e4cbd4813aa6ef290ad76141eaeda85&language=en-US&page=1&language=en-US&page=1`
        );
        const jsonData = await response.json();
        setMovieData(jsonData);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    
    fetchMovieData();
  }, [movie]);


  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.slice(1)}/credits?api_key=0e4cbd4813aa6ef290ad76141eaeda85&language=en-US&page=1&language=en-US&page=1`
        );
        const jsonData = await response.json();
        setCastData(jsonData);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    
    fetchCastData();
  }, [movie]);

  

  

  const formatDate = (dateString) => {
    if (!dateString) {
      return 'Release date unavailable'; 
    }
  
    const date = new Date(dateString); 
  
    
    const options = {
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
    };
  
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };


  return (
    <div className="home-card d-flex justify-content-center align-items-center">
      {movieData ? (
        <div className="col-11 d-flex flex-column justify-content-center align-items-center">
          <div className="col-11 single-movie-card">

          <div className="w-60 p-3">
          <div className="d-flex">
          <img className="poster" src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt='poster' />
          <div className="p-2">
          <h1>{movieData.title}</h1>
          <p>Rating: {movieData.vote_average.toFixed(1)}</p>
          <p>{movieData.runtime} min,  {movieData.genres.map(obj=>(obj.name)+' ')} </p>
          <p>Release Date: {formatDate(movieData.release_date)}</p>
          
          </div>
          </div>
          
          <h2>Overview</h2>
            <p>{movieData.overview}</p>
          </div>
            
            <img className="smp-bg" src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} alt='single-movie-bg' />
            
          </div>
          <ul className="d-flex justify-content-between flex-wrap mt-5">
            {castData.cast.map(obj=>(<Cast key={obj.id} obj={obj}/>))}
          </ul>
        </div>
      ) : (
        <p>Loading movie data...</p>
      )}
    </div>
  );
};

export default SingleMoviePage;
