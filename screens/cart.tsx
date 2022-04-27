import * as React from "react";
import { ScrollView, TouchableOpacity, StyleSheet, ActionSheetIOS, View } from "react-native";
import { Avatar, Button, Card, FAB, Headline, List, Modal, Paragraph, Portal, Provider, Snackbar, Text, Title } from "react-native-paper";
import { emptyCart, findCartItemA, getCartItems, getProduct, getProducts, markItemsSold, removeFromCart } from '../services/firebase';
import { useNavigation } from '@react-navigation/native';

type ScreenProps = {
  navigation: any
  route: any
}

let cartItemIds: string[] = [];
let itemNames: string[] = [];
let itemPrices: string[] = [];
let itemImageURLs: string[] = [];

const Cart = ({ route }: ScreenProps) => {

  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const updateCartItems = async () => {
    console.log('inside updateCartItems');
    cartItemIds = await getCartItems();
    resetItemParams();
    cartItemIds.forEach(function (cartItem) {
      getItemName(cartItem);
      getPrice(cartItem);
      getImage(cartItem);
    });
    return cartItemIds;
  }

  const resetItemParams = () => {
    itemNames = [];
    itemPrices = [];
    itemImageURLs = [];
  }

  const getItem = async (item: any) => {
    return await getProduct(item);
  }

  const getItemName = async (item: any) => {
    let itemData = await findCartItemA(item, 'item_name');
    console.log("getItemName: " + itemData);
    itemNames.push(itemData);
    return itemData;
  }

  const getPrice = async (item: any) => {
    let itemData = await findCartItemA(item, 'price');
    console.log("getItemPrice: " + itemData);
    itemPrices.push(itemData);
    return itemData;
  }

  const getImage = async (item: any) => {
    try {
      let itemData = await findCartItemA(item, 'imageURL');
      console.log("getItemImageURL: " + itemData);
      itemImageURLs.push(itemData);
      return itemData;
    } catch (e) {
      console.log(e);
      return '../components/image-not-found.png';
    }
  }

  updateCartItems();


  return (
    <>
      <View style={styles.container}>

        {/* List Item Real View */}
        <ScrollView>
          {/* <View> */}
            {cartItemIds.map((item, i) => { return (
              <List.Item
                title = {itemNames[i]}
                description = {`$${itemPrices[i]}`}
                style = {styles.listItem}
                onPress = {async () => {return navigation.navigate("Product", {product: await getItem(item)})}}
                // left = {props => <Avatar.Image size={48} source={itemImageURLs[i]}/>}
                right = {props => <Button icon="trash-can-outline" mode="contained" style={styles.removeButton} onPress={() => {removeFromCart(item), updateCartItems(), onToggleSnackBar, console.log('Item removed from cart')}}>Remove</Button>}
              />
            )})}
          {/* </View> */}

        </ScrollView>

        <View style={styles.container}>
          <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
              label: 'Undo',
              onPress: () => {
                // Do something
              },
            }}>
            Hey there! I'm a Snackbar.
          </Snackbar>
        </View>

        <FAB
          icon="cart-arrow-up"
          label="checkout"
          onPress={() => {markItemsSold(cartItemIds), emptyCart(), updateCartItems()}}
          style={styles.checkoutButton}
        />

      </View>
    </>
  );
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  listItem: {
    borderWidth: 5,
    borderColor: '#a9a9a9',
  },
  cardView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10,
    marginTop: 15,
  },
  cardStyle: {
      borderColor: "transparent",
      width: "45%",
      marginRight: 18,
      marginBottom: 18,
      borderWidth: 0
  },
  cardCoverStyle: {
    
  },
  cardContent: {
      padding: 5
  },
  checkoutButton: {
    backgroundColor: "#A32638",
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  removeButton: {
    backgroundColor: '#A32638',
  },
});
