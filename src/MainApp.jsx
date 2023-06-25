import { UserForm } from "./assets/components/UserForm";
import { UsersList } from "./assets/components/UsersList";
import { useUsers } from "./assets/components/hooks/useUsers";

export const MainApp = () => {
  const {
    users,
    userSelected,
    initialUserForm,
    visibleForm,

    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
  } = useUsers();

  return (
    <>
      {!visibleForm || (
        <div className="abrir-modal animacion fadeIn">
          <div className="modal" style={ {display: "block"}} tabIndex="-1">
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
        </div>
      )}

      <div className="container my-4">
        <h2>MainApp</h2>
        <div className="row">
          <div className="col">
            {/* Sies falso que lo muestre  */}
            {visibleForm || (
              <button
                type="button"
                className="btn btn-dark mb-3"
                onClick={handlerOpenForm}
              >
                Nuevo usuario
              </button>
            )}
            {users.length === 0 ? (
              <div className="alert alert-warning">
                No existen usarios en el sistema
              </div>
            ) : (
              <UsersList
                handlerRemoveUser={handlerRemoveUser}
                handlerUserSelectedForm={handlerUserSelectedForm}
                users={users}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
