import { Link } from "react-router-dom"
import {useState } from "react"

export default function MovieCard({movie}){
    const [imageError, setImageError] = useState(false)

    // Sjekker om det finnes en gyldig plakat-URL før vi prøver å vise bildet
    // fordi OMDb API returnerer "Not found" når plakat finnes ikke, og det vil fører til en 404-feil når vi prøver å laste bildet.
    const posterExists = movie.Poster && !imageError && movie.Poster !== "N/A"

    return (
        <article className="movie-card">
            <h3>{movie.Title}</h3>
            
            {posterExists ? (
            <img
                src={movie.Poster}
                alt={`Poster for ${movie.Title}`}
                onError={() => setImageError(true)}
            />) : 
            (<p className="poster-missing">Ingen plakat tilgjengelig</p>)}

            <p>År: {movie.Year}</p>
            <Link to={`/${movie.imdbID}`}>Se detaljer</Link>
        </article>
    )
}