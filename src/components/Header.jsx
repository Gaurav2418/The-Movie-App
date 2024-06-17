import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
        <div className="flex sm:ml-3 space-x-8 text-xl">
            <Link to="/">
            <h3 className="text-2xl font-medium italic mt-2.5 cursor-pointer bg-gradient-to-r from-indigo-500 rounded-md pl-2 pb-1 pt-1">GStore movies</h3>
            {/* <img className=" min-w-[100px] sm:w-[120px] mt-2 cursor-pointer" src="./src/assets/movieLogo.png" alt="Logo" /> */}
            </Link>
            <Link  to="/movies/popular" className="flex pt-4">Popular</Link>
            <Link to="/movies/top_rated" className="flex pt-4">Top Rated</Link>
            <Link to="/movies/upcoming" className="flex pt-4">Upcoming</Link>
        </div>
        </>
    )
}