import * as React from 'react';
import { Alert, Button, Dimensions, Platform, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { Appbar, DarkTheme, DefaultTheme, Provider, Surface, TextInput, ThemeProvider, Chip } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'

type ScreenProps = {
  navigation: any,
  route: any
} 

export default function ChooseCateg() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text  style={styles.title}>Choose the type of item you wish to add </Text>
            <Chip textStyle={{fontSize: 20}} style={styles.chip} mode="outlined" icon="laptop"  onPress={()=>{return navigation.navigate("addProduct", {category: "electronics"})}}>Electronics</Chip>
            <Chip textStyle={{fontSize: 20}} style={styles.chip} mode="outlined"  icon="sofa"  onPress={()=>{return navigation.navigate("addProduct", {category: "furniture"})}}>Furniture</Chip>
            <Chip textStyle={{fontSize: 20}} style={styles.chip} mode="outlined"  icon="store"  onPress={()=>{return navigation.navigate("addProduct", {category: "clothing"})}}>Clothing</Chip>
            <Chip textStyle={{fontSize: 20}} style={styles.chip} mode="outlined"  icon="basketball"  onPress={()=>{return navigation.navigate("addProduct", {category: "sports gear"})}}>Sports Gear</Chip>
            <Chip textStyle={{fontSize: 20}} style={styles.chip} mode="outlined" icon="book"  onPress={()=>{return navigation.navigate("addProduct", {category: "books"})}}>Books</Chip>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft: 40, 
        paddingRight: 40,

    },
    chip: {
        padding: 10,
        marginBottom: 15
    },
    title: {
        marginBottom: 15, 
        textAlign: "center", 
        fontSize: 18,
        fontWeight: "700"
    }
});
