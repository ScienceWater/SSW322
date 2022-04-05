import * as React from 'react';
import { StyleSheet, View, Dimensions, Text, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BottomNavigation, Searchbar, Headline, Button } from 'react-native-paper';
import { getProducts } from '../services/firebase';
import MyButton from '../components/myButton';

const HomeRoute = () => <Text>PUT HOMESCREEN ELEMENTS HERE</Text>;
const CartRoute = () => <Text>Cart goes here</Text>;
const AccountRoute = () => <Text>Account</Text>;

type ScreenProps = {
  navigation: any
  route: any
}

const HomeScreen = ({ navigation, route }: ScreenProps) => {
  
  // Bottom Navigation
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'cart', title: 'Cart', icon: 'cart' },
    { key: 'account', title: 'Account', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    cart: CartRoute,
    account: AccountRoute,
  });

  // Searchbar
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  // Buttons (item categories)
  <>
    
    
  </>

  return (
    <>
    
    <Headline>Exchange4Students</Headline>

    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />

    <View style={styles.categoryButtonView}>
      <Button
        icon="bed-empty"
        onPress={() => console.log('Go to Furniture page')}
        mode="contained"
        compact={true}
        contentStyle={{flexDirection: "column"}}
        labelStyle={{fontSize: 12, color: "#000000"}}
        style={{marginVertical: 5, marginLeft: 5, backgroundColor: "#d6d6d6"}}>
        Furniture
      </Button>
      
      <Button
        icon="book"
        onPress={() => console.log('Go to Books page')}
        mode="contained"
        compact={true}
        contentStyle={{flexDirection: "column"}}
        labelStyle={{fontSize: 12, color: "#000000"}}
        style={{marginVertical: 5, marginLeft: 5, backgroundColor: "#d6d6d6"}}>
        Books
      </Button>

      <Button
        icon="hanger"
        onPress={() => console.log('Go to Clothing page')}
        mode="contained"
        compact={true}
        contentStyle={{flexDirection: "column"}}
        labelStyle={{fontSize: 12, color: "#000000"}}
        style={{marginVertical: 5, marginLeft: 5, backgroundColor: "#d6d6d6"}}>
        Clothing
      </Button>

      <Button
        icon="lightbulb"
        onPress={() => console.log('Go to Electronics page')}
        mode="contained"
        compact={true}
        contentStyle={{flexDirection: "column"}}
        labelStyle={{fontSize: 12, color: "#000000"}}
        style={{marginVertical: 5, marginLeft: 5, backgroundColor: "#d6d6d6"}}>
        Electronics
      </Button>
    </View>
    
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#A32638' }}
    />

    </>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {

  },
  textInput: {
    height: 40,
    width: "75%",
    marginBottom: 10, 
    borderBottomColor: "#3A3A3A",
    borderBottomWidth: 1,
    padding: 10
  },
  categoryButtonView: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
});
