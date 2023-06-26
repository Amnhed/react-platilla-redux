import { useState } from "react"
import Swal from "sweetalert2";

const initialLoginForm = {
    username:'',
    password:''
}

export const LoginPage = () => {
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password} = loginForm;

    const onInputCahnge = ({ target }) => {
        const {name, value} = target;
        setLoginForm({
            ...loginForm,
            [ name ]:value
        });
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(!username || !password){
            Swal.fire('Error de validacion', 'Username y password requeridos', 'error');
        }
        //login
        if(username === 'amnhed' && password === '12345'){
            // handlerLogin();
        }else{
            Swal.fire('Error de inico de session ', 'Usuario o password invalidos', 'error');
        }
        setLoginForm(initialLoginForm);
    }

    return (
        <div class="modal" style={{ display:'block' }} tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Iniciar sesion</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={ onSubmit }>
                        <div class="modal-body">
                            <input 
                                className="form-control my-3 w-75" 
                                placeholder="Usuario" 
                                name="username"
                                onChange={ onInputCahnge }
                            />

                            <input 
                                className="form-control my-3 w-75" 
                                placeholder="Contraseña" 
                                type='password' 
                                name="password"
                                onChange={ onInputCahnge }
                                />
                        </div>
                    </form>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>)
}
