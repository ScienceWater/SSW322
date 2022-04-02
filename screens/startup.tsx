import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import { white } from 'react-native-paper/lib/typescript/styles/colors';
import MyButton from '../components/myButton'

type ScreenProps = {
    navigation: any
}

export default function StartUpScreen({ navigation }: ScreenProps) {
    return (
        <View style={styles.container}>
  
          <StatusBar style="auto" />
          <View style={styles.curve}> 
            <Text style={{fontSize: 40, color: "white", fontWeight: "600",  transform : [ { scaleX : 0.5 } ]}}>Exchange4Students</Text>
          </View>
          <View style={{height: Dimensions.get('screen').width * 0.1}}>
</View>
          <View style={styles.fixToText}>
            <MyButton type="primary" text=" Log in   " size="large" onPressFn={() => navigation.navigate("Login")}/>
            <View style={{height: Dimensions.get('screen').width * 0.03}}></View>
            <MyButton type="secondary" text="Sign up" size="large" onPressFn={() => navigation.navigate("Signup")}/>
            <View style={{height: Dimensions.get('screen').width * 0.2}}></View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      
    
    },
    curve: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#A32638',
      borderBottomStartRadius : 200,
      borderBottomEndRadius : 200,
      transform : [ { scaleX : 2 } ],
      overflow : 'hidden',
      
    },
    fixToText: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
});