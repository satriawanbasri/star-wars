import { useEffect, useState, useRef } from 'react'
import { Box, Button, Divider, Grid, Modal, Typography } from '@mui/material'
import { connect } from 'react-redux'
import actions from '../../../store/actions'
import FilmGrid from './FilmGrid'
import SpeciesGrid from './SpeciesGrid'
import StarshipGrid from './StarshipGrid'
import VehicleGrid from './VehicleGrid'

const PeopleDetail = props => {
    const [overflowHeight, setOverflowHeight] = useState(0)
    const contentRef = useRef(null)

    useEffect(() => {
        if (props.showWindow?.isInitializePeopleDetailWindow) {
            props.setShowWindow({
                ...props.showWindow,
                isInitializePeopleDetailWindow: false,
            })
        }
    }, [props.showWindow?.isInitializePeopleDetailWindow])

    let overflowHeightValue
    setInterval(() => {
        if (overflowHeightValue != contentRef.current?.clientHeight) {
            overflowHeightValue = contentRef.current?.clientHeight
            setOverflowHeight(contentRef.current?.clientHeight)
        }
    }, 1000)

    const cancelScrape = () => {
        props.setShowWindow({
            ...props.showWindow,
            isShowPeopleDetailWindow: false,
            people: null,
        })
    }

    return (
        <Modal
            open={props.showWindow?.isShowPeopleDetailWindow}
            sx={{
                overflow: 'auto',
            }}>
            <Box
                ref={contentRef}
                sx={{
                    position: 'absolute',
                    top: (overflowHeight + 100) / 2,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    width: 1200,
                    p: 4,
                    pb: 2.6,
                }}>
                <Typography variant="h4">People Detail</Typography>
                <Divider sx={{ mt: 1, mb: 1 }} />
                <br />
                <Typography variant="h6">General Detail</Typography>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Name :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.name}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Birth Year :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.birth_year}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Gender :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.gender}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Eye Color :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.eye_color}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Hair Color :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.hair_color}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Skin Color :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.skin_color}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Height :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.height}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Mass :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.mass}
                    </Grid>
                </Grid>
                <br />
                <Typography variant="h6">People's Planet Detail</Typography>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Planet Name :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.planet?.name}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Population :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.planet?.population}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Orbital Period :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.planet?.orbital_period}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Diameter :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.planet?.diameter}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Climate :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.planet?.climate}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Gravity :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.planet?.gravity}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Terrain :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.planet?.terrain}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sx={{ textAlign: 'end', mr: 2 }}>
                        Surface Water :
                    </Grid>
                    <Grid item xs={9}>
                        {props.showWindow?.people?.planet?.surface_water}
                    </Grid>
                </Grid>
                <br />
                <Typography variant="h6">Films</Typography>
                <FilmGrid data={props.showWindow?.people?.listFilms} />
                <br />
                <Typography variant="h6">Species</Typography>
                <SpeciesGrid data={props.showWindow?.people?.listSpecies} />
                <br />
                <Typography variant="h6">Starships</Typography>
                <StarshipGrid data={props.showWindow?.people?.listStarships} />
                <br />
                <Typography variant="h6">Vehicles</Typography>
                <VehicleGrid data={props.showWindow?.people?.listVehicles} />
                <br />
                <Box display="flex" justifyContent="flex-end">
                    <Button onClick={cancelScrape}>CLOSE</Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default connect(
    state => {
        const { sessionReducer } = state
        return { ...sessionReducer }
    },
    { ...actions.sessionAction }
)(PeopleDetail)
