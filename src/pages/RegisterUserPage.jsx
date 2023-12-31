import React, { useContext, useEffect, useState } from 'react'
import { UserForm } from '../components/UserForm';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const RegisterUserPage = () => {
    const {users=[], initialUserForm, handlerAddUser} = useContext(UserContext);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    // debo declarar la variable con el mismo nombre en la ruta

    //users/edit/:id
    const { id } = useParams();
    //cuando cambia el id de la url gatilla el useEffect
    useEffect(() => {
        // console.log(id);
        if(id){
            const user = users.find(user => user.id == id) || initialUserForm;
            setUserSelected(user);
        }

    }, [id]);
    return (
    <div className="container my-4">
        <h4>{ userSelected.id > 0 ? 'Editar usuario '+ userSelected.username: 'Registro de usuario'}</h4>
        <div className="col">
            <UserForm
                userSelected={userSelected}
            />
        </div>
    </div>
    )
}
