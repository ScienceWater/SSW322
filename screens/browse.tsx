import * as React from 'react';
import { Dimensions, StyleProp, StyleSheet, TextInput, View, ViewProps, ViewStyle } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Avatar, BottomNavigation, Button, Card, Headline, Paragraph, Searchbar, Subheading, Text, Title } from 'react-native-paper';
import { getProducts } from '../services/firebase';
import MyButton from '../components/myButton';
import { $DeepPartial } from '@callstack/react-theme-provider';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import addProductScreen from "./addProduct";
import { getMultiFactorResolver } from 'firebase/auth';

type ScreenProps = {
  navigation: any
  route: any
}

let items: Object[] = [];

const BrowseScreen = ({ navigation, route }: ScreenProps) => {

  const updateItems = () => {
    items.forEach(item => console.log(item));
  }

  const search = async (category: string, item_name: string) => {
    items = await getProducts(category, item_name);
    updateItems();
  }

  // Searchbar
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => {
    setSearchQuery(query);
    search(category, searchQuery);
  }
  
  let category = '';

  search(category, searchQuery);

  return (
    <>
    <View style={styles.container}>
    <Headline style={styles.headline}>Exchange4Students</Headline>

      <Searchbar
        placeholder="Search items"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <Subheading style={styles.subheading}>Categories</Subheading>

      <View style={styles.categoryButtonView}>
        <Button
          icon="bed-empty"
          onPress={() => console.log('Go to Furniture page')

        }
          mode="contained"
          compact={true}
          style={styles.categoryButtonStyle}
          contentStyle={styles.categoryButtonContentStyle}
          labelStyle={styles.categoryButtonLabelStyle}>
          Furniture
        </Button>
        
        <Button
          icon="book"
          onPress={() => console.log('Go to Books page')}
          mode="contained"
          compact={true}
          style={styles.categoryButtonStyle}
          contentStyle={styles.categoryButtonContentStyle}
          labelStyle={styles.categoryButtonLabelStyle}>
          Books
        </Button>
    
    {/* <Text>Hi {route.params.firstName}</Text>
    <MyButton text="AddItem" onPressFn={() => navigation.navigate("addProduct", {email: route.params.firstName})}/> */}

        <Button
          icon="hanger"
          onPress={() => console.log('Go to Clothing page')}
          mode="contained"
          compact={true}
          style={styles.categoryButtonStyle}
          contentStyle={styles.categoryButtonContentStyle}
          labelStyle={styles.categoryButtonLabelStyle}>
          Clothing
        </Button>

        <Button
          icon="lightbulb"
          onPress={() => console.log('Go to Electronics page')}
          mode="contained"
          compact={true}
          style={styles.categoryButtonStyle}
          contentStyle={styles.categoryButtonContentStyle}
          labelStyle={styles.categoryButtonLabelStyle}>
          Electronics
        </Button>
      </View>

      <Subheading style={styles.subheading}>Recommended</Subheading>

      <View style={styles.cardView}>
        <Card style={styles.cardStyle}>
          <Card.Cover style={styles.cardCoverStyle} source={{ uri: 'https://m.media-amazon.com/images/M/MV5BMjc2NjYyMzgtMmExMi00YzllLTgxNjgtNjA4MmUzMWZlNDZkXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg' }} />
          <Card.Content>
            <Title>Item name</Title>
            <Paragraph>Price</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </View>
    </>
  );
};

export default BrowseScreen;


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    padding: 5,
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
  },
  subheading: {
    fontSize: 20,
    marginTop: 5,
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

  },
  cardStyle: {
    alignSelf: 'center',
    width: 150,
  },
  cardCoverStyle: {
    padding: 5,
  },
});
