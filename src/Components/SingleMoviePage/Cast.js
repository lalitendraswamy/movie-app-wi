
import './index.css'

const Cast=(props) =>{
    const {obj} =props;
    console.log(obj);
    return(<li className="cast-li">
        <img className='cast-dp' src={`https://image.tmdb.org/t/p/w500${obj.profile_path}`} alt='cast-dp' />
        <h2>{obj.name}</h2>
        <p>Character : {obj.character}</p>
    </li>)
}

export default Cast