import { User } from 'model';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { getUser } from 'services';

interface AuthContextData {
    userFootBall: User;
    isLogged: boolean;
    isLoading: boolean;
    SignIn:  ()  => void
    errorLogin: boolean;

}
const AuthContext = createContext({
    userFootBall: {} as User,
    isLogged: false,
    isLoading: false
} as AuthContextData);

interface IAuthProvider{
    children: ReactNode
}


export const AuthProvider = ({children}: IAuthProvider) =>{
    const [userFootBall, setUserFootBall] = useState({} as User)
    const [isLogged, setIsLogged] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false)
    const SignIn = async () => {
        setIsLogged(true) 
        setIsLoading(true)
        const data = await getUser()
        if(data.response.account){
            setUserFootBall(data.response.account)
            setIsLogged(true) 
        }else{
            setErrorLogin(true)
            setIsLogged(false) 
        }
        setIsLoading(false)
    }

    return (
        <AuthContext.Provider value={{userFootBall, isLogged, isLoading, SignIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)