import {createContext} from 'react'


export const defaultContext = {
   isAuth: false,
    id: ''
};

export const AuthContext =
    createContext(defaultContext);

export default function AuthProvider({ isAuth, id, role, userEmail, children }) {
    return <AuthContext.Provider value={{isAuth, id, role, userEmail }}>{children}</AuthContext.Provider>
}
