import * as React from 'react';
import { Dimensions, StyleProp, StyleSheet, TextInput, View, ViewProps, ViewStyle } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Avatar, BottomNavigation, Button, Card, Headline, Paragraph, Searchbar, Subheading, Text, Title } from 'react-native-paper';
import { getProducts } from '../services/firebase';
import MyButton from '../components/myButton';
import { $DeepPartial } from '@callstack/react-theme-provider';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import addProductScreen from "./addProduct";

type ScreenProps = {
    navigation: any
    route: any
  }
  
  const productScreen = ({ navigation, route }: ScreenProps) => {
    
  //   <Card style={styles.cardStyle}>
  //       <Card.Cover source={{ uri: 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg' }} />
  //       <Card.Content style={styles.cardContentStyle}>
  //         <Title>getItemName(itemID)</Title>
  //         <Paragraph>getPrice(itemID)</Paragraph>
  //       </Card.Content>
  //     </Card>
  // 
};

  export default productScreen;
