import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Users/Register/Register';
import Login from './components/Users/Login/Login';

import './App.css';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path='/users/register' element={<Register />} />
          <Route path='/users/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
