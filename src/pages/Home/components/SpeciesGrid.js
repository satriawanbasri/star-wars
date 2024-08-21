import { DataGrid } from '@mui/x-data-grid'

const SpeciesGrid = ({ data }) => {
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
                            field: 'classification',
                            headerName: 'Classification',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'designation',
                            headerName: 'Designation',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'average_height',
                            headerName: 'Average Height',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'skin_colors',
                            headerName: 'Skin Colors',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'hair_colors',
                            headerName: 'Hair Colors',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'eye_colors',
                            headerName: 'Eye Colors',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'average_lifespan',
                            headerName: 'Average Lifespan',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'language',
                            headerName: 'Language',
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

export default SpeciesGrid
