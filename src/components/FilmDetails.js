import React from "react";

const FilmDetails = ({selectedFilm, image}) => {
    console.log(image);
    return(
        <>
            <h2>Title: {selectedFilm.title}</h2>
            <div><strong>Description</strong>: {selectedFilm.description}</div>
            <h3>Director: {selectedFilm.director}</h3>
            <h3>Producer: {selectedFilm.producer}</h3>  
            <img src={image} />
    
           
        </>
    );
}
export default FilmDetails;