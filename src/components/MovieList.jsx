import MovieCard from "./MovieCard";

export default function MovieList({movies, heading}){
    return (
        <section>
            <h2>{heading}</h2>
            <ul className="movie-list">
                {movies.map((movie) => (<MovieCard key={movie.imdbID} movie={movie} />))}
            </ul>
        </section>
    )
}