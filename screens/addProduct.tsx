import React, { useState, Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Alert, TextInput} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { StatusBar } from 'expo-status-bar';
import MyButton from '../components/myButton';
import { BottomNavigation} from 'react-native-paper';
import { addNewProduct, getEmail} from '../services/firebase';

type ScreenProps = {
  navigation: any
}

export default function AddProductScreen({ navigation }: ScreenProps) {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [Category, setCategory] = useState("");


  return (
    <>
    <StatusBar style="light" /> 
    <View style={styles.container}>
        <Text style={styles.title}>Add New Item</Text>
        <View style={styles.inner}>
        <Text style={styles.title2}>Item Name<Text style={{color: 'red'}}>*</Text></Text>
        <TextInput
            style={styles.textInput} 
            value={itemName} 
            onChangeText={itemName => setItemName(itemName)}
        />

        <Text style={styles.title2}>Category<Text style={{color: 'red'}}>*</Text></Text>
        <ModalDropdown style={styles.textInput}  options={
        [
          'Kitchen', 
          'Clothing',
          'Books',
          'Tech',
        ]
        }
        defaultValue='Kitchen'
        onSelect={(idx, Category) => setCategory(Category)}
        />
  

        <Text style={styles.title2}>Price<Text style={{color: 'red'}}>*</Text></Text>
        <TextInput
            style={styles.textInput} 
            value={price} 
            keyboardType = 'numeric'
            onChangeText={price => setPrice(price)}
        />

        <Text style={styles.title2}>Description<Text style={{color: 'red'}}>*</Text></Text>
        <TextInput
            style={[styles.textInput, {height: 120} ]} 
            value={Description} 
            onChangeText={Description => setDescription(Description)}
        />
        <MyButton style={styles.button} type="primary" text="Add Product" size="large" onPressFn={() => addNewProduct(itemName, Category, price, Description)}/>
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('screen').height,
    backgroundColor: '#fff',
  },
  
  textInput: {
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
  },

  title: {
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
},

  title2: {
    marginLeft: 15,
    marginTop: 20
  },

  picker: {
    width: Dimensions.get('screen').width*.8,
    padding: 10,
    height: 200
  },

  inner: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width*.9,
    height: Dimensions.get('screen').height*.65,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  button:{
    margin: 20,
    padding: 20,
  }
});
