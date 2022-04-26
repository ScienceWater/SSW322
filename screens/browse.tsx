import * as React from 'react';
import { Dimensions, StyleProp, StyleSheet, TextInput, View, ViewProps, ViewStyle, ScrollView } from 'react-native';
import {  Avatar, BottomNavigation, Button, Card, Chip, Headline, Menu, Paragraph, Searchbar, Subheading, Text, Title } from 'react-native-paper';
import { getProducts } from '../services/firebase';
import {useNavigation} from '@react-navigation/native'

type ScreenProps = {
  navigation: any
  route: any
}

let items: Object[] = [];


const BrowseScreen = ({ route }: ScreenProps) => {

  const navigation = useNavigation();

  const updateItems = () => {
    items.forEach(item => console.log(item));
  }

  const search = async (category: string, item_name: string) => {
    items = await getProducts(category, item_name);
    return items
  }

  // Searchbar
  const [searchQuery, setSearchQuery] = React.useState('');

  let category = '';

  search(category, searchQuery);

  const onChangeSearch = (query: React.SetStateAction<string>) => {
    setSearchQuery(query);
    search(category, searchQuery);
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


  return (
    <>
    <View style={styles.container}>
    <Headline style={styles.headline}>Exchange4Students</Headline>

      <Searchbar
        placeholder="Search items"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />

      <Subheading style={styles.subheading}>Categories</Subheading>

      <View style={styles.categoryButtonView}>
        <Chip style={styles.categoryButtonStyle} icon="sofa" onPress={() => {
              if (category === "Furniture")
                category = "";
              else
                category = "Furniture";
                navigation.navigate("BrowseByCategory", {
                  category: category
                })
          }}>Furniture</Chip>
        <Chip style={styles.categoryButtonStyle} icon="book" onPress={() => {
              if (category === "Book")
                category = "";
              else
              category = "Book";
              navigation.navigate("BrowseByCategory", {
                category: category
              })
          }} >Books</Chip>
        <Chip style={styles.categoryButtonStyle} icon="tie"  onPress={() => {
              if (category === "Clothing")
                category = "";
              else
                category = "Clothing";
                navigation.navigate("BrowseByCategory", {
                  category: category
                })
          }}>Clothing</Chip>
        <Chip style={styles.categoryButtonStyle} icon="laptop" onPress={() => {
              if (category === "Electronic")
                category = "";
              else
                category = "Electronic";
                navigation.navigate("BrowseByCategory", {
                  category: category
                })
          }}>Electronics </Chip>
        <Chip style={styles.categoryButtonStyle} icon="soccer" onPress={() => {
            if (category === "Sport")
              category = "";
            else
              category = "Sport";
              navigation.navigate("BrowseByCategory", {
                category: category
              })
        }}>Sports Gear</Chip>
      </View>


      <Subheading style={styles.subheading}>Recommended</Subheading>
      
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

export default BrowseScreen;

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
    paddingTop: 5,
    fontWeight: "600",
    color: "#A32638"
  },
  subheading: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10
  },
  categoryButtonView: {
    flexDirection: 'row',
    display: "flex",
    flexWrap: "wrap"
  },
  categoryButtonStyle: {
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#ebebeb',
    paddingLeft: 13, 
    paddingRight: 13, 
    paddingTop: 3,
    paddingBottom: 3,
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
  searchBar: {
    shadowOpacity: 0,
    borderWidth: 1,
    borderRadius: 35,
    borderColor: "#A32638",
    marginTop: 7,
    marginBottom: 10
  },
});
