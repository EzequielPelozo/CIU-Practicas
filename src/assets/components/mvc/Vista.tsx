import React from 'react';

// Define una interfaz para los props que recibe el componente
interface VistaProps {
    contador: number;
}

const Vista: React.FC<VistaProps> = ({ contador }) => {
    return (
        <div>
            <p>{contador}</p>
        </div>
    );
}

export default Vista;
