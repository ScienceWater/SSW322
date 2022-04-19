import * as React from "react";
import { ScrollView, TouchableOpacity, StyleSheet, ActionSheetIOS } from "react-native";
import { Button, Card, Headline, Modal, Paragraph, Portal, Provider, Text, Title } from "react-native-paper";


type ScreenProps = {
  navigation: any
  route: any
}

const Cart = ({ navigation, route }: ScreenProps) => {

  return (
    <>
    <ScrollView>
        <Text>Cart goes here.</Text>
    </ScrollView>
    </>
  );
}

export default Cart;

const styles = StyleSheet.create({

});
