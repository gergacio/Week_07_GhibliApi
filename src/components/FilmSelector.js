import React from "react";

const FilmSelector = ({films, onFilmSelected}) => {
    //map films and turn obj into jsx options
    const newFilmList = films.map((film, index) => {
        return (<option value={index} key={index}>{film.title}</option>)
    });
    //event handler
    function onChange(evt){
        //find selected film pass it to define on top level func comming as props
        const idSelectd = evt.target.value;
        const selectedFilm = films[idSelectd];
        onFilmSelected(selectedFilm);
    }


    //define select dropdown..attach event onChange
    return(
       <> 
            <select defaultValue="" onChange={onChange}>
                <option  selected>Choose film</option>
                {newFilmList}
            </select>
          
            
       </>
    );

}
export default FilmSelector;
