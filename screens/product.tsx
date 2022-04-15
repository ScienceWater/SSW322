import * as React from "react";
import { View, ScrollView, TouchableOpacity, StyleSheet, ActionSheetIOS, Image, SafeAreaView, Dimensions} from "react-native";
import { Button, Card, Headline, Modal, Paragraph, Portal, Provider, Text, Title } from "react-native-paper";

type ScreenProps = {
  navigation: any
  route: any
}

const ProductScreen = ({ navigation, route }: ScreenProps) => {
  if (route.params.product.category === "clothing") {

    return (
      <>
        <SafeAreaView>
        <ScrollView style={styles.productCard}>
          <Image
            style={styles.image}
            source={{ uri: route.params.product.imageURL}}
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
                    marginBottom: 25
  
                  }}
                />
            <Text style={styles.heading}>Product Details</Text>
            <Text style={styles.description}>Category: {route.params.product.category}</Text>
            <Text style={styles.description}>Size: {route.params.product.size}</Text>
            <Text style={styles.description}>Color: {route.params.product.color}</Text>
          </View>
        </ScrollView>
        <Button style={styles.button} icon="cart" mode= "contained" onPress={()=> console.log("Add to cart")}>Add to Cart</Button>
      </SafeAreaView>
      </>
      )

  } else if (route.params.product.category === "electronics") {

    return (
      <>
        <SafeAreaView>
        <ScrollView style={styles.productCard}>
          <Image
            style={styles.image}
            source={{ uri: route.params.product.imageURL}}
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
                    marginBottom: 25
  
                  }}
                />
            <Text style={styles.heading}>Product Details</Text>
            <Text style={styles.description}>Category: {route.params.product.category}</Text>
            <Text style={styles.description}>Dimensions: {route.params.product.dimensions}</Text>
            <Text style={styles.description}>Model: {route.params.product.model}</Text>
            <Text style={styles.description}>Weight: {route.params.product.weight}</Text>
            
          </View>
        </ScrollView>
        <Button style={styles.button} icon="cart" mode= "contained" onPress={()=> console.log("Add to cart")}>Add to Cart</Button>
      </SafeAreaView>
      </>
      )
    } else if (route.params.product.category === "books") {

      return (
        <>
          <SafeAreaView>
          <ScrollView style={styles.productCard}>
            <Image
              style={styles.image}
              source={{ uri: route.params.product.imageURL}}
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
                  marginBottom: 25

                }}
              />
              <Text style={styles.heading}>Product Details</Text>
              <Text style={styles.description}>Category: {route.params.product.category}</Text>
              <Text style={styles.description}>Edition: {route.params.product.edition}</Text>
              <Text style={styles.description}>Course Number: {route.params.product.course_number}</Text>
              
            </View>
          </ScrollView>
          <Button style={styles.button} icon="cart" mode= "contained" onPress={()=> console.log("Add to cart")}>Add to Cart</Button>
        </SafeAreaView>
        </>
        )
      } else if (route.params.product.category === "furniture") {

        return (
          <>
            <SafeAreaView>
            <ScrollView style={styles.productCard}>
              <Image
                style={styles.image}
                source={{ uri: route.params.product.imageURL}}
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
                    marginBottom: 25
  
                  }}
                />
                <Text style={styles.heading}>Product Details</Text>
                <Text style={styles.description}>Category: {route.params.product.category}</Text>
                <Text style={styles.description}>Dimensions: {route.params.product.dimensions}</Text>
                <Text style={styles.description}>Color: {route.params.product.color}</Text>
                <Text style={styles.description}>Weight: {route.params.product.weight}</Text>
                
              </View>
            </ScrollView>
            <Button style={styles.button} icon="cart" mode= "contained" onPress={()=> console.log("Add to cart")}>Add to Cart</Button>
          </SafeAreaView>
          </>
          )
        } else if (route.params.product.category === "sports gear") {

          return (
            <>
              <SafeAreaView>
              <ScrollView style={styles.productCard}>
                <Image
                  style={styles.image}
                  source={{ uri: route.params.product.imageURL}}
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
                      marginBottom: 25
    
                    }}
                  />
                  <Text style={styles.heading}>Product Details</Text>
                  <Text style={styles.description}>Category: {route.params.product.category}</Text>
    
                  <Text style={styles.description}>Weight: {route.params.product.weight}</Text>
                  
                </View>
              </ScrollView>
              <Button style={styles.button} icon="cart" mode= "contained" onPress={()=> console.log("Add to cart")}>Add to Cart</Button>
            </SafeAreaView>
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
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    marginTop: 5,
    color: "#A32638"
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: '#AAAAAA',
    marginBottom: 5,
    lineHeight: 30
  },
  button: {
    backgroundColor: "black",
    marginLeft: 60,
    marginRight: 60,
    borderRadius: 8
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
    marginBottom:20
  }
});
