import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Users/Register/Register';
import Login from './components/Users/Login/Login';

import './App.css';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Footer from './components/Footer/Footer';
import MoviesContext from './context/MoviesContext';
import { useState } from 'react';

function App() {
  
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <MoviesContext.Provider value={{ movies, setMovies }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path='/users/register' element={<Register />} />
              <Route path='/users/login' element={<Login />} />
            </Routes>
          </MoviesContext.Provider>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
