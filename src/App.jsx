import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Netflix from "./pages/Netflix"
import Login from "./pages/Login"
import TVShows from './pages/TVShows';
import MoviePage from './pages/Movies';
import Signup from "./pages/Signup"
import Player from './pages/Player';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="player" element={<Player />} />
      <Route exact path="/tv" element={<TVShows />} />
      <Route exact path="/movies" element={<MoviePage />} />

      {/* <Route exact path="/mylist" element={<UserListedMovies />} /> */}
      <Route exact path="/" element={<Netflix />} />
    </Routes>
    </BrowserRouter>
  );
}
