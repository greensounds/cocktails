import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Crear context
export const CategoriasContext = createContext();

//Provider es donde se encuentra las funciones y el state
const CategoriasProvider = (props) => {
    //crear el state del context
    //const [hola, guardarHola] = useState('hola');
    const [categorias, guardarCategorias] = useState([]);

    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
            const categorias = await axios(url);
            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    }, [])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;