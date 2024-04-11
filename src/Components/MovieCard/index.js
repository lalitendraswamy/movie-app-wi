import {Link} from 'react-router-dom'
import './index.css'
import StyledListItem from './StyledComponent.js'

const MovieCard=(props)=>{

    const {obj}=props
    

    return(
        <Link  className='movie-link' to={`/single-movie/:${obj.id}`}>
        <StyledListItem title={obj.title}  className="card-movie">
            <img className='movie-img' src={`https://image.tmdb.org/t/p/w500${obj.backdroppath}`} alt='banner' />
            <p>Rating: {obj.voteaverage.toFixed(1)}</p>
        </StyledListItem>
        </Link>
    )
}

export default MovieCard;