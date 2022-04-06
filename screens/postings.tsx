import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Card, Headline, Modal, Paragraph, Portal, Provider, Text, Title } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddProductScreen from "./addProduct";

type ScreenProps = {
  navigation: any
  route: any
}

const PostingsScreen = ({ navigation, route }: ScreenProps) => {

  return (
    <>
    <ScrollView style={styles.container}>
      <Headline style={styles.headline}>My Listings</Headline>

      <Button icon="plus-box-outline"
              mode="outlined"
              onPress={() => navigation.navigate('Startup')}
              style={styles.listButtonStyle}
              contentStyle={styles.listButtonContentStyle}
              labelStyle={styles.listButtonLabelStyle}>
        LIST NEW ITEM
      </Button>

      <Card style={styles.cardStyle}>
        <Card.Cover source={{ uri: 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg' }} />
        <Card.Content style={styles.cardContentStyle}>
          <Title>Item name</Title>
          <Paragraph>Price</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.cardStyle}>
        <Card.Cover source={{ uri: 'https://cb2.scene7.com/is/image/CB2/DondraQueenBedSHS21_1x1' }} />
        <Card.Content style={styles.cardContentStyle}>
          <Title>Item name</Title>
          <Paragraph>Price</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
    </>
  );
}

export default PostingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    padding: 5,
  },
  headline: {
    marginBottom: 5,
  },
  listButtonStyle: {
    backgroundColor: '#fff',
    borderColor: '#A32638',
    borderWidth: 1,
    paddingVertical: 10,
    marginBottom: 5,
  },
  listButtonContentStyle: {

  },
  listButtonLabelStyle: {
    color: '#A32638',
  },
  cardStyle: {
    marginBottom: 5,
  },
  cardContentStyle: {
    paddingTop: 5,
  },
});