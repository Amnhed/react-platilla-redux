import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const defaultUsers = [
    {
      id:1,
      username: 'Amnhed',
      password: '12345',
      email: 'amnhedl@gmail.com'
    },
    {
      id: 2,
      username: 'Jimeno',
      password: '12345',
      email: 'jimenol@gmail.com'
    },
  ]
  
  const initialUserForm = {
    id:0,
    username: '',
    password:'',
    email:''
  }

export const useUsers = () => {
    const [ users, dispatch ] = useReducer(usersReducer, defaultUsers);
    const [ userSelected, setUserSelected ] = useState(initialUserForm);

    const handlerAddUser = (user) => {
        let type;
        if(user.id === 0){
          type = 'addUser';
        }else{
          type = 'updateUser'
        }
        dispatch({
          type,
          payload: user,
        });

        Swal.fire(
            (user.id === 0 ? 'Usuario creado' : 'Usuario actualizado'),
            (user.id === 0 ? '¡El usuario ha sido creado!' : '¡El usuario ha sido actualizado!'),
            'success'
        )
      }
    
      const handlerRemoveUser = (id) => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "No podras revertir esta accion!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar usuario!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type:'removeUser',
                    payload: id,
                });

                Swal.fire(
                'Eliminado!',
                'El usuario ha sido eliminado!.',
                'success'
                )
            }
          })
      }
    
      const handlerUserSelectedForm = (user) => {
        //console.log(user);
        setUserSelected({...user});
      }

  return {
    users,
    userSelected,
    initialUserForm,

    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm
  }
}
