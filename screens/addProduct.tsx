import * as React from 'react';
import { Alert,Dimensions, Platform, SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Appbar, DarkTheme, DefaultTheme, Provider, Surface, TextInput, ThemeProvider, Button} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import { StatusBar } from 'expo-status-bar';
import MyButton from '../components/myButton';
import { addNewProduct, getEmail} from '../services/firebase';
import * as ImagePicker from 'expo-image-picker';
import defaultImage from '../components/image-not-found.png';
import { useCallback, useRef } from 'react';

type ScreenProps = {
  navigation: any,
  route: any
}

export default function AddProductScreen({ navigation, route }: ScreenProps) {
  const [itemName, setItemName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [Width, setWidth] = React.useState("");
  const [Height, setHeight] = React.useState("");
  const [Depth, setDepth] = React.useState("");
  const [Brand, setBrand] = React.useState("");
  const [Serial, setSerial] = React.useState("");
  const [Sport, setSport] = React.useState("");
  const [ISBN, setISBN] = React.useState("");
  const [Author, setAuthor] = React.useState("");
  const [Weight, setWeight] = React.useState("");
  const [Color, setColor] = React.useState("");
  const [Size, setSize] = React.useState("");
  const [CourseNumber, setCourseNumber] = React.useState("");
  const inputEl = useRef(null);

  const handleInputSerial= useCallback((ev) => {
    const input =  ev.nativeEvent.text;
    setSerial(input)
  }, [setSerial]);

  const handleInputCourseNumber= useCallback((ev) => {
    const input =  ev.nativeEvent.text;
    setCourseNumber(input)
  }, [setCourseNumber]);

  const handleInputSize = useCallback((ev) => {
    const input =  ev.nativeEvent.text;
    setSize(input)
  }, [setSize]);

  const handleInputColor= useCallback((ev) => {
    const input =  ev.nativeEvent.text;
    setColor(input)
  }, [setColor]);

  const handleInputWeight= useCallback((ev) => {
    const input =  ev.nativeEvent.text;
    setWeight(input)
  }, [setWeight]);


  const handleInputWidth= useCallback((ev) => {
    const input =  ev.nativeEvent.text;
    setWidth(input)
  }, [setWidth]);

  const handleInputHeight= useCallback((ev) => {
    const input =  ev.nativeEvent.text;
    setHeight(input)
  }, [setHeight]);

  const handleInputDepth= useCallback((ev) => {
    const input =  ev.nativeEvent.text;
    setDepth(input)
  }, [setDepth]);

  const handleInputISBN= useCallback((ev) => {
    const input =  ev.nativeEvent.text;
    setISBN(input)
  }, [setISBN]);

  const handleInputAuthor= useCallback((ev) => {
    const input =  ev.nativeEvent.text;
    setAuthor(input)
  }, [setAuthor]);

  const handleInputSport= useCallback((ev) => {
    const input =  ev.nativeEvent.text;
    setSport(input)
  }, [setSport]);

  const handleInputBrand= useCallback((ev) => {
    const input =  ev.nativeEvent.text;
    setBrand(input)
  }, [setBrand]);
  
  const [image, setImage] = React.useState(Image.resolveAssetSource(defaultImage).uri);

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

  const DiffInputs = () => {
    if(route.params.category == 'Furniture'){
      return (
        <>
          <View  style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <TextInput
                label="Width"
                mode="outlined"
                activeOutlineColor='#A32638'
                style={styles.textInput} 
                keyboardType = 'numeric'
                defaultValue={Width}
                onEndEditing={ handleInputWidth }
            />
            <TextInput
                label="Height"
                mode="outlined"
                activeOutlineColor='#A32638'
                style={styles.textInput} 
                keyboardType = 'numeric'
                defaultValue={Height} 
                onEndEditing={handleInputHeight}
            />
            <TextInput
                label="Depth"
                mode="outlined"
                activeOutlineColor='#A32638'
                style={styles.textInput} 
                keyboardType = 'numeric'
                defaultValue={Depth} 
                onEndEditing={handleInputDepth}
            />
          </View>
          <TextInput
              label="Weight"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              keyboardType = 'numeric'
              onEndEditing={handleInputWeight}
              defaultValue={Weight}
          />
           <TextInput
              label="Color"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              keyboardType = 'numeric'
              onEndEditing={handleInputColor}
              defaultValue={Color}
          />
          </>
      );
    }
    if(route.params.category == "Electronic"){
      return(<>
        <TextInput
              label="Serial number"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              keyboardType = 'numeric'
              onEndEditing={handleInputSerial}
              defaultValue={Serial}
          />
          <TextInput
              label="Weight"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              keyboardType = 'numeric'
              onEndEditing={handleInputWeight}
              defaultValue={Weight}
          />
          <View  style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}} >
            <TextInput
                label="Width"
                mode="outlined"
                activeOutlineColor='#A32638'
                style={styles.textInput} 
                keyboardType = 'numeric'
                defaultValue={Width}
                onEndEditing={ handleInputWidth }
            />
            <TextInput
                label="Height"
                mode="outlined"
                activeOutlineColor='#A32638'
                style={styles.textInput} 
                keyboardType = 'numeric'
                defaultValue={Height} 
                onEndEditing={handleInputHeight}
            />
            <TextInput
                label="Depth"
                mode="outlined"
                activeOutlineColor='#A32638'
                style={styles.textInput} 
                keyboardType = 'numeric'
                defaultValue={Depth} 
                onEndEditing={handleInputDepth}
            />
          </View>
        </>
      );
    }
    if(route.params.category == "Clothing"){
      return(
        <>
          <TextInput
            label="Clothing Brand"
            mode="outlined"
            activeOutlineColor='#A32638'
            style={styles.textInput} 
            defaultValue={Brand} 
            onEndEditing={handleInputBrand}
          />
          <TextInput
            label="Color"
            mode="outlined"
            activeOutlineColor='#A32638'
            style={styles.textInput} 
            keyboardType = 'numeric'
            onEndEditing={handleInputColor}
            defaultValue={Color}
          />
         <TextInput
            label="Size"
            mode="outlined"
            activeOutlineColor='#A32638'
            style={styles.textInput} 
            keyboardType = 'numeric'
            onEndEditing={handleInputSize}
            defaultValue={Size}
          />
      </>
      );
    }
    if(route.params.category == "Sports gear"){
      return(
        <>
        <TextInput
              label="Sport"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              keyboardType = 'numeric'
              defaultValue={Sport} 
              onEndEditing={handleInputSport}
          />
          <TextInput
              label="Weight"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              keyboardType = 'numeric'
              onEndEditing={handleInputWeight}
              defaultValue={Weight}
          />
        </>
      );
    }
    if(route.params.category == "Book"){
      return(
        <>
        <TextInput
              label="ISBN"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              keyboardType = 'numeric'
              defaultValue={ISBN} 
              onEndEditing={handleInputISBN}
          />
          <TextInput
              label="Author"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              defaultValue={Author} 
              onEndEditing={handleInputAuthor}
          />
          <TextInput
              label="Course Number"
              mode="outlined"
              activeOutlineColor='#A32638'
              style={styles.textInput} 
              defaultValue={CourseNumber} 
              onEndEditing={handleInputCourseNumber}
          />
        </>
      );
    }
    else{
      return(
        <>
        </>
      );
    }
  }

  return (
    <Provider>
    <StatusBar style="light" />
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.title}>Add New {route.params.category} Item</Text>
    
        {/* <DropDown
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
          
        /> */}
  
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

          <DiffInputs/>

          <View style={styles.flexCont}>
              <Button style={styles.imgpicker} icon="image" color="black" onPress={pickImage}>Upload from camera roll</Button>
               <Image source={{ uri: image }} style={{ width: 100, height: 100, marginTop: 15, backgroundColor: "#ebebeb"}} />
          </View>
         
          <Button icon="check" style={styles.button} mode="contained" onPress={async () => {
            let usersEmail = await getEmail()
            const Category = route.params.category;
            addNewProduct(
              itemName, Category, price, Description, image, usersEmail, 
              Width, Height, Depth, ISBN, Brand, Serial, Sport, Author, Weight, Color, Size, CourseNumber
            );
              //navigation.navigate("Home")  
            }    
            }>List Item</Button>
     
    </View>
    </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    height: Dimensions.get('screen').height * 1

  },
  textInput: {
    marginTop: 15,
    color: "#A32638",
    minWidth: "30%"
  
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
