import React from 'react'
import { NavLink } from 'react-router-dom';

export const UserRow = ( { handlerUserSelectedForm, handlerRemoveUser, id, username, email } ) => {

  return (
      <tr>
        <th scope="row"></th>
        <td>{ id }</td>
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
