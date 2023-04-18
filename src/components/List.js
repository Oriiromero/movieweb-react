import React, { useEffect, useState } from 'react'
import { Edit } from './Edit';

export const List = ({listState, setListState}) => {


      //estados
      //const [listState, setListState] = useState([]);

      const [edit, setEdit] = useState(0);

      //efectos
      useEffect (() => {
            console.log("componente de list pelis cargado ")
            getMovies();
      }, []);


      //metodo
      const getMovies = () => {
            let movies = JSON.parse(localStorage.getItem("movies"));
            //Con esto se cargan las peliculas del localstorage dentro del array vacio del estado del useState
            movies === null && (movies = []); //ESTO EVITA QUE CUANDO SE BORRAN TODAS LAS PELICULAS Y SE VUELVEN A AGREGAR NUEVAS NO DE ERROR Y SE BLOQUEE EL CODIGO

            setListState(movies);

            return movies;
      }

      const deleteMovie = (id) => {
           // Conseguir las peliculas almacenadas
            let saved_movies = getMovies();

           // Filtrar las peliculas par que elimine del array la que no quiero
            let new_movies_array = saved_movies.filter(movie => movie.id !== parseInt(id));

           // Actualizar estado del listado
            setListState(new_movies_array);
            
           // Actualizar los datos en el local storage
           localStorage.setItem("movies", JSON.stringify(new_movies_array));
      }

  return (
        <>
            {/*BUCLE .MAP QUE RECORRE TODAS LAS PELICULAS */}
            {listState != null ?
                  listState.map(movie => 
                   {
                        return(
                              <article key={movie.id} className="movie-item">
                                    <h3 className="title">{movie.title}</h3>
                                    <p className="description">{movie.description}</p>

                                    <button className="edit" onClick={ () =>{ setEdit(movie.id) }}>Edit</button>
                                    <button className="delete" onClick={() => deleteMovie(movie.id)}>Delete</button>

                                    {/*condicion para que APAREZCA FORMULARIO DE EDITAR*/}
                                    {edit === movie.id && (

                                          <Edit movie={movie} getMovies={getMovies} setEdit={setEdit} setListState={setListState}/>
 
                                    )}

                              </article>
                         );
                   }
                  )
            : <h2>There's no movies to show!</h2>
      }
            
         </>
  )
}
