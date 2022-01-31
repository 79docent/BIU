import React, { useEffect } from "react";

const Movie = (props) => {
    useEffect(() => {
        console.log(props);
    }, [props])
    return (
        <div>
            <div className="col s12 m6 l6">
                <div className="card horizontal">
                    <div className="card-image waves-effect waves-block waves-light">
                        {
                            props.image == null ? <img src={`https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg`} alt="" style={{ width: "100%", height: 360 }} /> : 
                            <img src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt="" style={{ width: "100%", height: 360 }} /> 
                        }
                    </div>     

                    <div className="card-content">
                        <p>{props.movieName}</p>
                        <p><a href="#" className="" onClick={() => props.viewMovieInfo(props.movieId)}>Zobacz szczegóły</a></p>
                    </div> 

                </div>
            </div>
        </div>
    )
}

export default Movie;