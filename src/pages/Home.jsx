import { useState } from "react"
import MovieCard from "../components/MovieCard"
import MovieList from "../components/MovieList"

export default function Home(){
const dummyMovies = [
    {imdbID: "1", Title: "Harry Potter", Year: "2001", Poster: "../vite.svg"},
    {imdbID: "2", Title: "Harry Potter 2", Year: "2002", Poster: "../vite.svg"},
    {imdbID: "3", Title: "Harry Potter 3", Year: "2003", Poster: "../vite.svg"},
]

    const [search, setSearch] = useState()

    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    const apiKey = import.meta.env.VITE_APP_API_KEY

    const getMovies = async()=>{
        try{
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }

    return (
        <main>        
            <h1>Forside</h1>
            <form>
                <label>
                    Søk etter film
                    <input type="search" placeholder="Harry Potter" onChange={handleChange}></input>
                </label>
            </form>
            <button onClick={getMovies}>Søk</button>

            <MovieList movies={dummyMovies} heading="Dummy Movies" />
        </main>

    )
    
    
}