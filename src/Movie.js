import React from 'react';

const Movie = ({title, year, rated, released, runtime, poster}) => {
    return (
         <div>
         <h1>{title}</h1>
         <p>{year}</p>
         <p> {rated} </p>
         <p> {released} </p>
         <p> {runtime} </p>
         <img src={poster} alt='' />
        </div>
        );
}

export default Movie;