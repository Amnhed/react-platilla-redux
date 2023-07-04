import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const UserRow = ( { id, username, email } ) => {
  const { handlerUserSelectedForm, handlerRemoveUser }= useContext(UserContext);

  return (
      <tr>

        <td  scope="row">{ id }</td>
        <td>{ username }</td>
        <td>{ email }</td>
        <td>
          <button 
            type="button" 
            className="btn btn-secondary sm"
            onClick={ () => handlerUserSelectedForm({
              id,
              username,
              email
            }) }
          >
            Actualizar
          </button>
        </td>
        <td>
        <NavLink className={'btn btn-secondary btn-sm'}
                    to={'/users/edit/' + id} >
                    update route
                </NavLink>
        </td>
        <td>
          <button 
            type="button" 
            className="btn btn-danger sm"
            onClick={ () => handlerRemoveUser(id) }
          >
            Eliminar
          </button>
        </td>
      </tr>
  );
}
