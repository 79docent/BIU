import React from "react";

const MovieInfo = (props) => {
    return (
        <div className="container">
            <br></br>
            <div className="row">
                <div className="col s12 m4">
                    {
                        props.currentMovie.poster_path == null ? <img src={"https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg"} alt="Card image" style={{ width: "100%", height: 360 }} ></img> 
                        : <img src={`https://image.tmdb.org/t/p/w500/${props.currentMovie.poster_path}`} alt="Card image" style={{ width: "100%", height: 360 }} ></img>
                    }
                </div>
                <div className="col s12 m8">
                    <div className="info-container">
                        <p>Tytuł: {props.currentMovie.title}</p> 
                        <p>Data premiery: {props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</p>
                        <p>{props.currentMovie.overview}</p>
                        <p>Średnia ocen: {props.currentMovie.vote_average}</p>
                        <p>Oddane głosy: {props.currentMovie.vote_count}</p>
                        <p>Popularność: {props.currentMovie.popularity}</p>
                        <p>Język filmu: {props.currentMovie.original_language}</p>
                        <div>Gatunki filmu: {props.currentMovieGenre.map(genre => <div key={genre.id}><li>{genre.name}</li></div>)}</div>
        


                    </div>
                </div>
            </div>   
        </div>
    )
}

export default MovieInfo;