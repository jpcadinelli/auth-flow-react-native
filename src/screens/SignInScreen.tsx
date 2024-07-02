import React from 'react';
import {Image, View} from "react-native";
import {MyTextInput} from "../components/MyTextInput";
import {MyButton} from "../components/MyButton";
import {styles} from './styles';
import {useAuth} from "../contexts/Auth";

export function SignInScreen() {
    const {signIn} = useAuth()
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <View style={[styles.container, {justifyContent: 'center'}]}>
            <Image style={{width: 100, height: 100}} resizeMode="contain" source={require('../assets/logo.png')} />
            <MyTextInput placeholder='email' value={email} onChangeText={setEmail} />
            <MyTextInput secureTextEntry placeholder='senha' value={password} onChangeText={setPassword} />
            <MyButton onPress={() => signIn(email, password)} title='Entrar no App' />
        </View>
    );
}
