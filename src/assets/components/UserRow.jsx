import React from 'react'

export const UserRow = ( { id,username, email } ) => {
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
        <button type="button" className="btn btn-danger sm">
          Eliminar
        </button>
      </td>
    </tr>
  );
}
