import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from '../components/myButton';
import { logInWithEmail } from '../services/firebase';

type ScreenProps = {
  navigation: any
}

export default function LoginScreen({ navigation }: ScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  logInWithEmail(email, password);

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
    
    
      <Text>Login</Text>
      <TextInput style={styles.textInput} placeholder='Email'  onChangeText={setEmail} />
      <TextInput style={styles.textInput} placeholder='Password' secureTextEntry onChangeText={setPassword} />
      <MyButton type="primary" text="Login" size="medium" onPressFn={logInWithEmail}/>
      <View style={{height: Dimensions.get('screen').width * 0.05}}></View>
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
    width: "75%",
    marginBottom: 10, 
    borderBottomColor: "#3A3A3A",
    borderBottomWidth: 1,
    padding: 10
  },
});