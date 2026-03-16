import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"

export default function Movie(){
    const {movie} = useParams()
    const [movieInfo, setMovieInfo] = useState()
    const [imageError, setImageError] = useState(false)

    // Sjekker om det finnes en gyldig plakat-URL før vi prøver å vise bildet
    // fordi OMDb API prøver å laste lenken, eksisterer bildet faktisk ikke lenger på Amazon sin bildedatabase, 
    // og returnerer "Not Found" når plakat finnes ikke, og det fører til en 404-feil når vi prøver å laste bildet.
    // Men denne 404-feilen i konsollen påvirker ikke brukerens opplevelse
    const posterExists = movieInfo?.Poster && !imageError && movieInfo?.Poster !== "N/A"

    const apiKey = import.meta.env.VITE_APP_API_KEY

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