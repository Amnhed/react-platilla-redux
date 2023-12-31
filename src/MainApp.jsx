import { useReducer } from 'react';
import { LoginPage } from './auth/pages/LoginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainRoutes } from './routes/MainRoutes';
import { useContext } from 'react';
import { AuthContext } from './auth/context/AuthContext';



export const MainApp = () => {
    const {login} = useContext(AuthContext);
    return (
        <Routes>
            {
                login.isAuth
                    ? (
                        <>
                            <Route path='/*' 
                                element={
                                    <MainRoutes />
                                    }
                            />
                        </>
                    )
                    : 
                    <>
                        <Route path='/login'
                            element={
                                <LoginPage />
                            }
                        />
                        <Route path='/*' element={ <Navigate to="/login"/>}/>
                    </>
            }
        </Routes>
    );
}