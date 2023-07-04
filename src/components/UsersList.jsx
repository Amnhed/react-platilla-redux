import { useContext } from "react";
import { UserRow } from "./UserRow";
import { UserContext } from "../context/UserContext";

export const UsersList = () => {
    // console.log('Userlist');
    // console.log(users);
    const { users } = useContext(UserContext);
  return (
    <>
      <p>Listado de Usuarios</p>
      <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Usuario</th>
                <th scope="col">Email</th>
                <th scope="col">Editar modal</th>
                <th scope="col">Editar Pagina</th>
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
                />
            ))
        }
        </tbody>
      </table>
    </>
  );
};
