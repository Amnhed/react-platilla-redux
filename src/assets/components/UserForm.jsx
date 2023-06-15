import { useState } from "react"

const initialUserForm = {
    username: 'aaa',
    password:'asas',
    email:'asas'
}

export const UserForm = () => {

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
  return (
      <form>
      <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Nombre de usuario
          </label>
          <input
            className="form-control"
            placeholder="Nombre de usuario"
            value={username}
            onChange={ onInputChange }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email 
          </label>
          <input
            className="form-control"
            placeholder="email"
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
