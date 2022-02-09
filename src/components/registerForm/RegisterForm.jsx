import React, { useState } from 'react'

import { Grid, Paper, TextField, Button, Typography, Link } from '@mui/material'
import { createUser } from '../../api'
import { useNavigate } from 'react-router-dom'

function RegisterForm() {
    const navigate = useNavigate()
    const [body, setBody] = useState({})
    const [valid, setValid] = useState(false)

    const handleConfirm = (e) => {
        if (body.password && body.password === e.target.value) setValid(true)
        else setValid(false)
    }

    const handdlePassword = (e) => {
        setBody({ ...body, password: e.target.value })
        setValid(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (valid && body) {
            const { data } = await createUser(body)
            if (data) navigate('/login')
        }
    }

    return (
        <Paper
            align="center"
            elevation={10}
            style={{ padding: '20px', margin: '20px auto', width: 300 }}
        >
            <form onSubmit={handleSubmit}>
                <Typography align="center" variant="h4">
                    Crie sua conta
                </Typography>
                <Grid
                    direction="column"
                    container
                    spacing={2}
                    align="center"
                    style={{ padding: 30 }}
                >
                    <Grid item>
                        <TextField
                            label="Nome"
                            onChange={(e) =>
                                setBody({ ...body, name: e.target.value })
                            }
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            label="E-mail"
                            onChange={(e) =>
                                setBody({ ...body, email: e.target.value })
                            }
                            required
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            label="Telefone"
                            onChange={(e) =>
                                setBody({ ...body, phone: e.target.value })
                            }
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            label="Senha"
                            type="Password"
                            onChange={handdlePassword}
                            required
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            label="Confirma Senha"
                            error={body.password && !valid}
                            type="Password"
                            onChange={handleConfirm}
                            required
                        />
                    </Grid>

                    <Grid item>
                        <Button
                            disabled={!valid}
                            type="submit"
                            variant="contained"
                        >
                            Registrar
                        </Button>
                    </Grid>
                </Grid>
                <Typography> Já tem uma conta? </Typography>
                <Link href="/login">Entrar</Link>
            </form>
        </Paper>
    )
}
export default RegisterForm
