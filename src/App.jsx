import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import MovieList from './components/MovieList'
import Movie from './components/Movie'

function App() {


  return (
    <>
      <Router>
      <Header className=""/>
        <Routes>
         
          {/* route for index or home page */}
          <Route index element={<Home/>}></Route>   
         
          {/* route for single movie details */}
          <Route path="movie/:id" element={<Movie />}></Route>
         
          {/* route for rendering movie list based on type like top rated/ trending/upcoming */}
          <Route path="movies/:type" element={<MovieList />}></Route>
          
          <Route path="/*" element={<h1>Error page</h1>}></Route>
        
        </Routes>
      </Router>
    </>
  )
}

export default App
