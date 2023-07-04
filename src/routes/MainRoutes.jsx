import React from 'react'
import { Navbar } from '../components/layout/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UsersPage } from '../pages/UsersPage'
import { RegisterUserPage } from '../pages/RegisterUserPage'
import { UserProvider } from '../context/UserProvider'

export const MainRoutes = () => {

  return (
    <>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="users" element={<UsersPage />} />
          {/* Ruta registrar usuario */}
          <Route path="users/register" element={<RegisterUserPage />} />
          {/* Ruta editar usuario */}
          <Route path="users/edit/:id" element={<RegisterUserPage />} />
          <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
      </UserProvider>
    </>
  )
}
