import React from 'react'
import { Navbar } from '../components/layout/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UsersPage } from '../pages/UsersPage'

export const UserRoutes = ({login, handlerLogout}) => {
  return (
    <>
        <Navbar login={login} handlerLogout={handlerLogout} />
        <Routes>
            <Route path="users" element={<UsersPage />} />
            <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
    </>
  )
}
