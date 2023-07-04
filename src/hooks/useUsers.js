import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
    const [ visibleForm, setVisibleForm ] = useState(false);
    const navigate=useNavigate()

    const handlerAddUser = (user) => { 
        dispatch({
          type : (user.id === 0) ? 'addUser':'updateUser',
          payload: user,
        });

        Swal.fire(
            (user.id === 0 ? 'Usuario creado' : 'Usuario actualizado'),
            (user.id === 0 ? '¡El usuario ha sido creado!' : '¡El usuario ha sido actualizado!'),
            'success'
        )
        handlerCloseForm()
        navigate('/users')
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
        //muestro formulario
        setVisibleForm(true);
        //console.log(user);
        setUserSelected({...user});
      }

      const handlerOpenForm = () => {
        setVisibleForm(true);
      }

      const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);   
      }

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm
  }
}
