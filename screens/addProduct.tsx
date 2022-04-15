import * as React from 'react';
import { Alert, Button, Dimensions, Platform, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { Appbar, DarkTheme, DefaultTheme, Provider, Surface, TextInput, ThemeProvider } from 'react-native-paper';
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

        <View style={styles.inner}>
          {/* <Text style={styles.title2}>Category<Text style={{color: 'red'}}>*</Text></Text>
          <ModalDropdown style={styles.dropdown}  options={
          [
            'Kitchen', 
            'Clothing',
            'Books',
            'Tech',
          ]
          }
          defaultValue='Kitchen'
          onSelect={(idx, Category) => setCategory(Category)}
          /> */}

          {/* <Provider>
            <Surface style={{marginTop: 20}}>
              <SafeAreaView> */}
                <DropDown
                  label={'Category'}
                  mode={'outlined'}
                  dropDownStyle={{margin: 5,}}
                  dropDownItemSelectedTextStyle={{color: '#A32638'}}
                  visible={showDropDown}
                  showDropDown={() => setShowDropDown(true)}
                  onDismiss={() => setShowDropDown(false)}
                  value={Category}
                  setValue={setCategory}
                  list={categories}
                />
              {/* </SafeAreaView>
            </Surface>
          </Provider> */}

          {/* <Text style={styles.title2}>Item Name<Text style={{color: 'red'}}>*</Text></Text> */}
          <TextInput
              label="Item name"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              value={itemName} 
              onChangeText={itemName => setItemName(itemName)}
          />

          {/* <Text style={styles.title2}>Price<Text style={{color: 'red'}}>*</Text></Text> */}
          <TextInput
              label="Price"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              keyboardType = 'numeric'
              value={price} 
              onChangeText={price => setPrice(price)}
          />

          {/* <Text style={styles.title2}>Description<Text style={{color: 'red'}}>*</Text></Text> */}
          <TextInput
              label="Description"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              value={Description} 
              onChangeText={Description => setDescription(Description)}
          />

          {/* <ThemeProvider>
            <Surface style={styles.containerStyle}>
              <SafeAreaView style={styles.safeContainerStyle}>
                <DropDown
                  label={"Category"}
                  mode={"outlined"}
                  visible={showDropDown}
                  showDropDown={() => setShowDropDown(true)}
                  onDismiss={() => setShowDropDown(false)}
                  value={Category}
                  setValue={setCategory}
                  list={categories}
                />
              </SafeAreaView>
            </Surface>
          </ThemeProvider> */}

          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}

          <MyButton style={styles.button} type="primary" text="List Item" size="large" onPressFn={() => addNewProduct(itemName, Category, price, Description, image)}/>
          
        </View>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // height: Dimensions.get('screen').height,
    backgroundColor: '#fff',
    // padding: 5,
    width: '100%',
  },
  textInput: {
    margin: 5,
  },
  dropdown: {
    height: 55,
    tintColor: '#A32638',
    borderWidth: 1,
    borderRadius: 4,
    margin: 5,
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
  //   backgroundColor: '#fff',
  //   width: Dimensions.get('screen').width*.9,
  //   height: Dimensions.get('screen').height*.65,
  //   marginLeft: 20,
  //   marginRight: 20,
  //   borderRadius: 10,

  //   shadowColor: "#000",
  //   shadowOffset: {
	//     width: 0,
	//     height: 9,
  //   },
  //   shadowOpacity: 0.48,
  //   shadowRadius: 11.95,

  //   elevation: 18,
  },
  button: {
    // margin: 20,
    // padding: 20,
  },
});
