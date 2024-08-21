import { DataGrid } from '@mui/x-data-grid'

const FilmGrid = ({ data }) => {
    return (
        <div style={{ display: 'flex', height: '100%', marginTop: 8 }}>
            <div style={{ flexGrow: 1 }}>
                <DataGrid
                    rows={data}
                    getRowHeight={() => 'auto'}
                    disableRowSelectionOnClick
                    autoHeight
                    disableColumnMenu
                    hideFooter
                    getRowId={e => e.url}
                    sx={{ maxWidth: 1135 }}
                    columns={[
                        {
                            field: 'no',
                            headerName: 'No',
                            headerAlign: 'right',
                            align: 'right',
                            sortable: false,
                            filterable: false,
                            width: 50,
                            renderCell: params => params.api.getAllRowIds().indexOf(params.id) + 1,
                        },
                        {
                            field: 'name',
                            headerName: 'Name',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'model',
                            headerName: 'Model',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'manufacturer',
                            headerName: 'Manufacturer',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'cost_in_credits',
                            headerName: 'Cost in Credits',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'length',
                            headerName: 'Length',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'max_atmosphering_speed',
                            headerName: 'Max Atmosphering Speed',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'crew',
                            headerName: 'Crew',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'passengers',
                            headerName: 'Passengers',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'cargo_capacity',
                            headerName: 'Cargo Capacity',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'consumables',
                            headerName: 'Consumables',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'vehicle_class',
                            headerName: 'Vehicle Class',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default FilmGrid
