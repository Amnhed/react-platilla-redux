import React from 'react'

export const LoginPage = () => {
    return (
        <div className="modal" style={{ display:'block' }} tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Iniciar session</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input 
                            className="form-control my-3 w-75"
                            placeholder="Username"
                            name="username"
                        />
                        <input 
                            className="form-control my-3 w-75"
                            placeholder="Password"
                            type="password"
                            name="password"
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
