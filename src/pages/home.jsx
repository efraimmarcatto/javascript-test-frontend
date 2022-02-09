import { CharacterCard } from '../components'
import { useEffect, useState } from 'react'
import { getCharacters } from '../api'
import { Grid, Pagination, Typography } from '@mui/material'

function HomePage() {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingError, setLoadingError] = useState()

    const [page, setPage] = useState(1)
    const [count, setCount] = useState()

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true)
            try {
                const { data } = await getCharacters(page)
                setCharacters(data.results)
                setCount(Math.ceil(parseInt(data.count) / 10))
                setLoading(false)
            } catch (error) {
                setLoadingError(true)
            }
        }
        fetchCharacters()
    }, [page])

    const handlePage = (event, value) => {
        setPage(value)
    }

    function CharactersList() {
        if (loading) {
            return (
                <Typography align="center" variant="h4">
                    Loading...
                </Typography>
            )
        }

        return (
            <>
                <Grid spacing={5} container justifyContent={'center'}>
                    {characters.map((character, index) => {
                        return (
                            <Grid key={index} xs={12} md={6} lg={3} item>
                                <CharacterCard character={character} />
                            </Grid>
                        )
                    })}
                </Grid>
            </>
        )
    }

    if (loadingError) {
        return (
            <Typography align="center" variant="h4">
                Tivemos um problema, atualize a pagina...
            </Typography>
        )
    }

    return (
        <>
            <CharactersList />
            <Grid container justifyContent={'center'}>
                <Pagination
                    style={{ margin: '20px' }}
                    showFirstButton
                    showLastButton
                    shape="rounded"
                    count={count}
                    page={page}
                    color="primary"
                    onChange={handlePage}
                />
            </Grid>
        </>
    )
}

export default HomePage
