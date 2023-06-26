import React from 'react'

export const LoginPage = () => {
    return (
        <div class="modal" style={{ display:'block' }} tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Iniciar sesion</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input className="form-control my-3 w-75" placeholder="Usuario" name="username"/>
                        <input className="form-control my-3 w-75" placeholder="Contraseña" type='password' name="password"/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>)
}
