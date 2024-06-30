import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps,
} from "react-native";

interface MyButtonProps extends TouchableOpacityProps {
    title: string;
}
export function MyButton({ title, style, ...rest }: MyButtonProps) {
    return (
        <TouchableOpacity {...rest} style={[styles.button, style]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#FFF",
    },
    button: {
        backgroundColor: "#b1500a",
        borderRadius: 8,
        padding: 20,
    },
});