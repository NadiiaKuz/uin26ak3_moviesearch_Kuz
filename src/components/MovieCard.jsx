import { Link } from "react-router-dom"

export default function MovieCard({movie}){
    const slug = encodeURIComponent(movie.Title)
    return (
        <li>
            <article className="movie-card">
                <h3>{movie.Title}</h3>
                <img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
                <p>År: {movie.Year}</p>
                <Link to={`/${slug}`}>Se detaljer</Link>
            </article>
        </li>
    )
}