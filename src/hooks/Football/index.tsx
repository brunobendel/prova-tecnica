import { Countrie } from 'model';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { getCountries } from 'services';


interface FootBallContextData {
    countries:  Array<Countrie> 
}
const FootBallContext = createContext({
} as FootBallContextData);

interface IFootBallProvider{
    children: ReactNode
}
export const FootBallProvider = ({children}: IFootBallProvider) =>{
    const [ countries, setCountries] = useState([] as Array<Countrie>)
    useEffect(() => {
    const fetchData = async () => {
        const data = await getCountries();
        setCountries(data.response)
    }
    fetchData()
    }, [])
    return (
        <FootBallContext.Provider value={{countries}}>
            {children}
        </FootBallContext.Provider>
    )
}

export const useFootBall = () => useContext(FootBallContext)