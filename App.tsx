import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import HomeScreen from "./screens/home";
import StartUpScreen from "./screens/startup"
import React from 'react';
import PostingsScreen from './screens/postings';
import addProductScreen from "./screens/addProduct";
import ProductScreen from './screens/product';
import Cart from "./screens/cart"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name="Startup" component={StartUpScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Postings" component={PostingsScreen} />
        <Stack.Screen name="addProduct" component={addProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
