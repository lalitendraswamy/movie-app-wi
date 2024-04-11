import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SingleMoviePage from './Components/SingleMoviePage';
import TopRated from './Components/TopRated';
import Upcoming from './Components/Upcoming';
import Search from './Components/Search';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/top-rated" element={<TopRated />} />
          <Route exact path="/upcoming-movies" element={<Upcoming />} />
          <Route path="/single-movie/:movie"  element={<SingleMoviePage />} />  
          <Route path="/search/:search"  element={<Search/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
