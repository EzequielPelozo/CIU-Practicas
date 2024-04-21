import { useState } from 'react';
import Vista from './Vista';
import Modelo from './Modelo';

const ModeloDeVsta = () => {


     // Define el estado con un nombre más claro, inicializado con un número
     const [contador, setContador] = useState<number>(Modelo.contador);

     // Puedes usar el estado `contador` y el método `incrementar` según sea necesario
     // Por ejemplo, puedes manejar algún evento y actualizar el contador.
 
     const incrementar = () => {
         Modelo.incrementar();
         setContador(Modelo.contador); // Actualiza el estado con el nuevo valor
     }
 
     return (
         <div>
             <Vista contador={contador}
                 incrementar={incrementar}>
 
             </Vista>
 
         </div>
     );
 };

export default ModeloDeVsta