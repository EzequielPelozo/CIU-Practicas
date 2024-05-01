import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Row {
  id: number;
  lastName: string;
  firstName?: string | null; // Hacer el campo firstName opcional y admitir null
  age: number | null;
}

interface DataTableProps {
  columns: GridColDef[];
  rows: Row[];
}

export default function DataTable(props: DataTableProps) {
  const { columns, rows } = props;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
