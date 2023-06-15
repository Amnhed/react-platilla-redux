import React from 'react'
import { UserForm } from './assets/components/UserForm'
import { UsersList } from './assets/components/UsersList'

export const MainApp = () => {

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

  // console.log(defaultUsers);
  return (
    <div className='container my-4'>
        <h2>MainApp</h2>
        <div className="row">
          <div className="col">
            <UserForm />
          </div>

          <div className="col">
            <UsersList users= { defaultUsers }/>
          </div>
        </div>
    </div>
  )
}
