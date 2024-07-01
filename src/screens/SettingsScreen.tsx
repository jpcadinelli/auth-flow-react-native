import React from 'react';
import {Image, Text, View} from "react-native";
import {styles} from "./styles";
import {MyButton} from "../components/MyButton";

export function SettingsScreen() {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.title]}>Configurações</Text>
            <MyButton style={{backgroundColor: 'red'}} title='Sair do App' />
        </View>
    );
}
