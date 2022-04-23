import * as React from "react";
import { ScrollView, TouchableOpacity, StyleSheet, ActionSheetIOS, View } from "react-native";
import { FAB, Button, Card, Headline, Modal, Paragraph, Portal, Provider, Text, Title, Searchbar} from "react-native-paper";
import { getUserProducts } from '../services/firebase';
import {useNavigation} from '@react-navigation/native'

type ScreenProps = {
  navigation: any
  route: any
}

const PostingsScreen = ({ route }: ScreenProps) => {
  const navigation = useNavigation();
   const [items, setItems] = React.useState<Object[]>([]);

  const getItems = async () => {
    let result : Object[] = [];


    result = await getUserProducts();
    setItems(result);
  }

  const getItem = (item: any) => {
    return item;
  }

  const getItemName = (item: any) => {
    return item.item_name;
  }

  const getPrice = (item: any) => {
    return item.price;
  }
  const getImage = (item: any) => {
    return item.imageURL;
  }

  //console.log(items[1])

  getItems()


  return (
    <>
    <View style={styles.container}>
    <FAB
    style={styles.button}
    medium
    icon="plus"
    label="Add New Listing"
    onPress={()=>{return navigation.navigate("ChooseCateg")}}
  />
    <Headline style={styles.headline}>My Listings</Headline>

      <ScrollView>
         <View style={styles.cardView}> 
        {items.map((item, i) => { return (
          <Card key={i} style={styles.cardStyle} onPress={()=>{return navigation.navigate("Product", {product: getItem(item)})}}>
            <Card.Cover style={styles.cardCoverStyle} source={{ uri: getImage(item) }} />
            <Card.Content style={styles.cardContent}>
              <Title>{getItemName(item)}</Title>
              <Paragraph>${getPrice(item)}</Paragraph>
            </Card.Content>
          </Card>
      )})}
        </View>
     
      </ScrollView>
    </View>
    </>
  );
};


export default PostingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
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
    fontWeight: "500",
    marginTop: 10
  },

  categoryButtonView: {
    flexDirection: 'row',
    alignSelf: 'center',
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
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",

  marginTop: 15,
  },
  cardStyle: {
    borderColor: "transparent",
    width: "100%",
    marginRight: 18,
    marginBottom: 18,
    borderWidth: 0
  },
  cardCoverStyle: {
    height: 140
  
  },
  cardContent: {
    padding: 5
  }, 
  button: {
    backgroundColor: "#A32638",
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    zIndex: 1000
    
  }
});
