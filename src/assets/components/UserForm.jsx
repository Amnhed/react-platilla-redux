import { useEffect } from "react";
import { useState } from "react"
import Swal from "sweetalert2";

export const UserForm = ( { userSelected, handlerAddUser, initialUserForm } ) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const { username, password, email, id } = userForm;

    const onInputChange = ({ target }) => {
        //console.log('target '+target.value)
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        });
    }
    const onSubmit = (event) => {
      event.preventDefault();
      //console.log( userForm );
      //guardar el usario en el lisatdo de usuarios
      //el id seha igual a 0 y no venga paswword a validar (!password && id === 0)
      if( !username || !email || (!password && id === 0)){
        Swal.fire({
          icon: 'error',
          title: 'Error de validacion',
          text: 'Debes completar los campos del formulario'
        })
        return
      }
      handlerAddUser(userForm)
      setUserForm(initialUserForm);
    }

    useEffect(() => {
      //console.log(userSelected);
      setUserForm({
        ...userSelected,
        password: ''
      })
    }, [userSelected]);

  return (
      <form onSubmit={ onSubmit } >
      <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Nombre de usuario
          </label>
          <input
            className="form-control"
            placeholder="Nombre de usuario"
            name="username"
            value={username}
            onChange={onInputChange} />
          
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email 
          </label>
          <input
            className="form-control"
            placeholder="email"
            name="email"
            value={email}
            onChange={ onInputChange }
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>

        </div>
        { id > 0 || 
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={ onInputChange }
            />
          </div>
        }

        <div className="mb-3">
          <input
            type="hidden"
            className="form-control"
            name="id"
            value={id}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          { id>0 ? 'Editar': 'Crear' }
        </button>
      </form>
   
  );
}
