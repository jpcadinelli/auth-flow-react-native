import React from 'react';
import {Text, View} from "react-native";
import {styles} from "./styles";
import {MyButton} from "../components/MyButton";
import {useAuth} from "../contexts/Auth";

export function SettingsScreen() {
    const {signOut} = useAuth();
    return (
        <View style={[styles.container]}>
            <Text style={[styles.title]}>Configurações</Text>
            <MyButton onPress={signOut} style={{backgroundColor: 'red'}} title='Sair do App' />
        </View>
    );
}
