import React, { useContext } from 'react'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { AuthProvider, AuthContext } from './context/auth'

import HomePage from './pages/home'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import CharacterPage from './pages/character'
import ProfilePage from './pages/profile'
import { Layout } from './components'

function AppRoutes() {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)

        if (loading) {
            return <h2>Loading...</h2>
        }
        if (!authenticated) {
            return <Navigate to="/login" />
        }

        return <Layout>{children}</Layout>
    }
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/register" element={<RegisterPage />} />
                    <Route
                        exact
                        path="/character/:id"
                        element={
                            <Private>
                                {' '}
                                <CharacterPage />{' '}
                            </Private>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <Private>
                                {' '}
                                <HomePage />{' '}
                            </Private>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <Private>
                                {' '}
                                <ProfilePage />{' '}
                            </Private>
                        }
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRoutes
