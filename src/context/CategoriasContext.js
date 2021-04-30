import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react';

//crear el context
export const categoriasContext = createContext();

//provider es donde se encuentran las funciones y state
const CategoriasProvider= (props) => {

    const [categorias, guardarCategorias] = useState([]);

    //ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias =await axios.get(url);

            guardarCategorias(categorias.data.drinks); 
        }
            obtenerCategorias();
    }, []);

    return(
        <categoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </categoriasContext.Provider>
    );
}
export default CategoriasProvider;
