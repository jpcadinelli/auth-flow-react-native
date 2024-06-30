import React from 'react';
import {Image, Text, View} from "react-native";
import {styles} from "./styles";
import {MyTextInput} from "../components/MyTextInput";
import {MyButton} from "../components/MyButton";

export function HomeScreen() {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.title]}>Essa tela só pode ser vista por usuários autenticados.</Text>
            <MyButton title='Ir para Configurações' />
            <Text>
                by<Text style={[styles.coffText]}>CoffStack</Text>
            </Text>
        </View>
    );
}
