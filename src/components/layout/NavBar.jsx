import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'

export const Navbar = () => {
    const {login, handlerLogout} = useContext(AuthContext)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Main App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-middle" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users"> Usuarios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users/register"> Registrar Usuario</NavLink>
                        </li>
                        <li className="nav-item">

                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                { login.user?.username.toUpperCase() }
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <button className="btn btn-light w-100 rounded" onClick={handlerLogout}>Cerrar sesion</button>

                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
