import { Component } from "react";
import MovieCard from "../MovieCard";


class TopRated extends Component{

    state={moviesList:[]}

    componentDidMount(){
       this.getMovies();
        
    }

    getMovies=async()=>{
        
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=0e4cbd4813aa6ef290ad76141eaeda85&language=en-US&page=1&language=en-US&page=1`);
        const jsonData = await response.json();
        
        const updatedData = jsonData.results.map((eachitem)=>{
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

        this.setState({moviesList:updatedData})
    }

    render(){

        const {moviesList}=this.state;

        return(
            <div className="home-card d-flex justify-content-center align-items-center">
                <ul className="col-11 d-flex justify-content-between flex-wrap">
                    {moviesList.map(obj=>(<MovieCard key={obj.id} obj={obj} />))}
                </ul>
            </div>
        )
    }

}

export default TopRated