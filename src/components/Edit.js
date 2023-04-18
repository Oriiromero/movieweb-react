/* eslint-disable no-unused-expressions */
import React from 'react'

export const Edit = ({movie, getMovies, setEdit, setListState}) => {

  const title_component = "Edit movie";

  const saveEdition = (e, id) => {
    e.preventDefault();
    
    //Consseguir el target del evento osea el formulario
    let target = e.target;

    //Buscar el indice del objeto de la pelicula a actualizar desde el local storage
    const stored_movies = getMovies();
    const index = stored_movies.findIndex(movie => movie.id === id); //solo si peli.id es igual a la id se guarda la info del indice en la variable index

    //Crear objeto con el indice almacenado, el titulo y descripcion
    let updated_movie = {
      id,
      title: target.title.value,
      description: target.description.value,
    }

    //Actualizar el elemento con ese indice
    stored_movies[index] = updated_movie;

    //Guardar el nuevo array de objetos en el local storage 
    localStorage.setItem('movies', JSON.stringify(stored_movies));

    //Actualizar estados
    setListState(stored_movies);
    setEdit(0);
  }




  return (
    <div className="edit_form"> 
        <h3 className='title'>{title_component}</h3>

        <form onSubmit={e => saveEdition(e, movie.id)}>
          <input type="text" name="title" className="edited_title" defaultValue={movie.title}/>
          <textarea name="description" defaultValue={movie.description} className="edited_description" />
          <input type='submit' className='edit' value="Save" />

        </form>
    </div>
  )
}
