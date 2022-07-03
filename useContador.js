
import { useState } from 'react';

export const useContador = ( inicia = 10 ) => {
    const [contador, setContador] = useState( inicia );

    const Sumar = () => {
        setContador(contador + 1);
    }

    const Restar = () => {
        setContador(contador - 1);
    }

    const Reiniciar = () => {
        setContador(inicia);
    }

  return { Sumar, Restar, Reiniciar, contador }; 
}
