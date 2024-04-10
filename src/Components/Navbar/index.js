import {Link} from 'react-router-dom'
import './index.css'

const Navbar=()=>(
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid col-11">
    <Link to='/' className="navbar-brand">MovieDb</Link>
    <div className='links'>
        <Link to='/' className='link'> Popular</Link>
    <Link to='/top-rated' className='link'> Top Rated</Link>
    <Link to='/upcoming-movies' className='link'> Upcoming</Link>
    </div>
    
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
)

export default Navbar