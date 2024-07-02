import React from 'react';
import {Text, View} from "react-native";
import {styles} from "./styles";
import {MyButton} from "../components/MyButton";
import {useNavigation} from "@react-navigation/native";

export function HomeScreen() {
    const navigation = useNavigation();
    let view = <><View style={[styles.container]}>
        <Text style={[styles.title]}>Essa tela só pode ser vista por usuários autenticados.</Text>
        <MyButton onPress={() => navigation.navigate("Settings")} title='Ir para Configurações'/>
        <Text>
            by<Text style={[styles.coffText]}>CoffStack</Text>
        </Text>
    </View></>;
    return view;
}
