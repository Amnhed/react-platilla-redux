import { useContext } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { UserContext } from "../context/UserContext";

export const UsersPage = () => {

  const {
    users,
    visibleForm,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm
  } = useContext(UserContext);


  return (
    <>
      {!visibleForm || (
        <UserModalForm />
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
