import React from 'react'
import { UserForm } from './UserForm'

export const UserModalForm = ({ initialUserForm, handlerAddUser, userSelected, handlerCloseForm }) => {
    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fs-5" id="exampleModalLabel">
                                {userSelected.id > 0 ? "Editar" : "Crear"} Usuario
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <UserForm
                                initialUserForm={initialUserForm}
                                handlerAddUser={handlerAddUser}
                                userSelected={userSelected}
                                handlerCloseForm={handlerCloseForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
