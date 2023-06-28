import { useReducer } from 'react';
import Swal from 'sweetalert2';
import { LoginPage } from './auth/pages/LoginPage';
import { loginReducer } from './auth/reducers/loginReducer';
import { Navbar } from './components/layout/NavBar';
import { UsersPage } from './pages/UsersPage';
import { useAuth } from './auth/hooks/useAuth';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserRoutes } from './routes/userRoutes';



export const MainApp = () => {
    const {login, handlerLogin, handlerLogout} = useAuth();
    return (
        <Routes>
            {
                login.isAuth
                    ? (
                        <>
                            <Route path='/*' 
                                element={
                                    <UserRoutes 
                                        login={login}
                                        handlerLogout={handlerLogout}
                                    />
                                    }
                            />
                        </>
                    )
                    : 
                    <>
                        <Route path='/login'
                            element={
                                <LoginPage handlerLogin={handlerLogin} />
                            }
                        />
                        <Route path='/*' element={ <Navigate to="/login"/>}/>
                    </>
            }
        </Routes>
    );
}