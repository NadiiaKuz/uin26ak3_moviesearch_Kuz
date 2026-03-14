import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"

export default function Movie(){
    const {movie} = useParams()
    const [movieInfo, setMovieInfo] = useState()
    const [imageError, setImageError] = useState(false)

    const posterExists = movieInfo?.Poster && !imageError && movieInfo?.Poster !== "N/A"

    const apiKey = import.meta.env.VITE_APP_API_KEY

    console.log(movie)

    const getMovie = async()=>{
        const response = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`)
        const data = await response.json()
        setMovieInfo(data)
        console.log(data);
    }

    useEffect(()=>{
        getMovie()
    }, [movie])

    return (
        <main className="movie-main">
            <h1>{movieInfo?.Title}</h1>

            {posterExists ? (
                <img src={movieInfo?.Poster} alt={`Poster for ${movieInfo?.Title}`} onError={() => setImageError(true)} />) 
                : 
                (<p className="poster-missing">Ingen plakat tilgjengelig</p>)}

            <section>
                <p>År: {movieInfo?.Year}</p>
                <p>Regissør: {movieInfo?.Director}</p>
                <p>Skuespillere: {movieInfo?.Actors}</p>
                <p>Plot: {movieInfo?.Plot}</p>
            </section>
        </main>
    )
}