
import { useState } from 'react';

export const useContador = ( inicia = 10 ) => {
    const [contador, setContador] = useState( inicia );

    const Sumar = ( value ) => {
        setContador(contador + value);
    }

    const Restar = (value ) => {
        setContador(contador - value);
    }

    const Division = ( value ) => {
        setContador(contador / value);
    }

    const Multip = (value ) => {
        setContador(contador * value);
    }

    const Reiniciar = () => {
        setContador(inicia);
    }

  return { Sumar , Restar, Multip , Division , Reiniciar , contador }; 
}
