


// Este mi reducer es el que se encarga de manejar los estados de la aplicación.
export const todoReducer = (estadoIniciar = [], action ) => {
  
    // console.log(action); Para como esta formada la accion.
    //console.log(action)
    switch (action.type) {
        // Si la accion es agregar una todo o tarea. 
        case 'agregar':
            // se envia el estado actual con expres (...) y la accion que se va a realizar agregando una nueva todo o tarea.
            return [...estadoIniciar, action.descripcion]
        // Si la accion es eliminar una todo o tarea.
        case 'eliminar':
            return estadoIniciar.filter( todo => todo.id !== action.descripcion);
        // Si la accion es completada una todo o tarea.
        case 'completada':
            return estadoIniciar.map( todo => {
                if(todo.id === action.descripcion){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
    
        default:
            // Si no se cumple ninguna de las condiciones anteriores, se retorna el estado actual.
            return estadoIniciar;
    }
}
