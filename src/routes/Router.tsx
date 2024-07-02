import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {useAuth} from "../contexts/Auth";
import {AppStack} from "./AppStack";
import {AuthStack} from "./AuthStack";
import {styles} from "../screens/styles";
import {Image, View} from 'react-native';

export function Router() {
    const {authData, loading} = useAuth();
    if (loading) {
        return (
            <View style={styles.container}>
                <Image style={{width: 250, height: 250}} resizeMode="contain" source={require('../assets/logo.png')} />
            </View>
        )
    }
    return (
        <NavigationContainer>
            {authData ? <AppStack/> : <AuthStack />}
        </NavigationContainer>
    );
}
