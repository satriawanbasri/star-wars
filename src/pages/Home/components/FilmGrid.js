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
                            field: 'title',
                            headerName: 'Title',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'release_date',
                            headerName: 'Release Date',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'director',
                            headerName: 'Director',
                            width: 200,
                            sortable: false,
                            filterable: false,
                        },
                        {
                            field: 'producer',
                            headerName: 'Producer',
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
