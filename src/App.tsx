
import './App.css'
import { Fetch } from './assets/components/ArqWebProtocolo/Fetch'
import { TareaForm } from './assets/components/LISTATAREAS/TareaForm'
// import { ListaTareas } from './assets/components/LISTATAREAS/ListaTareas'
// import Presentador from './assets/components/MVP/Presentador'
// import ModeloDeVsta from './assets/components/MVVM/ModeloDeVsta'
// import Controlador from './assets/components/mvc/Controlador'
// import ListaDeCompra from './assets/components/COMPOSICION/ListaDeCompra'

function App() {

  //#region LISTA
  // const lista = [
  //   {
  //     nombre: 'Laptop',
  //     cantidad: 1000000
  //   },
  //   {
  //     nombre: 'Tablet',
  //     cantidad: 500000
  //   },
  //   {
  //     nombre: 'Mouse',
  //     cantidad: 200000
  //   },
  //   {
  //     nombre: 'Teclado',
  //     cantidad: 300000
  //   },
  //   {
  //     nombre: 'Monitor',
  //     cantidad: 100000
  //   }
  // ]
//#endregion
  //#region TASK
  const tasks = [
    {
        id: 1,
        name: 'Task 1'
    },
    {
        id: 2,
        name: 'Task 2'
    },
    {
        id: 3,
        name: 'Task 3'
    }
]
  //#endregion

  return (    
      <div>
        {/* <Controlador />
        <Presentador />
        <ModeloDeVsta />
        <ListaDeCompra items = {lista}  />
        <ListaTareas items = { tasks } /> */}
        <TareaForm items = {tasks} />
        <Fetch/>        
      </div>      
  )
}

export default App
