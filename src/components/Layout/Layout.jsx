import AuthProvider from '../../context/auth/authProvider.jsx'
import { Header } from '../Header'
import {useEffect, useState} from "react";
import {authCheck} from "../../api/serIsAuth.js";
import {useLocation, useNavigate} from "react-router-dom";
import {publicRoutes} from "../../consts/routes.js";

export const Layout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate()

    const [authInfo, setAuthInfo] = useState({
        isAuth: '', id: '', role: '', userEmail: ''
    })

    useEffect( () => {
        authCheck().then((res) => {
            // if (!res.isAuth && !publicRoutes.includes(location.pathname)) navigate('/');
            setAuthInfo(res)
        })
    },[location])



    return (
        <AuthProvider
            {...authInfo}
        >
            <Header />

            {children}
        </AuthProvider>
    );
};

