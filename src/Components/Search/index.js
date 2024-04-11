import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../MovieCard/index.js";
import "./index.css";

const Search = () => {
  const { search } = useParams();

  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=0e4cbd4813aa6ef290ad76141eaeda85&language=en-US&query=${search}&page=1`
        );
        const jsonData = await response.json();
        setSearchData(jsonData);
      } catch (error) {
        console.error("Error fetching search data:", error);
      }
    };

    fetchSearchData();
  }, [search]);

  console.log(searchData);

  


  const updatedData = searchData!==null && (searchData.results.map((eachitem)=>{
    return (
      {
        adult:eachitem.adult,
        backdroppath:eachitem.backdrop_path,
        genreids:eachitem.genre_ids,
        id:eachitem.id,
        originallanguage:eachitem.original_language,
        originaltitle:eachitem.original_title,
        overview:eachitem.overview,
        popularity:eachitem.popularity,
        posterpath:eachitem.poster_path,
        releasedate:eachitem.release_date,
        title:eachitem.title,
        video:eachitem.video,
        voteaverage:eachitem.vote_average,
        votecount:eachitem.vote_count
      }
    )
  })
);
  
  
return (
    <div className="home-card d-flex justify-content-center align-items-center">
      {searchData ? ( 
        <div className="col-11 d-flex flex-column justify-content-center align-items-center">
          {searchData.results && searchData.results.length > 0 ? ( 
            <ul className="col-11 d-flex justify-content-between flex-wrap">
              {updatedData.map(obj => (
                <MovieCard key={obj.id} obj={obj} />
              ))}
            </ul>
          ) : (
            <div className="col-11 d-flex flex-column justify-content-center align-items-center">
            <p>No results found.</p>
            </div>
          )}
        </div>
      ) : (
        <p>Loading movie data...</p>
      )}
    </div>
  );
};

export default Search;
