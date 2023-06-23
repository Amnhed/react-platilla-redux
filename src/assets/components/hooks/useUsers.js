import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";

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
      }
    
      const handlerRemoveUser = (id) => {
        dispatch({
          type:'removeUser',
          payload: id,
        });
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
