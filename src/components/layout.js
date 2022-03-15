import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>Pura Sangre CrossFit - {pageTitle}</title>
            <header>
                <Link to="/">Home</Link>
                <a href="#">Pura sangre</a>
                <Link to="/planes">Planes</Link>
                <Link to="/horarios">Horarios</Link>
                <a href="#">Contacto</a>
            </header>
            {children}
        </div>
    )
}

export default Layout