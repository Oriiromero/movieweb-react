import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage';

export const Add = ({setListState}) => {

    const titleComponent = "Add movie";
    const [movieState, setMovieState] = useState({
        titulo: '',
        description: ''
    });

    const {title, description} = movieState;

    const getFormData = e => {

        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        //Crear objeto de la pelicula a guardar
        let movie = {
            id: new Date().getTime(),
            title,
            description
        };

        //Guardar estado
        setMovieState(movie);

        //Actualizar el estado del listado principal
        setListState(elements => {
            return[...elements, movie];
        })
        
        //Guardar en el almacenamiento local
        SaveInStorage("movies", movie);
    }


  return (
    <div className="add">
        <h3 className="title">{titleComponent}</h3>

        <strong>
            {(title && description) && "You have created the movie: " + title}
        </strong>

        <form onSubmit={getFormData}>
            <input type="text" 
                 id='title' 
                 placeholder="Title"
                 name="title"
                 />

            <textarea id="description" 
                    name="description"
                     placeholder="Description"></textarea>

            <input type="submit"
                     id="save" 
                     value="Save" />

        </form>

    </div>
  )
}
