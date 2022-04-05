import * as React from "react";
import { View } from "react-native";
import { BottomNavigation, Headline, Text } from "react-native-paper";

const HomeRoute = () => <Text>PUT HOMESCREEN ELEMENTS HERE</Text>;
const CartRoute = () => <Text>Cart goes here</Text>;
const SellRoute = () => <Text>Post items here</Text> 
const AccountRoute = () => <Text>Account</Text>;

type ScreenProps = {
  navigation: any
  route: any
}

const PostingsScreen = ({ navigation, route }: ScreenProps) => {
  // Bottom Navigation
  const [index, setIndex] = React.useState(2);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'cart', title: 'Cart', icon: 'cart' },
    { key: 'sell', title: 'Sell', icon: 'cash-usd'},
    { key: 'account', title: 'Account', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    cart: CartRoute,
    sell: SellRoute,
    account: AccountRoute,
  });

  return (
    <>
    <View>
      <Headline>My Items for Sale</Headline>
    </View>
    

    <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: '#A32638' }}
      />
    </>
  );
}

export default PostingsScreen;