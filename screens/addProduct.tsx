import * as React from 'react';
import { Alert,Dimensions, Platform, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { Appbar, DarkTheme, DefaultTheme, Provider, Surface, TextInput, ThemeProvider, Button} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import { StatusBar } from 'expo-status-bar';
import MyButton from '../components/myButton';
import { addNewProduct, getEmail} from '../services/firebase';
import * as ImagePicker from 'expo-image-picker';

type ScreenProps = {
  navigation: any,
  route: any
} 

export default function AddProductScreen({ navigation }: ScreenProps) {
  const [itemName, setItemName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [Category, setCategory] = React.useState("");
  const [showDropDown, setShowDropDown] = React.useState(false);

  const categories = [
    {
      label: 'Furniture',
      value: 'furniture',
    },
    {
      label: 'Books',
      value: 'books',
    },
    {
      label: 'Clothing',
      value: 'clothing',
    },
    {
      label: 'Electronics',
      value: 'electronics',
    },
    {
      label: 'Sports gear',
      value: 'sports gear',
    },
  ];
  

  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



  return (
    <Provider>
    <StatusBar style="light" />
    <View style={styles.container}>
        <Text style={styles.title}>Add New Item</Text>
    
        <DropDown
          label={'Category'}
          mode={'outlined'}
          dropDownStyle={{ backgroundColor: "transparent",}}
          dropDownItemStyle={{ backgroundColor: "transparent",}}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={Category}
          setValue={setCategory}
          list={categories}
          
        />
  
          <TextInput
              label="Item name"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              value={itemName} 
              onChangeText={itemName => setItemName(itemName)}
          />

          <TextInput
              label="Price"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              keyboardType = 'numeric'
              value={price} 
              onChangeText={price => setPrice(price)}
          />

          <TextInput
              label="Description"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              value={Description} 
              onChangeText={Description => setDescription(Description)}
          />
          <View style={styles.flexCont}>
              <Button style={styles.imgpicker} icon="image" color="black" onPress={pickImage}>Upload from camera roll</Button>
               <Image source={{ uri: image }} style={{ width: 100, height: 100, marginTop: 15, backgroundColor: "#ebebeb"}} />
          </View>
         
          <Button icon="check" style={styles.button} mode="contained" onPress={() => addNewProduct(itemName, Category, price, Description, image)}>List Item</Button>
     
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',

  },
  textInput: {
    marginTop: 15,
    color: "#A32638",
  
  },
  containerStyle: {
    flex: 1,
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
  },
  title: {
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",

  },
  title2: {
    marginLeft: 15,
    marginTop: 20
  },
  imgpicker: {
    marginTop: 47,
    marginBottom: 47,
    marginRight: 10,
    width: "71.5%"
  },
  flexCont: {
    display: "flex",
    flexDirection: "row",
 
  },
  button: {
    marginTop: 15,
    marginLeft: 65,
    marginRight: 65,
    borderRadius: 11,
    padding: 5,
    backgroundColor: "#A32638"
  },
});
