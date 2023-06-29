import React, { useState } from 'react'
import { UserForm } from '../components/UserForm';

export const RegisterUserPage = ({initialUserForm, handlerAddUser}) => {
    const [userSelected, setUserSelected] = useState(initialUserForm);
    

    return (
    <div className="container my-4">
        <h4>Registro de usuarios</h4>
        <div className="col">
            <UserForm
                userSelected={userSelected}
                initialUserForm={initialUserForm}
                handlerAddUser={handlerAddUser}
            />
        </div>
    </div>
    )
}
