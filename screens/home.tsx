import * as React from 'react';
import { Dimensions, StyleProp, StyleSheet, TextInput, View, ViewProps, ViewStyle } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Avatar, BottomNavigation, Button, Card, Headline, Paragraph, Searchbar, Subheading, Text, Title } from 'react-native-paper';
import { getProducts } from '../services/firebase';
import MyButton from '../components/myButton';
import { $DeepPartial } from '@callstack/react-theme-provider';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import addProductScreen from "./addProduct";
import BrowseScreen from './browse';
import PostingsScreen from './postings';

const HomeRoute = () => <BrowseScreen />;
const CartRoute = () => <Text>Cart goes here</Text>;
const SellRoute = () => <PostingsScreen /> 
const AccountRoute = () => <Text>Account</Text>;
// const AddProductRoute = () => <Text>Account</Text>;

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
    { key: 'sell', title: 'Sell', icon: 'cash-usd'},
    { key: 'account', title: 'Account', icon: 'account' },
    // { key: 'addItem', title: 'AddItem', icon: 'library'}
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    cart: CartRoute,
    sell: SellRoute,
    account: AccountRoute,
    // addItem: AddProductRoute
  });

  return (
    <>
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
  cardView: {

  },
  cardStyle: {
    width: 150,
  },
  cardCoverStyle: {
    padding: 5,
  },
});
