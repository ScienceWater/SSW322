import * as React from 'react';
import { StyleSheet, View, Dimensions, Text, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BottomNavigation} from 'react-native-paper';

const MusicRoute = () => <Text>PUT HOMESCREEN ELEMENTS HERE</Text>;
const AlbumsRoute = () => <Text>Cart goes here</Text>;
const RecentsRoute = () => <Text>Account</Text>;

type ScreenProps = {
  navigation: any
  route: any
}

const HomeScreen = ({ navigation, route }: ScreenProps) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'cart', title: 'Cart', icon: 'cart' },
    { key: 'account', title: 'Account', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: MusicRoute,
    cart: AlbumsRoute,
    account: RecentsRoute,
  });

  return (
    <>
    <Text>Hi, {route.params.firstName}</Text>
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
});
