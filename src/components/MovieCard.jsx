import { Link } from "react-router-dom"
import {useState } from "react"

export default function MovieCard({movie}){
    const [imageError, setImageError] = useState(false)

    const posterExists = movie.Poster && !imageError

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