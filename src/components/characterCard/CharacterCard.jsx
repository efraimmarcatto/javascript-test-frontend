import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography,
    ListItem,
    ListItemText,
    List,
    Link,
} from '@mui/material'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.8),
        borderRadius: theme.spacing(1),
    },
}))

function CharacterCard({ character }) {
    const classes = useStyles()
    return (
        <Link underline="none" href={`/character/${character.id}`}>
            <Card elevation={10} className={classes.root}>
                <CardHeader title={character.name} />
                <CardContent>
                    <Grid spacing={1} container direction="column">
                        <Grid item>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Altura:" />
                                    <Typography variant="body" color="gray">
                                        {character.height} cm
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Peso:" />
                                    <Typography variant="body" color="gray">
                                        {character.mass} kg
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Cor do cabelo:" />
                                    <Typography variant="body" color="gray">
                                        {character.hair_color}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Cor da pele:" />
                                    <Typography variant="body" color="gray">
                                        {character.skin_color}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Cor dos olhos:" />
                                    <Typography variant="body" color="gray">
                                        {character.eye_color}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Nascimento:" />
                                    <Typography variant="body" color="gray">
                                        {character.birth_year}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Genero:" />
                                    <Typography variant="body" color="gray">
                                        {character.gender}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Planeta Natal:" />
                                    <Typography variant="body" color="gray">
                                        {character.homeworld}
                                    </Typography>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Link>
    )
}

export default CharacterCard
