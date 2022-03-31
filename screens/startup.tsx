import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import MyButton from '../components/myButton'

type ScreenProps = {
    navigation: any
}

export default function StartUpScreen({ navigation }: ScreenProps) {
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 40}}>Exchange4Students</Text>
          <StatusBar style="auto" />
          <View style={{height: Dimensions.get('screen').width * 0.6}}></View>
          <View style={styles.fixToText}>
            <MyButton type="primary" text="Login" size="large" onPressFn={() => navigation.navigate("Login")}/>
            <View style={{height: Dimensions.get('screen').width * 0.05}}></View>
            <MyButton type="secondary" text="Signup" size="large" onPressFn={() => navigation.navigate("Signup")}/>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fixToText: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
});