import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';


const ContextoAuth = createContext();

export const ProvedorAuth = ({ children }) => {
    const [logado, setLogado] = useState(false);
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function carregarDados() {
            const token = await AsyncStorage.getItem('token')
            if (token) {
                setLogado(true);
                setToken(token);
                setLoading(false)
            }
            else {
                setLoading(false)
            }
        }
        carregarDados()
    }, [])

    return (
        <ContextoAuth.Provider
            value={{
                token, setToken, logado, setLogado, loading, setLoading
            }}
        >
            {children}
        </ContextoAuth.Provider>
    )
}

export default ContextoAuth