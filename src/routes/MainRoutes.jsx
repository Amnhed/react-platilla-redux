import React from 'react'
import { Navbar } from '../components/layout/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UsersPage } from '../pages/UsersPage'
import { RegisterUserPage } from '../pages/RegisterUserPage'
import { useUsers } from '../hooks/useUsers'

export const MainRoutes = ({login, handlerLogout}) => {
  const {
    users,
    userSelected,
    initialUserForm,
    visibleForm,

    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
  } = useUsers();

  return (
    <>
        <Navbar login={login} handlerLogout={handlerLogout} />
        <Routes>
            <Route path="users" element={<UsersPage
                users={users}
                userSelected={userSelected}
                initialUserForm={initialUserForm}
                visibleForm={visibleForm}
                handlerAddUser={handlerAddUser}
                handlerRemoveUser={handlerRemoveUser}
                handlerUserSelectedForm={handlerUserSelectedForm}
                handlerOpenForm={handlerOpenForm}
                handlerCloseForm={handlerCloseForm}
              />} />
              {/* Ruta registrar usuario */}
            <Route path="users/register" element={<RegisterUserPage
               handlerAddUser={handlerAddUser}
               initialUserForm={initialUserForm}
            />} />
            {/* Ruta editar usuario */}
            <Route path="users/edit/:id" element={<RegisterUserPage
                handlerAddUser={handlerAddUser}
                initialUserForm={initialUserForm}
            />} />
            <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
    </>
  )
}
