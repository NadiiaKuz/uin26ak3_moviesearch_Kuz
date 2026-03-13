import { useEffect, useState } from "react"
import MovieList from "../components/MovieList"

export default function Home(){

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState()

    const defaultSearch = encodeURIComponent("James Bond")

    const baseUrl = `http://www.omdbapi.com/?s=${defaultSearch}&apikey=`
    const apiKey = import.meta.env.VITE_APP_API_KEY
        
    const getMovies = async()=>{
        try{
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()
            setMovies(data?.Search)
            console.log(data);
        }
        catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        setSearch(defaultSearch)
        getMovies()
    }, [])

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

            <MovieList movies={movies} heading="James Bond filmer" />
        </main>
    )
    
    
}