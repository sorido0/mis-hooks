
import { useId } from 'react';

export function UseId(){
    
    const espacioId = useId();
    const menteId = useId();
    const realidadId = useId();
    const poderId = useId();
    const tiempoId = useId();
    const almaId = useId();
    const piedrasId = useId();

    return espacioId, menteId, realidadId, poderId, tiempoId, almaId, piedrasId;
 
}
