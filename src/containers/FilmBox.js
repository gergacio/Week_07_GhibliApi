import React, { useEffect, useState } from "react";
import FilmSelector from "../components/FilmSelector";
import FilmDetails from "../components/FilmDetails";

const FilmBox = () => {
    //define state
    //arr of obj comming from outside..si initialise film as empty arr
    const [ films, setFilms ] = useState([]);
    const [ selectedFilm, setSelectedFilm ] = useState(null);
    const [image, setImage] = useState(null);
   
    //request given API..givi it to useEffect hook
    useEffect(() => {
        //update films state
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(data => setFilms(data))
    },[]);

    //async/await way to do it
    // async function fetchFilms() {
    //     //async/await use it when dont know when some operation will finish(example - networking)
    //     //fetch give us promise obj which we turn into json obj
    //     const respond = await fetch('https://ghibliapi.herokuapp.com/films');
    //     const filmsJson = await respond.json();
    //     //update state with fetch result
    //     setFilms(filmsJson);
      
    // }


    //define func to handle selected film ..pass it down as props..get the film from down level 
    function onFilmSelected(film){
        //promise obj convert in blob obj,than convert in url string give it to the src of the image
        fetch(film.image)
        .then(res => res.blob())
        .then(data => URL.createObjectURL(data))
        .then(result => setImage(result))
     
        //update whole obj film
        setSelectedFilm(film);
        
    }
  
    return(
        <>
            
            {/* pass down as props films and func handle select func */}
            <FilmSelector films={films} onFilmSelected={onFilmSelected} />
            {selectedFilm ? <FilmDetails selectedFilm={selectedFilm} image={image}/> : null}
           
        </>
    );
}
export default FilmBox;