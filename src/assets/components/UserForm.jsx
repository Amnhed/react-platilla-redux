import { useState } from "react"

const initialUserForm = {
    username: '',
    password:'',
    email:''
}

export const UserForm = ( { handlerAddUser } ) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const { username, password, email } = userForm;

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
      if( !username || !email || !password){
        alert('Debes completar los campos del formulario');
        return
      }
      handlerAddUser(userForm)

      setUserForm(initialUserForm);
    }
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
   
  );
}
