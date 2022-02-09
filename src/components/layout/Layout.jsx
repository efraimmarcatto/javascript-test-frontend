import { Toolbar } from '@mui/material'
import { Navbar } from '..'

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Toolbar />
            {children}
        </>
    )
}

export default Layout
