import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"

export default function Movie(){
    const {movie} = useParams()
    const [movieInfo, setMovieInfo] = useState()

    const apiKey = import.meta.env.VITE_APP_API_KEY

    console.log(movie)

    const getMovie = async()=>{
        const response = await fetch(`https://www.omdbapi.com/?i=${movie}&apikey=${apiKey}`)
        const data = await response.json()
        setMovieInfo(data)
        console.log(data);
    }

    useEffect(()=>{
        getMovie()
    }, [movie])

    return (
        <main>
            <h1>{movieInfo?.Title}</h1>
            <img src={movieInfo?.Poster} alt={`Poster for ${movieInfo?.Title}`} />
            <section>
                <p>År: {movieInfo?.Year}</p>
                <p>Regissør: {movieInfo?.Director}</p>
                <p>Skuespillere: {movieInfo?.Actors}</p>
                <p>Plot: {movieInfo?.Plot}</p>
            </section>
        </main>
    )
}