import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';



type ScreenProps = {
  navigation: any
  route: any
}

export default function HomeScreen({ navigation, route }: ScreenProps) {
  return(
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
      <Text>Hi, {route.params.firstName}</Text>
     
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: "75%",
    marginBottom: 10, 
    borderBottomColor: "#3A3A3A",
    borderBottomWidth: 1,
    padding: 10
  },
});