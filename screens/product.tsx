import { useRoute } from "@react-navigation/native";
import * as React from "react";
import { View, ScrollView, TouchableOpacity, StyleSheet, ActionSheetIOS, Image, SafeAreaView, Dimensions } from "react-native";
import { Button, Card, Headline, Modal, Paragraph, Portal, Provider, Text, Title } from "react-native-paper";
import { addNewProduct, addToCart } from "../services/firebase";

type ScreenProps = {
  navigation: any
  route: any
}

const ProductScreen = ({ navigation, route }: ScreenProps) => {
  if (route.params.product.category === "Clothing") {

    return (
      <>
        <SafeAreaView>
          <ScrollView style={styles.productCard}>
            <Image
              style={styles.image}
              source={{uri: route.params.product.imageURL}}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{route.params.product.item_name}</Text>
              <Text style={styles.price}>${route.params.product.price}</Text>
              <Text style={styles.heading}>Description</Text>
              <Text style={styles.description}>{route.params.product.description}</Text>
              <View
                style={{
                  borderBottomColor: 'grey',
                  opacity: 0.4,
                  borderBottomWidth: 1,
                  marginTop: 20,
                  marginBottom: 25,
                }}
              />
              <Text style={styles.heading}>Product Details</Text>
              <Text style={styles.description}>Category: {route.params.product.category}</Text>
              <Text style={styles.description}>Size: {route.params.product.size}</Text>
              <Text style={styles.description}>Color: {route.params.product.Color}</Text>
              <Text style={styles.description}>Clothing Brand: {route.params.product.brand}</Text>
            </View>
            <Button style={styles.button} icon="cart" mode="contained" onPress={()=> {addToCart(route.params.product), navigation.navigate("Cart"), console.log('add to cart pressed!')}}>Add to Cart</Button>
          </ScrollView>
        </SafeAreaView>
      </>
      )

  } else if (route.params.product.category === "Electronic") {

    return (
      <>
        <SafeAreaView>
          <ScrollView style={styles.productCard}>
            <Image
              style={styles.image}
              source={{uri: route.params.product.imageURL}}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{route.params.product.item_name}</Text>
              <Text style={styles.price}>${route.params.product.price}</Text>
              <Text style={styles.heading}>Description</Text>
              <Text style={styles.description}>{route.params.product.description}</Text>
              <View
                style={{
                  borderBottomColor: 'grey',
                  opacity: 0.4,
                  borderBottomWidth: 1,
                  marginTop: 20,
                  marginBottom: 25,
                }}
              />
              <Text style={styles.heading}>Product Details</Text>
              <Text style={styles.description}>Category: {route.params.product.category}</Text>
              <View style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                <Text style={styles.description}>Width: {route.params.product.dimensions.width}</Text>
                <Text style={styles.description}>Height: {route.params.product.dimensions.height}</Text>
                <Text style={styles.description}>Depth: {route.params.product.dimensions.depth}</Text>
              </View>
              <Text style={styles.description}>Model Serial #: {route.params.product.serial}</Text>
              <Text style={styles.description}>Weight: {route.params.product.weight}</Text>
            </View>
            <Button style={styles.button} icon="cart" mode="contained" onPress={()=> {addToCart(route.params.product), navigation.navigate("Cart"), console.log('add to cart pressed!')}}>Add to Cart</Button>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  } else if (route.params.product.category === "Book") {

    return (
      <>
        <SafeAreaView>
          <ScrollView style={styles.productCard}>
            <Image
              style={styles.image}
              source={{uri: route.params.product.imageURL}}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{route.params.product.item_name}</Text>
              <Text style={styles.price}>${route.params.product.price}</Text>
              <Text style={styles.heading}>Description</Text>
              <Text style={styles.description}>{route.params.product.description}</Text>
              <View
                style={{
                  borderBottomColor: 'grey',
                  opacity: 0.4,
                  borderBottomWidth: 1,
                  marginTop: 20,
                  marginBottom: 25,
                }}
              />
              <Text style={styles.heading}>Product Details</Text>
              <Text style={styles.description}>Category: {route.params.product.category}</Text>
              <Text style={styles.description}>ISBN: {route.params.product.isbn}</Text>
              <Text style={styles.description}>Author: {route.params.product.author}</Text>
              <Text style={styles.description}>Course Number: {route.params.product.course_number}</Text>
            </View>
            <Button style={styles.button} icon="cart" mode="contained" onPress={()=> {addToCart(route.params.product), navigation.navigate("Cart"), console.log('add to cart pressed!')}}>Add to Cart</Button>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  } else if (route.params.product.category === "Furniture") {

    return (
      <>
        <SafeAreaView>
          <ScrollView style={styles.productCard}>
            <Image
              style={styles.image}
              source={{uri: route.params.product.imageURL}}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{route.params.product.item_name}</Text>
              <Text style={styles.price}>${route.params.product.price}</Text>
              <Text style={styles.heading}>Description</Text>
              <Text style={styles.description}>{route.params.product.description}</Text>
              <View
                style={{
                  borderBottomColor: 'grey',
                  opacity: 0.4,
                  borderBottomWidth: 1,
                  marginTop: 20,
                  marginBottom: 25,
                }}
              />
              <Text style={styles.heading}>Product Details</Text>
              <Text style={styles.description}>Category: {route.params.product.category}</Text>
              <View  style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}} >
                <Text style={styles.description}>Width: {route.params.product.dimensions.width}</Text>
                <Text style={styles.description}>Height: {route.params.product.dimensions.height}</Text>
                <Text style={styles.description}>Depth: {route.params.product.dimensions.depth}</Text>
              </View>
              <Text style={styles.description}>Color: {route.params.product.Color}</Text>
              <Text style={styles.description}>Weight: {route.params.product.weight}</Text>
            </View>
            <Button style={styles.button} icon="cart" mode="contained" onPress={()=> {addToCart(route.params.product), navigation.navigate("Cart"), console.log('add to cart pressed!')}}>Add to Cart</Button>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  } else if (route.params.product.category === "Sports gear") {

    return (
      <>
        <SafeAreaView>
          <ScrollView style={styles.productCard}>
            <Image
              style={styles.image}
              source={{uri: route.params.product.imageURL}}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{route.params.product.item_name}</Text>
              <Text style={styles.price}>${route.params.product.price}</Text>
              <Text style={styles.heading}>Description</Text>
              <Text style={styles.description}>{route.params.product.description}</Text>
              <View
                style={{
                  borderBottomColor: 'grey',
                  opacity: 0.4,
                  borderBottomWidth: 1,
                  marginTop: 20,
                  marginBottom: 25,
                }}
              />
              <Text style={styles.heading}>Product Details</Text>
              <Text style={styles.description}>Category: {route.params.product.category}</Text>
              <Text style={styles.description}>Weight: {route.params.product.weight}</Text>
              <Text style={styles.description}>Sport: {route.params.product.sport}</Text>
            </View>
            <Button style={styles.button} icon="cart" mode="contained" onPress={()=> {addToCart(route.params.product), navigation.navigate("Cart"), console.log('add to cart pressed!')}}>Add to Cart</Button>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  } else {

    return (
      <>
        <Text>Product not found :(</Text>
      </>
    )
  }
}

export default ProductScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    marginTop: 5,
    color: "#A32638",
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: '#AAAAAA',
    marginBottom: 5,
    marginRight: 15,
    lineHeight: 30,
  },
  button: {
    backgroundColor: "black",
    marginLeft: 60,
    marginRight: 60,
    borderRadius: 8,
  },
  heading: {
    fontWeight: "800",
    color: "#A32638",
    fontSize: 18,
    marginBottom: 10,
  },
  productCard: {
    height: Dimensions.get('screen').width * 1.75,
    borderBottomColor: "grey",
    borderBottomWidth: .8,
    marginBottom: 20,
  },
});