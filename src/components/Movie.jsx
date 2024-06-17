import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

export default function Movie(){
    
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }
    
    
    
    return(
        <>
        
        <div className="movie w-[100%] flex flex-col relative align-centre">
            <div className="movie__intro ">
                <img className="movie__backdrop w-[100%] h-[500px] object-cover" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail align-centre w-[75%] flex relative bottom-56">
                <div className="movie__detailLeft mr-9 ">
                    <div className="movie__posterBox">
                        <img className="movie__poster w-[300px] rounded-xl" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight flex flex-col text-white h-[450px] justify-between">
                    <div className="movie__detailRightTop text-lg ">
                        <div className="movie__name font-semibold text-5xl">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount ml-4">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres m-4 ">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre p-2 border-2 rounded-3xl mr-3" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom basis-2 m-8 text-xl">
                        <div className="synopsisText flex relative align-centre">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links relative bottom-28 flex justify-between w-[75%] ml-5 text-xl">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button flex justify-center align-middle p-3 bg-red-500 rounded-xl">Homepage <i className="newTab fas fa-external-link-alt ml-3"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button flex justify-center align-middle p-3 bg-yellow-500 rounded-xl">IMDb<i className="newTab fas fa-external-link-alt ml-3"></i></span></p></a>
                }
            </div>
            <div className="movie__heading ml-5 text-xl">Production companies</div>
            <div className="movie__production  flex justify-center items-end mb-16 text-xl">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage flex flex-col align-middle justify-center">
                                    <img className="movie__productionComapany w-[200px] m-8" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )

        </>
    )
}