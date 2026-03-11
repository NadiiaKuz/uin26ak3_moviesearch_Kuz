export default function MovieCard({movie}){
    return (
        <li>
            <article className="movie-card">
                <h3>{movie.Title}</h3>
                <img src={movie.Poster} alt={movie.Title} />
                <p>År: {movie.Year}</p>
            </article>
        </li>
    )
}