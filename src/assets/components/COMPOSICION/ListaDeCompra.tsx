import React from 'react';
import ItemDeCompra from './itemDeCompra';

// Define la interfaz para props, especificando que items es una lista de objetos.
// Cada objeto debe tener propiedades nombre y cantidad. Agregamos key opcional.
interface Item {
    nombre: string;
    cantidad: number;
    // key: number; // Esto puede permanecer como key
}

// Modificamos la interfaz de Props para especificar la lista de `items`.
interface Props {
    items: Item[];
}

const ListaDeCompra: React.FC<Props> = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <ItemDeCompra
                    key={index} // `key` sigue siendo necesaria para React
                    itemKey={index} // Pasa `index` como `itemKey` a `ItemDeCompra`
                    nombre={item.nombre}
                    cantidad={item.cantidad}
                />
            ))}
        </ul>
    );
};

export default ListaDeCompra;
