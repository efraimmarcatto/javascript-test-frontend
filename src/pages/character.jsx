import { Typography, Grid, List, ListItem, ListItemText } from '@mui/material'
import { useState, useEffect } from 'react'
import { getCharacter } from '../api'
import { useParams } from 'react-router-dom'

function CharacterPage() {
    const [character, setCharacter] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const fetchCharacter = async () => {
            const { data } = await getCharacter(id)
            setCharacter(data)
            setLoading(false)
        }
        fetchCharacter()
    }, [])
    if (loading) {
        return (
            <Typography align="center" variant="h4">
                Loading...
            </Typography>
        )
    }

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Typography align="center" variant="h4">
                {character.name}
            </Typography>
            <Grid
                spacing={10}
                justifyContent="center"
                alignItems="center"
                container
            >
                <Grid width={'30%'} item>
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
                <Grid item>
                    <Typography align="center" variant="h5">
                        Filmes
                    </Typography>
                    <List title="Filmes">
                        {character.films
                            ? character.films.map((film, index) => {
                                  return (
                                      <ListItem key={index}>{film} </ListItem>
                                  )
                              })
                            : 'N/A'}
                    </List>

                    <Typography align="center" variant="h5">
                        Veículos
                    </Typography>
                    <List title="Veículos">
                        {character.vehicles
                            ? character.vehicles.map((vehicle, index) => {
                                  return (
                                      <ListItem key={index}>{vehicle}</ListItem>
                                  )
                              })
                            : 'N/A'}
                    </List>

                    <Typography align="center" variant="h5">
                        Naves
                    </Typography>
                    <List title="Naves">
                        {character.starships
                            ? character.starships.map((starship, index) => {
                                  return (
                                      <ListItem key={index}>
                                          {starship}
                                      </ListItem>
                                  )
                              })
                            : 'N/A'}
                    </List>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CharacterPage
