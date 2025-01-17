import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SignInScreen } from "../screens/SignInScreen";

const Stack = createNativeStackNavigator();

export function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Sign In" component={SignInScreen} />
        </Stack.Navigator>
    )
}
