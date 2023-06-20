import React from 'react'

export const UserRow = ( { handlerRemoveUser, id, username, email } ) => {
  const onRemoveUser = (id) => {
    handlerRemoveUser(id)
  }

  return (
      <tr>
        <th scope="row"></th>
        <td>{ id }</td>
        <td>{ username }</td>
        <td>{ email }</td>
        <td>
          <button type="button" className="btn btn-secondary sm">
            Actualizar
          </button>
        </td>
        <td>
          <button 
            type="button" 
            className="btn btn-danger sm"
            onClick={ () => onRemoveUser(id) }
          >
            Eliminar
          </button>
        </td>
      </tr>
  );
}
