
import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

const estadoIniciar = [
    //El estado es un array de objetos que esta formado de dos propiedades: id , descripcion y dona: es un booleano 
    {
        id: new Date().getTime(),
        descripcion: 'Recolectar las piedras el infinito',
        done: false
    }
];

const inic = () => {
    // JSON.parse(localStorage.getItem('todos')) Es una funcion que convierte un string a un objeto
    // getItem('todos') Es una funcion que tome un string a un almacenados en el localStorage
    // Si el localStorage no tiene nada, se retorna un array vacio
    return JSON.parse(localStorage.getItem('Agragado')) || [];
}

export const useTodo = () => {


    const [todos, dispatch] = useReducer(todoReducer, estadoIniciar, inic);

    // usaremos un useEffect para que se ejecute cuando mis TODOS cambien
    // useEffect(() => { console.log('Todos cambiaron') }, [todos]);
    useEffect(() => {
        localStorage.setItem('Agragado', JSON.stringify(todos));
    }, [todos])


    // contar tareas
    const contarTareas = todos.length;

    const pediente = todos.filter(todo => !todo.done).length



    // console.log(contarTareas, pediente);
    // Funcion que se ejecuta al presionar el boton para agregar una nueva tarea
    const handleNewTodo = (todo) => {
        const action = {
            type: 'agregar',
            descripcion: todo,
        }

        // console.log(todos); muestra el estado actual del nuevo estado. 
        console.log(todo);
        // dispatch: ejecuta el reducer para agregar una nueva tarea    
        dispatch(action);

    }

    // Eliminar una tarea
    const handleDeleteTodo = (id) => {
        const action = {
            type: 'eliminar',
            descripcion: id,
        }
        // Verificamos el ID de la tarea que se va a eliminar
        console.log(id);
        // dispatch: ejecuta el reducer para eliminar la tarea. 
        dispatch(action);
    }

    const TareaCompletada = (id) => {
        const action = {
            type: 'completada',
            descripcion: id,
        }
        // Verificamos el ID de la tarea que se va a eliminar
        console.log(id);
        // dispatch: ejecuta el reducer para eliminar la tarea. 
        dispatch(action);
    }

    return { todos, handleNewTodo, handleDeleteTodo, TareaCompletada, contarTareas , pediente };
}
