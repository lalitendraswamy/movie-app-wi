import { Component } from "react";
import MovieCard from "../MovieCard";
import "./index.css";

class Home extends Component {
  state = { moviesList: [], page: 1, last_page: "" };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const { page } = this.state;
    console.log(page);

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=0e4cbd4813aa6ef290ad76141eaeda85&language=en-US&page=${page}`
    );
    const jsonData = await response.json();
    console.log(jsonData);
    const updatedData = jsonData.results.map((eachitem) => {
      return {
        adult: eachitem.adult,
        backdroppath: eachitem.backdrop_path,
        genreids: eachitem.genre_ids,
        id: eachitem.id,
        originallanguage: eachitem.original_language,
        originaltitle: eachitem.original_title,
        overview: eachitem.overview,
        popularity: eachitem.popularity,
        posterpath: eachitem.poster_path,
        releasedate: eachitem.release_date,
        title: eachitem.title,
        video: eachitem.video,
        voteaverage: eachitem.vote_average,
        votecount: eachitem.vote_count,
      };
    });

    this.setState({
      moviesList: updatedData,
      page: jsonData.page,
      last_page: jsonData.total_pages,
    });
  };

  onNext = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.getMovies();
    });
  };

  onPrev = () => {
    const { page } = this.state;

    if (page >= 2) {
      this.setState({ page: this.state.page - 1 }, () => {
        this.getMovies();
      });
    }
  };

  render() {
    const { moviesList, page, last_page } = this.state;

    return (
      <div className="home-card d-flex flex-column justify-content-center align-items-center">
        <ul className="col-11 d-flex justify-content-around flex-wrap">
          {moviesList.map((obj) => (
            <MovieCard key={obj.id} obj={obj} />
          ))}
        </ul>
        <div className="mb-4 pagination">
          <p>{page}</p>
          <button className="btn btn-success" onClick={this.onPrev}>
            Prev
          </button>
          <button className="btn btn-primary" onClick={this.onNext}>
            Next
          </button>
          <p>{last_page}</p>
        </div>
      </div>
    );
  }
}

export default Home;
