import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from '../components/myButton';
import { signUpWithEmail } from '../services/firebase';

type ScreenProps = {
  navigation: any
}

export default function LoginScreen({ navigation }: ScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  signUpWithEmail(fName, lName, email, password);

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
      <Text>Signup</Text>
      <TextInput style={styles.textInput} placeholder='First Name' onChangeText={setfName} />
      <TextInput style={styles.textInput} placeholder='Last Name' onChangeText={setlName} />
      <TextInput style={styles.textInput} placeholder='Email'  onChangeText={setEmail} />
      <TextInput style={styles.textInput} placeholder='Password' secureTextEntry onChangeText={setPassword} />
      <MyButton style={styles.textInput} type="primary" text="Signup" size="medium" onPressFn={signUpWithEmail}/>
      <View style={{height: Dimensions.get('screen').width * 0.05}}></View>
      <Text>Don't have an account? <MyButton  text="Login" onPressFn={() => navigation.navigate("Login")}/></Text>
    </View>
    </>
  );
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
    backgroundColor: '#dfdfdf',
    marginBottom: 10, 
    borderRadius: 30,
    padding: 10
  }
});