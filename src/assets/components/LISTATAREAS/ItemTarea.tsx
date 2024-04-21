import React from 'react'

// Define la interfaz Props para especificar los props que recibe el componente
interface Props {
    name: string;
    id: number;
    // itemKey: number; // Cambia key por itemKey para evitar el warning
}

export const ItemTarea: React.FC<Props> = (props) => {
const {name, id} = props;

  return (
    <div>
        <h4>{id} - {name}</h4>
    </div>
  )
}