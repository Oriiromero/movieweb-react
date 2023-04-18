export const SaveInStorage = (key, element) => {
    //Conseguir los elementos que ya hay en el local storage 
    let elements = JSON.parse(localStorage.getItem(key));

    console.log(elements);
    
    ///Comprobar si es un array 
    if(Array.isArray (elements)){
        //Añadir dentro del array un elemento nuevo
        elements.push(element);
    }else{
        //Crear un array con la nueva peli
        elements = [element];
    }
    //Guardar en el localstorage
    localStorage.setItem(key, JSON.stringify(elements));

    //Devolver objeto guardado
    return element;
    
}
