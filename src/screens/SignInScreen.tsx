import React from 'react';
import {Image, View} from "react-native";
import {MyTextInput} from "../components/MyTextInput";
import {MyButton} from "../components/MyButton";
import {styles} from './styles';

export function SignInScreen() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <View style={[styles.container, {justifyContent: 'center'}]}>
            <Image style={{width: 100, height: 100}} resizeMode="contain" source={require('../assets/logo.png')} />
            <MyTextInput placeholder='email' value={email} onChangeText={setEmail} />
            <MyTextInput secureTextEntry placeholder='senha' value={password} onChangeText={setPassword} />
            <MyButton title='Entrar no App' />
        </View>
    );
}
