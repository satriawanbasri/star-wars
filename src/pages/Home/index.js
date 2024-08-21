import { useEffect, useState } from 'react'
import { Search, Clear } from '@mui/icons-material'
import { Button, TextField, Divider, Tooltip, Typography, InputAdornment, IconButton } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { connect } from 'react-redux'
import actions from '../../store/actions'
import { fetch } from '../../utils'
import PeopleDetail from './components/PeopleDetail'

const Order = props => {
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,
        page: 0,
    })
    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(false)
    const [rowCount, setRowCount] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetchRows(paginationModel.page)
    }, [paginationModel])

    const fetchRows = async page => {
        setLoading(true)
        const result = await fetch(`https://swapi.dev/api/people/?page=${page + 1}&search=${searchTerm}`)
        if (result.isSuccess) {
            setRows(result.data.results)
            setRowCount(result.data.count)
        }
        setLoading(false)
    }

    const showDetailWindow = async people => {
        props.setIsShowProgressBar(true)
        people.planet = null
        people.listFilms = []
        people.listSpecies = []
        people.listStarships = []
        people.listVehicles = []
        people.listFilms.length = 0
        people.listSpecies.length = 0
        people.listStarships.length = 0
        people.listVehicles.length = 0
        if (people.homeworld) {
            const result = await fetch(people.homeworld)
            if (result.isSuccess) people.planet = result.data
        }
        if (people.films && people.films.length > 0) {
            for (const filmUrl of people.films) {
                const result = await fetch(filmUrl)
                if (result.isSuccess) people.listFilms.push(result.data)
            }
        }
        if (people.species && people.species.length > 0) {
            for (const specieUrl of people.species) {
                const result = await fetch(specieUrl)
                if (result.isSuccess) people.listSpecies.push(result.data)
            }
        }
        if (people.starships && people.starships.length > 0) {
            for (const starshipUrl of people.starships) {
                const result = await fetch(starshipUrl)
                if (result.isSuccess) people.listStarships.push(result.data)
            }
        }
        if (people.vehicles && people.vehicles.length > 0) {
            for (const vehicleUrl of people.vehicles) {
                const result = await fetch(vehicleUrl)
                if (result.isSuccess) people.listVehicles.push(result.data)
            }
        }
        props.setIsShowProgressBar(false)
        props.setShowWindow({
            ...props.showWindow,
            isShowPeopleDetailWindow: true,
            isInitializePeopleDetailWindow: true,
            people,
        })
    }

    const handleSearch = () => {
        fetchRows(paginationModel.page)
    }

    const handleClear = () => {
        setSearchTerm('')
        setPaginationModel({
            pageSize: 10,
            page: 0,
        })
        handleSearch()
    }

    const handleKeyDown = e => {
        if (e.key === 'Enter') handleSearch()
    }

    return (
        <div>
            <Typography variant="h5">Peoples</Typography>
            <Divider sx={{ mt: 1, mb: 1 }} />
            <br />
            <TextField
                fullWidth
                variant="outlined"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search..."
                onKeyDown={handleKeyDown}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton onClick={handleSearch}>
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    ),
                    endAdornment: searchTerm && (
                        <InputAdornment position="end">
                            <IconButton onClick={handleClear}>
                                <Clear />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <br />
            <br />
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <DataGrid
                        rows={rows}
                        pagination
                        paginationMode="server"
                        rowCount={rowCount}
                        loading={loading}
                        pageSizeOptions={[10]}
                        paginationModel={paginationModel}
                        onPaginationModelChange={setPaginationModel}
                        getRowHeight={() => 'auto'}
                        disableRowSelectionOnClick
                        autoHeight
                        disableColumnMenu
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
                                renderCell: params =>
                                    paginationModel.page * paginationModel.pageSize + params.api.getAllRowIds().indexOf(params.id) + 1,
                            },
                            {
                                field: 'name',
                                headerName: 'Name',
                                width: 300,
                                sortable: false,
                                filterable: false,
                            },
                            {
                                field: 'birth_year',
                                headerName: 'Birth Year',
                                width: 200,
                                sortable: false,
                                filterable: false,
                            },
                            {
                                field: 'gender',
                                headerName: 'Gender',
                                width: 200,
                                sortable: false,
                                filterable: false,
                            },
                            {
                                field: 'hair_color',
                                headerName: 'Hair Color',
                                width: 200,
                                sortable: false,
                                filterable: false,
                            },
                            {
                                field: 'height',
                                headerName: 'Height',
                                width: 200,
                                sortable: false,
                                filterable: false,
                            },
                            {
                                field: 'actions',
                                headerName: 'Actions',
                                headerAlign: 'center',
                                sortable: false,
                                filterable: false,
                                width: 80,
                                renderCell: e => {
                                    return (
                                        <div>
                                            <Tooltip title="Show Detail">
                                                <Button onClick={() => showDetailWindow(e.row)}>
                                                    <Search />
                                                </Button>
                                            </Tooltip>
                                        </div>
                                    )
                                },
                            },
                        ]}
                    />
                </div>
            </div>

            <PeopleDetail />
        </div>
    )
}

export default connect(
    state => {
        const { sessionReducer } = state
        return { ...sessionReducer }
    },
    { ...actions.sessionAction }
)(Order)
