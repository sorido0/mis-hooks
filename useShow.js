import { useState } from 'react'

export const useShow = () => {
  
    const [ show, setShow ] = useState(false);

    const handleClShow = () => {
        {setShow(!show);}
    }

    return { show, handleClShow };
}
