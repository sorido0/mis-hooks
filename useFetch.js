
import { useEffect, useState } from 'react';


export const useFetch = (url) => {

    //const esMontado = useRef(true);

    //
    const [state, setState] = useState(
        {
            dataJson: null,
            isloading: true,
            error: null
        }
    ); // useState valida el estado de los datos

    const octenerData = async () => {

        setState({
            ...state,
            isloading: true
        });

        const data = await fetch(url);
        const dataJson = await data.json();

        setState({
            dataJson,
            isloading: false,
            error: null
        });

        return {};
    }

    useEffect(() => {
        octenerData();
    }, [url]);

    return {
        data: state.dataJson,
        isloading: state.isloading,
        error: state.error
    };
}
