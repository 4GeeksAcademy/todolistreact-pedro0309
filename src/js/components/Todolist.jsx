import React, { useState } from "react";

export const Todolist = () => {
    // Creamos estados para actualizar las tareas y la lista
    const [tarea, setTarea] = useState("")
    const [lista, setLista] = useState([])

    // Esta funcion escucha el cambio dentro del imput
    const agregar = (e) => {
        setTarea(e.target.value)
    }

    // Esta funcion escucha la tecla enter y agrega la tarea a mi lista
    const agregarALaLista = (e) => {
        // Esto verifica si la tecla es "enter"
        if (e.key === "Enter") {
            // Esto valida que no se envie una tarea vacia
            if (tarea.trim() === "") {
                return
            }
            setLista([...lista, tarea])
            // Esto limpia el formulario
            setTarea("")
        }
    }

    // console.log(lista)
    // El filtro es que muestre todos los indices que existen excepto al que le estoy haciendo "click"
    const eliminarTarea = (paramIndex) => {
        let elementos = lista.filter((item, index) => index !== paramIndex)
        setLista(elementos)
    }

    return (
        <>
            <div className="container-todo">
    <h1>Todos</h1>

    <div className="input-group flex-nowrap">
        <input
            type="text"
            className="form-control"
            placeholder="Agregar tarea"
            value={tarea}
            onChange={agregar}
            onKeyDown={agregarALaLista}
        />
    </div>

    <ul className="lista">
        {lista.map((item, index) => (
            <li key={index} className="item">
                <span>{item}</span>
                <button className = "btn-delete" onClick={() => eliminarTarea(index)}> ✕
                </button>
            </li>
        ))}
    </ul>

    <p>{lista.length} item left</p>
</div>
        </>
    )
}