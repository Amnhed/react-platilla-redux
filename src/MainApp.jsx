import { useReducer } from 'react';
import Swal from 'sweetalert2';
import { LoginPage } from './auth/pages/LoginPage';
import { loginReducer } from './auth/reducers/loginReducer';
import { Navbar } from './components/layout/NavBar';
import { UsersPage } from './pages/UsersPage';
import { useAuth } from './auth/hooks/useAuth';



export const MainApp = () => {
    const {login, handlerLogin, handlerLogout} = useAuth();
    return (
        <>
            {
                login.isAuth
                    ? (
                        <>
                            <Navbar login={ login } handlerLogout={handlerLogout} />
                            <UsersPage />
                        </>
                    )
                    : <LoginPage handlerLogin={handlerLogin} />
            }
        </>
    );
}