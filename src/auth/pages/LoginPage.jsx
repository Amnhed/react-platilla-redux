import { useContext, useState } from "react"
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const initialLoginForm = JSON.parse(sessionStorage.getItem('login')) || {
    username:'',
    password:''
}

export const LoginPage = () => {
    const {handlerLogin} = useContext(AuthContext);
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password} = loginForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [ name ]: value,
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            Swal.fire('Error de validacion', 'Username y password requeridos', 'error');
        }

        // aca implementamos el login
        handlerLogin({username, password});
        
        setLoginForm(initialLoginForm);
    }

    return (
        <div className="modal" style={{ display:'block' }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Iniciar sesion</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={ onSubmit }>
                        <div className="modal-body">
                            <input 
                                className="form-control my-3 w-75" 
                                placeholder="Usuario" 
                                name="username"
                                onChange={ onInputChange }
                            />

                            <input 
                                className="form-control my-3 w-75" 
                                placeholder="Contraseña" 
                                type='password' 
                                name="password"
                                onChange={ onInputChange }
                                />
                        </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">Iniciar session</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>)
}
