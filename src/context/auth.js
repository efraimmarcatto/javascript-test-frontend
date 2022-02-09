import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api, createSession } from '../api'

const AuthContext = createContext()

function AuthProvider({ children }) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        const storedUser = localStorage.getItem('user')

        if (storedToken && storedUser) {
            setToken(storedToken)
            setUser(storedUser)
            api.defaults.headers.Authorization = `Bearer ${storedToken}`
        }
        setLoading(false)
    }, [])

    const login = async (email, password) => {
        try {
            const {
                data: { user: apiUser, token: apiToken },
            } = await createSession(email, password)
            localStorage.setItem('token', apiToken)
            localStorage.setItem('user', apiUser)
            api.defaults.headers.Authorization = `Bearer ${apiToken}`
            setToken(apiToken)
            setUser(apiUser)
            navigate('/')
        } catch (error) {
            return error
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        setToken(null)
        navigate('/login')
    }

    return (
        <AuthContext.Provider
            value={{
                authenticated: !!token,
                user,
                token,
                loading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
