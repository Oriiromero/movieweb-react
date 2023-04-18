import React, { useState } from 'react'

export const Searcher = ({listState, setListState}) => {
  
  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);


  const searchMovie = (e) => {
    //Crear un estado y actualizarlo
    setSearch(e.target.value);

    //Filtrar para buscar cualquier coincidencias
    let foundMovies = listState.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLocaleLowerCase())
    });

    if(search.length <= 1 || foundMovies <= 0){
      foundMovies = JSON.parse(localStorage.getItem("movies"));
      setNotFound(true);
    }else{
      setNotFound(false);
    }

    //Comprobar si hay un resultado
    

    //Darle el valor que tenga en el localstorage


    //Actualizar estado del listado principal con lo filtrado
    setListState(foundMovies);
  }

  return (
        <div className="search">
            <h3 className="title">Searcher : {search}</h3>
            {(notFound === true && search.length > 1) && ( <span className='not-found'>There's no movie found with that name</span>)}
          
            <form>
              <input type="text" id="search_field" name="search" autoComplete='off' value={search} onChange={searchMovie}/>

              <button id="search">Search</button>
            </form>

        </div>
  )
}
