import React, { useCallback, useEffect, useState, } from "react";
import Movie from "./Movie";

const MovieList = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (props.movies) setMovies(props.movies);
        console.log(props.movies);
    }, [props]);

    return (
            <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        movies.map((movie, i) => {
                            return (
                                <div key={i}>
                                    <Movie viewMovieInfo={props.viewMovieInfo} movieName={movie.title} movieId={movie.id} image={movie.poster_path}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}





export default MovieList;