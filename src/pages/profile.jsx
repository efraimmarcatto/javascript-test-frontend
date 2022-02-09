import { Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUser, deleteUser, updateUser } from '../api'
import { AuthContext } from '../context/auth'

function ProfilePage() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [body, setBody] = useState({})
    const navigate = useNavigate()
    const { logout } = useContext(AuthContext)

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await getUser()
            setUser(data)
            setLoading(false)
        }
        fetchUser()
    }, [])

    if (loading) {
        return (
            <Typography align="center" variant="h2">
                Loading...
            </Typography>
        )
    }

    const handleSave = async () => {
        if (body) {
            const { data } = await updateUser(body)
            if (data.updatedAt) {
                navigate('/')
            }
        }
    }

    const handleDelete = async () => {
        const { data } = await deleteUser()
        logout()
    }

    return (
        <Grid
            style={{ margin: '20px' }}
            direction="column"
            container
            spacing={2}
        >
            <Grid item>
                <Typography>Nome:</Typography>
                <TextField
                    onChange={(e) => setBody({ ...body, name: e.target.value })}
                    placeholder={user.name}
                />
            </Grid>
            <Grid item>
                <Typography>E-mail: </Typography>

                <TextField
                    onChange={(e) =>
                        setBody({ ...body, email: e.target.value })
                    }
                    placeholder={user.email}
                />
            </Grid>
            <Grid item>
                <Typography>Telefone:</Typography>

                <TextField
                    onChange={(e) =>
                        setBody({ ...body, phone: e.target.value })
                    }
                    placeholder={user.phone}
                />
            </Grid>
            <Grid item>
                <Typography>Senha:</Typography>
                <TextField
                    type="password"
                    onChange={(e) =>
                        setBody({ ...body, password: e.target.value })
                    }
                    placeholder="Nova senha"
                />
            </Grid>
            <Grid item>
                <Button
                    style={{ margin: '10px' }}
                    variant="contained"
                    onClick={handleDelete}
                >
                    Excluir Perfil
                </Button>
                <Button
                    style={{ margin: '10px' }}
                    variant="contained"
                    onClick={handleSave}
                >
                    Salvar Perfil
                </Button>
            </Grid>
        </Grid>
    )
}

export default ProfilePage
