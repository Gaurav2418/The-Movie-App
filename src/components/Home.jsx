import { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
<link rel="stylesheet" media="screen and (max-width: 380px)" href="App.css"></link> 

export default function Home(){
   const [popularMovies, setPopularMovies] = useState([]);
   
    useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    .then(res => res.json())
    .then(data => setPopularMovies(data.results))
   }
,[])
   
    return(
        <>
        Home page
        <Carousel className="size-full"
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
        >
            {/* every item in popularMovies array is mapped here to desplay */}
           
            {popularMovies.map((movie)=>(
              <Link to={`/movie/${movie.id}`} style={{textDecoration:"none",color:"white"}}  >
              <div className="posterImage w-full  h-full sm:h-[700px]">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
              </div>
              <div className="posterImage__overlay text-white p-[2rem]
              absolute bottom-0  flex flex-col w-full  justify-end items-start transition-opacity:.3s">
                  <div className="posterImage__title text-yellow-300 font-bold sm:text-3xl ">{movie ? movie.original_title: ""}</div>
                  <div className="posterImage__runtime text-sm sm:text-xl">
                      {movie ? movie.release_date : ""}
                      <span className="posterImage__rating pl-8">
                          {movie ? movie.vote_average :""}
                          <i className="fas fa-star pl-2" />{" "}
                      </span>
                  </div>
                  <div className="posterImage__description text-xs sm:text-lg">{movie ? movie.overview : ""}</div>
              </div>
          </Link>
            ))
        }
        </Carousel>
        <MovieList />
        </>
    )
}