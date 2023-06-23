import { UserForm } from './assets/components/UserForm'
import { UsersList } from './assets/components/UsersList'
import { useUsers } from './assets/components/hooks/useUsers'

export const MainApp = () => {
  const {
    users,
    userSelected,
    initialUserForm,

    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm  
  } = useUsers();

  return (
    <div className='container my-4'>
        <h2>MainApp</h2>
        <div className="row">
          <div className="col">
            <UserForm 
              initialUserForm = { initialUserForm }
              handlerAddUser = { handlerAddUser }
              userSelected = { userSelected }
            />
          </div>

          <div className="col">
          <button type="button" className="btn btn-dark mb-3">Nuevo usuario</button>
            {
              users.length === 0 
                ? <div className="alert alert-warning">No existen usarios en el sistema</div>
                : <UsersList 
                    handlerRemoveUser= { handlerRemoveUser }
                    handlerUserSelectedForm = { handlerUserSelectedForm }
                    users = { users }
                  />
            }

          </div>
        </div>
    </div>
  )
}
