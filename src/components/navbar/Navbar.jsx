import { Link, Typography, AppBar, IconButton, Toolbar } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import HomeIcon from '@mui/icons-material/Home'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const { logout, user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
    }
    const handleHome = () => {
        navigate('/')
    }

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Olá,{' '}
                    <Link underline="none" color="white" href="/profile">
                        {' '}
                        {user
                            .trim()
                            .replace(/^\w/, (c) => c.toUpperCase())}{' '}
                    </Link>
                    !!
                </Typography>
                <IconButton size="large" edge="start" onClick={handleHome}>
                    <HomeIcon />
                </IconButton>
                <IconButton size="large" edge="end" onClick={handleLogout}>
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
