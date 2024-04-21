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

export const TareaForm : React.FC<Props> = ({ items }) => {

const [id, setId] = useState('');
const [nombre, setNombre] = useState('');
const [error, setError] = useState('');
const [tareas, setTareas] = useState(items);

const addItem = (item:Item) => {
    setTareas([...tareas, item]);
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nombre === '') {
        setError('Debes ingresar un nombre');
        return;
    }
    if (id === '') {
        setError('Debes ingresar un id');
        return;
    }
    // Se parsea el id de la caja de texto de string a int
    addItem( { id: parseInt(String(id)), name: nombre });
    setId('');
    setNombre('');
    setError('');
}

  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} id="nombre" placeholder="Nombre" />
        </div>
        <div className="form-group">
            <label htmlFor="id">Id</label>
            <input type="number" className="form-control" value={id} onChange={(e) => setId(e.target.value)} id="id" placeholder="Id" />
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary" >Agregar</button>
        </div>
        <h1>Lista de Tareas</h1>
        {tareas.map((task, index) => (
                <div key={index}>
                    <ItemTarea
                        name={task.name}
                        id={task.id}
                    />
                </div>
            ))}
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
    </form>
  )
}