import { UserRow } from "./UserRow";

export const UsersList = ({handlerRemoveUser, users = [] }) => {
    // console.log('Userlist');
    // console.log(users);
  return (
    <>
      <p>Listado de Usuarios</p>
      <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Usuario</th>
                <th scope="col">Email</th>
                <th scope="col">Update</th>
                <th scope="col">Remove</th>
            </tr>
        </thead>
        <tbody>
        {
            users.map(({ id,username,email }) => (
                <UserRow 
                    key = { id }
                    id = { id }
                    username = { username }
                    email = { email }
                    handlerRemoveUser = { handlerRemoveUser }  
                />
            ))
        }
        </tbody>
      </table>
    </>
  );
};
