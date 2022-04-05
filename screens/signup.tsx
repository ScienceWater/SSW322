import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from '../components/myButton';
import { signUpWithEmail, getEmail } from '../services/firebase';
import { TextInput } from 'react-native-paper';


type ScreenProps = {
  navigation: any
}

export default function LoginScreen({ navigation }: ScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  return (
    <>
    <StatusBar/>
    <View style={styles.container}>
      <TextInput style={styles.textInput} activeUnderlineColor="#A32638" label='First Name' onChangeText={setfName} />
      <TextInput style={styles.textInput} activeUnderlineColor="#A32638" label='Last Name' onChangeText={setlName} />
      <TextInput style={styles.textInput} activeUnderlineColor="#A32638" label='Email'  onChangeText={setEmail} />
      <TextInput style={styles.textInput} activeUnderlineColor="#A32638" label='Password' secureTextEntry onChangeText={setPassword} />
      <View style={{height: Dimensions.get('screen').width * 0.04}}></View>
      <MyButton  type="primary" text="Sign up" size="large" onPressFn={async () => {
          let result = await signUpWithEmail(fName, lName, email, password);
          if (result === 'success') {
            let firstName = await getEmail();
            const user = 
            navigation.navigate("Home", {firstName: firstName});
          }
        }}/>
      <View style={{height: Dimensions.get('screen').width * 0.05}}></View>
      <MyButton text="Already have an account? Log in" onPressFn={() => navigation.navigate("Login")}/>
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
    width: "80%",
    marginBottom: 10, 
    backgroundColor: "transparent",
  },
  
});