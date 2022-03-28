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
import UsersContext from './context/UsersContext';
import Logout from './components/Users/Logout/Logout';
import Account from './components/Users/Account/Account';

function App() {

  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <UsersContext.Provider value={{ user, setUser }}>
            <Header />
            <MoviesContext.Provider value={{ movies, setMovies }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
                <Route path='/users/register' element={<Register />} />
                <Route path='/users/login' element={<Login />} />
                <Route path='/users/account' element={<Account />} />
                <Route path='/users/logout' element={<Logout />} />
              </Routes>
            </MoviesContext.Provider>
          </UsersContext.Provider>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
