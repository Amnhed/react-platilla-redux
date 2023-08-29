import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll, removeUser, saveUser, updateUser } from "../services/userService";

const defaultUsers = [];
  
  const initialUserForm = {
    id:0,
    username: '',
    password:'',
    email:''
  }

  const initialErrors = {
    username: '',
    password:'',
    email:''
  }

export const useUsers = () => {
    const [ users, dispatch ] = useReducer(usersReducer, defaultUsers);
    const [ userSelected, setUserSelected ] = useState(initialUserForm);
    const [ visibleForm, setVisibleForm ] = useState(false);
    const [ errors, setErrors ]  = useState(initialErrors)
    const navigate = useNavigate()

    const getAllUsersHook = async () => {
      const result = await findAll();
      console.log(result);
      dispatch({
          type: 'loadingUsers',
          payload: result.data,
      });
      
  }
 
    const handlerAddUser = async(user) => { 
      console.log(user);
      //Agregar usario o editar bd service
      let response;  
      try {
          if ((user.id === 0)){
            // Await obtener la respuesta y convertirla a JSON y actualizar edo react
            response = await saveUser(user);   
          }else {
            response = await updateUser(user);
          }
          dispatch({
            type : (user.id === 0) ? 'addUser':'updateUser',
            payload: response.data,
          });

          Swal.fire(
              (user.id === 0 ? 'Usuario creado' : 'Usuario actualizado'),
              (user.id === 0 ? '¡El usuario ha sido creado!' : '¡El usuario ha sido actualizado!'),
              'success'
          )
          handlerCloseForm();
          navigate('/users');
        } catch (error) {
          if(error.response && error.response.status == 400){
            //console.error(error.response.data)
            setErrors(error.response.data)
          }else{
            throw error;
          }

        }
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
                //quitar usario de base
                removeUser(id);
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
    errors,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    getAllUsersHook
  }
}
