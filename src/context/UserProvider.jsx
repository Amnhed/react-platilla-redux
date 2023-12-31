import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        errorsValidationUser,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getAllUsersHook,
    } = useUsers();

    return (
        <UserContext.Provider value={
            {
                users,
                userSelected,
                initialUserForm,
                visibleForm,
                errorsValidationUser,  
                handlerAddUser,
                handlerRemoveUser,
                handlerUserSelectedForm,
                handlerOpenForm,
                handlerCloseForm,
                getAllUsersHook,
            }
        }>
            {children}
        </UserContext.Provider>
    )
}
