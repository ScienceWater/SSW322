import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";


const MyButton = (props: any) => {
    let buttonContainer = {};
    let buttonText = {};
    let sizeContainer = {};
    let sizeText = {};

    if (props.type == 'primary') {
        buttonContainer = styles.primaryContainer;
        buttonText = styles.primaryText;
    }
    else if (props.type == 'secondary') {
        buttonContainer = styles.secondaryContainer;
        buttonText = styles.secondaryText;
    }

    if (props.size == 'small') {
        sizeContainer = styles.smallContainer;
        sizeText = styles.smallText;
    }
    else if (props.size == 'medium') {
        sizeContainer = styles.mediumContainer;
        sizeText = styles.mediumText;
    }
    else if (props.size == 'large') {
        sizeContainer = styles.largeContainer;
        sizeText = styles.largeText;
    }

    return (
        <Pressable style={[buttonContainer, sizeContainer]} onPress={props.onPressFn}>
        <Text style={[buttonText, sizeText]}>{props.text}</Text>
        </Pressable>
    )
}

export default MyButton;

const styles = StyleSheet.create({
    primaryContainer: {
        backgroundColor: '#A32638',
        paddingHorizontal: 32,
        paddingVertical: 12,
        width: 150,
        borderRadius: 15,
        borderColor: '#A32638',
        borderWidth: 2,
    },
    primaryText: {
        color: 'white',
        fontWeight: '400',
        textAlign: 'center',
        fontSize: 16
    },
    secondaryContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 32,
        paddingVertical: 12,
        width: 150,
        borderRadius: 32,
        borderColor: '#133C55',
        borderWidth: 2,
    },
    secondaryText: {
        color: '#133C55',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    },
    smallContainer: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        width: 75,
        borderRadius: 16,
        borderWidth: 1,
    },
    smallText: {
        fontSize: 8
    },
    mediumContainer: {
        paddingHorizontal: 32,
        paddingVertical: 12,
        width: "75%",
        borderRadius: 15,
        borderWidth: 2,
    },
    mediumText: {
        fontSize: 18
    },
    largeContainer: {
        paddingHorizontal: 48,
        paddingVertical: 12,
        width: 300,
        borderRadius: 48,
        borderWidth: 3,
    },
    largeText: {
        fontSize: 24
    },
});