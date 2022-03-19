import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from '../components/myButton';
import { getFirstName, logInWithEmail } from '../services/firebase';
import InputBox from '../components/inputBox';

type ScreenProps = {
  navigation: any
}

export default function LoginScreen({ navigation }: ScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <InputBox title='Email' type='text' onChangeFn={setEmail} />
      <InputBox title='Password' type='text' onChangeFn={setPassword} />
      <MyButton type="primary" text="Login" size="large" onPressFn={() => navigation.navigate("LogIn")}/>
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
});