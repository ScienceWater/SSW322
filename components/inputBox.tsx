import React, { useState } from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";

export type Props = {
    title: string,
    type: string,
    secure?: boolean,
    onChangeFn: Function
}

const InputBox: React.FC<Props> = ({ title, type, secure, onChangeFn }) =>{
    const [focus, setFocus] = useState(false);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <TextInput 
                style={focus ? styles.focus : styles.input} 
                autoCapitalize={"none"}
                secureTextEntry={secure}
                onFocus={() => setFocus(true)} 
                onBlur={() => setFocus(false)} 
                onChangeText={(value) => onChangeFn(value)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    focus: {
        height: 50,
        width: 300,
        fontSize: 16,
        borderColor: '#007AFF',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
        padding: 10,
    },
    input: {
        height: 50,
        width: 300,
        fontSize: 16,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
        padding: 10,
    },
    container: {
        width: 300,
        height: 60,
        marginBottom: 30
    },
    text: {
        fontSize: 16
    }
});

export default InputBox;