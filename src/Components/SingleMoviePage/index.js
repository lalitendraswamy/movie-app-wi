import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cast from './Cast.js'
import "./index.css";

const SingleMoviePage = () => {
  const { movie } = useParams();

  const [movieData, setMovieData] = useState(null);
  const [castData, setCastData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movieResponse, castResponse] = await Promise.all([
          fetch(
            `https://api.themoviedb.org/3/movie/${movie.slice(
              1
            )}?api_key=0e4cbd4813aa6ef290ad76141eaeda85&language=en-US&page=1&language=en-US&page=1`
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/${movie.slice(1)}/credits?api_key=0e4cbd4813aa6ef290ad76141eaeda85&language=en-US&page=1&language=en-US&page=1`
          )
        ]);
        const [movieJson, castJson] = await Promise.all([
          movieResponse.json(),
          castResponse.json()
        ]);
        setMovieData(movieJson);
        setCastData(castJson);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
      {loading ? (
        <p>Loading movie data...</p>
      ) : (
        <div className="col-11 d-flex flex-column justify-content-center align-items-center">
          <div className="col-11 single-movie-card">
            <div className="w-60 p-3 order-2 order-md-1">
              <div className="d-flex">
                <img className="poster d-none d-md-block" src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt='poster' />
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
            <img className="smp-bg order-1 order-md-2" src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} alt='single-movie-bg' />
          </div>
          
          <ul className="d-flex justify-content-between align-items-center  flex-wrap mt-5">
              {castData.cast && (castData.cast.map(obj=>(<Cast key={obj.id} obj={obj}/>)))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SingleMoviePage;
