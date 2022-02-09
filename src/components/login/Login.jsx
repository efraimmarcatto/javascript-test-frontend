import React, { useState, useContext } from 'react'
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Button,
    Typography,
    Link,
} from '@mui/material'
import { AuthContext } from '../../context/auth'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState(false)
    const { login } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const error = await login(email, password)
        if (error) setLoginError(true)
    }

    return (
        <Grid>
            <Paper
                align="center"
                elevation={15}
                style={{
                    padding: 20,

                    width: 350,
                    margin: '20px auto',
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Grid item align="center">
                        <Avatar style={{ backgroundColor: '#2d55a6' }} />
                        <h2>Entrar</h2>
                    </Grid>
                    <Grid spacing={2} direction="column" container>
                        <Grid item>
                            <TextField
                                label="E-mail"
                                placeholder="Digite seu e-mail"
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                required
                                error={loginError}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Senha"
                                placeholder="Digite uma Senha"
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                fullWidth
                                required
                                error={loginError}
                                helperText={loginError && 'Falha no Login'}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                style={{ margin: '8px 0' }}
                                fullWidth
                            >
                                Entrar
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography> Não tem uma conta? </Typography>
                    <Link href="/register">Registrar-se</Link>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login
