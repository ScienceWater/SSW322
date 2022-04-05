import * as React from 'react';
import { StyleSheet, View, Dimensions, Text, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BottomNavigation, Searchbar, Headline, Button, Subheading } from 'react-native-paper';
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

  return (
    <>
    <View style={styles.container}>
    <Headline style={styles.headline}>Exchange4Students</Headline>

      <Searchbar
        placeholder="Search items"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <Subheading style={styles.subheading}>Categories</Subheading>

      <View style={styles.categoryButtonView}>
        <Button
          icon="bed-empty"
          onPress={() => console.log('Go to Furniture page')}
          mode="contained"
          compact={true}
          style={styles.categoryButtonStyle}
          contentStyle={styles.categoryButtonContentStyle}
          labelStyle={styles.categoryButtonLabelStyle}>
          Furniture
        </Button>
        
        <Button
          icon="book"
          onPress={() => console.log('Go to Books page')}
          mode="contained"
          compact={true}
          style={styles.categoryButtonStyle}
          contentStyle={styles.categoryButtonContentStyle}
          labelStyle={styles.categoryButtonLabelStyle}>
          Books
        </Button>

        <Button
          icon="hanger"
          onPress={() => console.log('Go to Clothing page')}
          mode="contained"
          compact={true}
          style={styles.categoryButtonStyle}
          contentStyle={styles.categoryButtonContentStyle}
          labelStyle={styles.categoryButtonLabelStyle}>
          Clothing
        </Button>

        <Button
          icon="lightbulb"
          onPress={() => console.log('Go to Electronics page')}
          mode="contained"
          compact={true}
          style={styles.categoryButtonStyle}
          contentStyle={styles.categoryButtonContentStyle}
          labelStyle={styles.categoryButtonLabelStyle}>
          Electronics
        </Button>
      </View>

      <Subheading style={styles.subheading}>Recommended</Subheading>
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
    flex: 2,
    backgroundColor: '#fff',
    padding: 5,
  },
  textInput: {
    height: 40,
    width: "75%",
    marginBottom: 10, 
    borderBottomColor: "#3A3A3A",
    borderBottomWidth: 1,
    padding: 10
  },
  headline: {
    paddingBottom: 5,
  },
  subheading: {
    fontSize: 20,
    marginTop: 5,
  },
  categoryButtonView: {
    flexDirection: 'row',
  },
  categoryButtonStyle: {
    marginVertical: 5,
    marginRight: 5,
    backgroundColor: '#d6d6d6',
    paddingTop: 10,
  },
  categoryButtonContentStyle: {
    flexDirection: 'column',
    width: 84,
  },
  categoryButtonLabelStyle: {
    fontSize: 15,
    color: '#000000',
  },
});
