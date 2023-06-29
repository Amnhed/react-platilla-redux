import { useReducer } from 'react';
import { LoginPage } from './auth/pages/LoginPage';
import { useAuth } from './auth/hooks/useAuth';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainRoutes } from './routes/MainRoutes';



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
                                    <MainRoutes 
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