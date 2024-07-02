import React, {createContext, useContext, useState} from "react";
import {authService} from "../services/authService";
import {Alert} from "react-native";

export interface AuthData {
    token: string;
    email: string;
    name: string;
}

interface AuthContextData {
    authData?: AuthData;
    signIn: (email: string, password: string) => Promise<AuthData>;
    signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: React.FC = ({children}) => {
    const [authData, setAuth] = useState<AuthData>();
    async function signIn(email: string, password: string): Promise<AuthData> {
        try {
            const auth = await authService.signIn(email, password);
            setAuth(auth);
            return auth;
        } catch (error) {
            Alert.alert(error.message, 'tente novamente');
        }
    }
    function signOut() {
        setAuth(undefined);
        return;
    }
    return (
        <AuthContext.Provider value={{authData, signIn, signOut}}>{children}</AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
};
