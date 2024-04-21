// Define una interfaz para los props que recibe el componente
interface VistaProps {
    contador: number;
    incrementar: () => void;
}

const Vista: React.FC<VistaProps> = ({ contador, incrementar }) => {


    return (
        <div>
            <p>{contador}</p>
            <button onClick={() => {
                incrementar();
            }}>
                Incrementar
            </button>
        </div>
    )
}

export default Vista