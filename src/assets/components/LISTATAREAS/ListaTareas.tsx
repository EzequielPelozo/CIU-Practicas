import React, { useState } from 'react'
import { ItemTarea } from './ItemTarea'

// Define la interfaz para props, especificando que items es una lista de objetos.
// Cada objeto debe tener propiedades nombre y id. Agregamos key opcional.
interface Item {
    name: string;
    id: number;
    // itemKey: number; // Cambia key por itemKey para evitar el warning
}

// Modificamos la interfaz de Props para especificar la lista de `items`.
interface Props {
    items: Item[];
}

export const ListaTareas: React.FC<Props> = ({ items }) => {
   
    const [tareas, setTareas] = useState(items);

    const agregarTarea = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault;
        setTareas([...tareas, {
            id: 4,
            name: 'Task 4'
        }]);
    }

    return (
        <div>
            <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { agregarTarea(e) }}>
                pushTask
            </button>
            {tareas.map((task, index) => (
                <div key={index}>
                    <ItemTarea
                        name={task.name}
                        id={task.id}
                    />
                </div>
            ))}
        </div>
    )
}