import { useEffect, useState } from "react"
import MovieList from "../components/MovieList"

export default function Home(){

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState()
    
    const apiKey = import.meta.env.VITE_APP_API_KEY
        
    const getMovies = async()=>{
        try{
            const trimmedSearch = search?.trim()
            // Leger til wildcard * for å få relevante resultater fordi OMDb API ved søkeret "harry po" returnerer "Movie not found!",
            // mens "harry po*" returnerer relevante resultater.
            const query = trimmedSearch?.length >= 3 ? `${trimmedSearch}*` : "James Bond"
            const baseUrl = `http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=`
            
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
        getMovies()
    }, [search])

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

            <MovieList movies={movies} heading={search?.length >= 3 ? `Søkeresultater for "${search}"` : "James Bond filmer"} />
        </main>
    )  
}