import * as React from 'react';
import { Dimensions, StyleProp, StyleSheet, TextInput, View, ViewProps, ViewStyle } from 'react-native';
import { Avatar, BottomNavigation, Button, Card, Headline, Paragraph, Searchbar, Subheading, Text, Title } from 'react-native-paper';
import BrowseScreen from './browse';
import PostingsScreen from './postings';
import AddProductScreen from './addProduct';

const HomeRoute = () => <BrowseScreen navigation={undefined} route={undefined} />;
const CartRoute = () => <Text>Cart goes here</Text>;
const SellRoute = () => <PostingsScreen navigation={undefined} route={undefined} />;
const ListProductRoute = () => <AddProductScreen navigation={undefined} route={undefined} />;
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
    { key: 'sell', title: 'Sell', icon: 'cash-usd'},
    { key: 'listItem', title: 'List Item', icon: 'plus-box-outline'},
    { key: 'account', title: 'Account', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    cart: CartRoute,
    sell: SellRoute,
    listItem: ListProductRoute,
    account: AccountRoute,
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

});
