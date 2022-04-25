import * as React from "react";
import { ScrollView, TouchableOpacity, StyleSheet, ActionSheetIOS } from "react-native";
import { Avatar, Button, Card, Headline, List, Modal, Paragraph, Portal, Provider, Text, Title } from "react-native-paper";
import { getProducts } from '../services/firebase';

type ScreenProps = {
  navigation: any
  route: any
}

const Cart = ({ navigation, route }: ScreenProps) => {

  return (
    <>
    <ScrollView>
        <List.Item
        title="test product"
        description="test product description"
        //onPress={()=>{return navigation.navigate("Product", {product: getItem(item)})}}
        style={styles.listItem}
        left = {props => <Avatar.Image size={48} source={require('../components/image-not-found.png')}/>}
        />
    </ScrollView>
    </>
  );
}

export default Cart;

const styles = StyleSheet.create({
  
  listItem: {
    borderWidth: 5,
    borderColor: '#A32638',
    },
});
