import MovieCard from "./MovieCard";

export default function MovieList({movies, heading}){
    // Fjerner duplikater basert på imdbID og Title
    // for eksempel, Title: "Harry Potter 20th Anniversary: Return to Hogwarts" imdbID: "tt16116174"
    const uniqueMoviesList = movies?.filter((movie, index, self) =>
        index === self.findIndex((m) => m.imdbID === movie.imdbID)
    ); 

    return (
        <section className="movie-list">
            <h2>{heading}</h2>
            {uniqueMoviesList.map((movie) => (<MovieCard key={movie.imdbID + movie.Title} movie={movie} />))}
        </section>
    )
}