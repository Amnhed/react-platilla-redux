import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginService } from "../services/authService";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}
export const useAuth = () => {
    const [login, dispach] = useReducer(loginReducer, initialLogin);

    const handlerLogin = ({ username, password }) => {
        //llamo al service
        const isLogin = loginService({username, password});
        if (isLogin) {
            const user = { username: 'admin' }
            // console.log(user);
            dispach({
                type: 'login',
                payload: user,
            });
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user,
            }));

        } else {
            Swal.fire('Error Login', 'Username o password invalidos', 'error');
        }
    }

    const handlerLogout = () => {
        dispach({
            type: 'logout',
        });
        sessionStorage.removeItem('login');
    }
    return {
        login,

        handlerLogin,
        handlerLogout
    }
}