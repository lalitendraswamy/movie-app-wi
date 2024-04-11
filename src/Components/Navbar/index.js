import { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'


class Navbar extends Component{


  state={search:''}

  searchMovie=(event)=>{

    this.setState({search:event.target.value})
  }

 

  render(){
    const {search}=this.state;
    return(<nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid col-11">
    <Link to='/' className="navbar-brand">MovieDb</Link>
    <div className='links'>
        <Link to='/' className='link'> Popular</Link>
    <Link to='/top-rated' className='link'> Top Rated</Link>
    <Link to='/upcoming-movies' className='link'> Upcoming</Link>

    </div>
    
    <div className="d-flex" role="search">
      <input className="form-control me-2" onChange={this.searchMovie} type="search" placeholder="Search" valur={search} aria-label="Search"/>
      <Link  to={`/search/${search}`}><button   className="btn btn-outline-success" type="submit">Search</button></Link>
    </div>
  </div>
</nav>)
  }
}



export default Navbar