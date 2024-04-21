import React from 'react';

// Define la interfaz Props para especificar los props que recibe el componente
interface Props {
    nombre: string;
    cantidad: number;
    itemKey: number; // Cambia key por itemKey para evitar el warning
}

const ItemDeCompra: React.FC<Props> = ({ nombre, cantidad, itemKey }) => {
    return (
        <li>
            {itemKey} - {nombre} - {cantidad}
        </li>
    );
};

export default ItemDeCompra;
