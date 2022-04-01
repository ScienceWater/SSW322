import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text} from 'react-native';
import { TextInput } from 'react-native-paper';

import { StatusBar } from 'expo-status-bar';
import MyButton from '../components/myButton';
import { logInWithEmail , getFirstName} from '../services/firebase';

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
  
      <TextInput style={styles.textInput}label="Email" activeUnderlineColor="#A32638" value={email} onChangeText={(text) => setEmail(text)} />
      <TextInput style={styles.textInput}  secureTextEntry label="Password" activeUnderlineColor="#A32638" value={password} onChangeText={(text) => setPassword(text)} />
      <View style={{height: Dimensions.get('screen').width * 0.025}}></View>
      <MyButton text="Log In" type="primary" size="large" onPressFn={async () => {
          let result = await logInWithEmail(email, password);
          if (result === 'success') {
            let firstName = await getFirstName();
            navigation.navigate("Home", {firstName: firstName});
          }
      }}/>
   

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
    color: "#A32638",
    width: "80%",
    marginBottom: 15,
    backgroundColor: "transparent",
  },
});