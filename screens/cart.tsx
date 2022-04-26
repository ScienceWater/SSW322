import * as React from "react";
import { ScrollView, TouchableOpacity, StyleSheet, ActionSheetIOS, View } from "react-native";
import { Avatar, Button, Card, Headline, List, Modal, Paragraph, Portal, Provider, Text, Title } from "react-native-paper";
import { findCartItem, findCartItemA, getCartItems, getProducts } from '../services/firebase';
import { useNavigation } from '@react-navigation/native';

type ScreenProps = {
  navigation: any
  route: any
}

let cartItemIds: string[] = [];

const Cart = ({ navigation, route }: ScreenProps) => {

  const updateCartItems = async () => {
    console.log('inside updateCartItems');
    cartItemIds = await getCartItems();
    return cartItemIds;
  }

  // const getItem = (item: any) => {
  //   return item;
  // }

  const getItemName = (item: any) => {
    let itemData = findCartItemA(item, 'item_name');
    return itemData;
  }

  const getPrice = (item: any) => {
    let itemData = findCartItemA(item, 'price');
    return itemData;
  }

  const getImage = async (item: any) => {
    try {
      let itemData = await findCartItemA(item, 'imageURL');
      return itemData;
    } catch (e) {
      console.log(e);
      return '../components/image-not-found.png';
    }
  }

  updateCartItems();

  return (
    <>

    {/* List Item Test View */}
    <ScrollView>
      <List.Item
        title="test product"
        description="test product description"
        //onPress={()=>{return navigation.navigate("Product", {product: getItem(item)})}}
        style={styles.listItem}
        left = {props => <Avatar.Image size={48} source={require('../components/image-not-found.png')}/>}
      />
    </ScrollView>

    {/* List Item Real View */}
    <ScrollView>
      {/* <View> */}
        {cartItemIds.map((item, i) => { return (
          <List.Item
            title = {getItemName(item)}
            description = {getPrice(item)}
            style = {styles.listItem}
            // left = {props => <Avatar.Image size={48} source={require(getImage(item))}/>}
          />
        )})}
      {/* </View> */}
    </ScrollView>

    {/* Card Real View */}
    {/* <ScrollView>
        <View style={styles.cardView}>
          {cartItems.map((item, i) => { return (
            <Card style={styles.cardStyle} key={i} onPress={()=>{return navigation.navigate("Product", {product: getItem(item)})}}>
              <Card.Cover style={styles.cardCoverStyle} source={{ uri: getImage(item) }} />
              <Card.Content style={styles.cardContent}>
                <Title>{getItemName(item)}</Title>
                <Paragraph>${getPrice(item)}</Paragraph>
              </Card.Content>
            </Card>
          )})}
        </View>
    </ScrollView> */}

    </>
  );
}

export default Cart;

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 5,
    borderColor: '#A32638',
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
});
