const MovieCard=(props)=>{

    const {obj}=props
    console.log(`https://api.themoviedb.org${obj.backdroppath}`);

    return(
        <li className="shadow">
            <img src={`https://image.tmdb.org/t/p/w500${obj.backdroppath}`} alt='banner' />
            <h2>{obj.title}</h2>
            <p>Rating: {obj.voteaverage}</p>
        </li>
    )
}

export default MovieCard