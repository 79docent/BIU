import React, { useCallback, useEffect, useState, } from "react";
import Movie from "./Movie";

const MovieList = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (props.movies) setMovies(props.movies);
    }, [props]);



    return (
            <div className="container">
            <div className="row">
                <div className="col s12">
                    {console.log(movies)}
                    {
                        movies.map((movie, i) => {
                            return (
                                <div key={i}>
                                    <Movie viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path}/>
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