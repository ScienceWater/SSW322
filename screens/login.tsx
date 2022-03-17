import React, { useState } from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from '../components/myButton';
import { getFirstName, logInWithEmail } from '../services/firebase';

type ScreenProps = {
  navigation: any
}

export default function LogInScreen({ navigation }: ScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
      <MyField title='Email' type='text' onChangeFn={setEmail} />
      <MyField title='Password' type='text' secure={true} onChangeFn={setPassword} />
        <MyButton text="Log In" type="primary" size="large" onPressFn={async () => {
          let result = await logInWithEmail(email, password);
          if (result === 'success') {
            let firstName = await getFirstName();
            navigation.navigate("Home", {firstName: firstName});
          }
        } } />
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