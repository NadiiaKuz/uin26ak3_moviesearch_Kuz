import MovieCard from "./MovieCard";

export default function MovieList({movies, heading}){
    return (
        <section className="movie-list">
            <h2>{heading}</h2>
            {movies.map((movie) => (<MovieCard key={movie.imdbID + movie.Title} movie={movie} />))}
        </section>
    )
}