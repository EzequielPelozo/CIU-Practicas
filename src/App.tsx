
import './App.css'
import DataTable from './assets/components/DataTable/DataTable'
// import { Fetch } from './assets/components/ArqWebProtocolo/Fetch'
// import { TareaForm } from './assets/components/LISTATAREAS/TareaForm'
// import { ListaTareas } from './assets/components/LISTATAREAS/ListaTareas'
// import Presentador from './assets/components/MVP/Presentador'
// import ModeloDeVsta from './assets/components/MVVM/ModeloDeVsta'
// import Controlador from './assets/components/mvc/Controlador'
// import ListaDeCompra from './assets/components/COMPOSICION/ListaDeCompra'
import { GridColDef } from '@mui/x-data-grid';

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
//   const tasks = [
//     {
//         id: 1,
//         name: 'Task 1'
//     },
//     {
//         id: 2,
//         name: 'Task 2'
//     },
//     {
//         id: 3,
//         name: 'Task 3'
//     }
// ]
  //#endregion
//#region DataTable
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows  = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
//#endregion
  return (    
      <div>
        {/* <Controlador />
        <Presentador />
        <ModeloDeVsta />
        <ListaDeCompra items = {lista}  />
        <ListaTareas items = { tasks } /> */}
        {/* <TareaForm items = {tasks} />
        <Fetch/>         */}


        <DataTable columns = {columns} rows = {rows}/>
      </div>      
  )
}

export default App
