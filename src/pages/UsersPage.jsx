import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { useUsers } from "../hooks/useUsers";

export const UsersPage = () => {
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
        <UserModalForm 
        userSelected={ userSelected }
        initialUserForm={ initialUserForm }
        handlerAddUser={ handlerAddUser }
        handlerCloseForm={ handlerCloseForm}
       />
      )}

      <div className="container my-4">
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
