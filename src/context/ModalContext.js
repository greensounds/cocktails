import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const ModalContext = createContext();


const ModalProvider = (props) => {
    
    //state del provider
    const [ idreceta, guardarIdReceta ] = useState(null);
    const [ inforeceta , guardarReceta] = useState({});

    //una vez que tienes la receta llamar la api
    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idreceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const resultado = await axios(url);
            guardarReceta(resultado.data.drinks[0]);
        }
        obtenerReceta();
    }, [idreceta])
    return (
        <ModalContext.Provider
            value={{
                inforeceta,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;