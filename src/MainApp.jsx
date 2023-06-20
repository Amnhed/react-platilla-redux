import React, { useReducer } from 'react'
import { UserForm } from './assets/components/UserForm'
import { UsersList } from './assets/components/UsersList'
import { usersReducer } from './assets/components/reducers/usersReducer'

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
  username: '',
  password:'',
  email:''
}

export const MainApp = () => {
  
  const [ users, dispatch ] = useReducer(usersReducer, defaultUsers);
  
  const handlerAddUser = (user) => {
    dispatch({
      type:'addUser',
      payload: user,
    });
  }

  const handlerRemoveUser = (id) => {
    dispatch({
      type:'removeUser',
      payload: id,
    });
  }


  // console.log(defaultUsers);
  return (
    <div className='container my-4'>
        <h2>MainApp</h2>
        <div className="row">
          <div className="col">
            <UserForm 
              initialUserForm = { initialUserForm }
              handlerAddUser = { handlerAddUser }
            />
          </div>

          <div className="col">
            {
              users.length === 0 
                ? <div className="alert alert-warning">No existen usarios en el sistema</div>
                : <UsersList 
                  handlerRemoveUser= { handlerRemoveUser }
                  users = { users }
              />
            }

          </div>
        </div>
    </div>
  )
}
