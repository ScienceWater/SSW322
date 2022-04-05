import * as React from "react";
import { View } from "react-native";
import { BottomNavigation, Headline, Text } from "react-native-paper";

type ScreenProps = {
  navigation: any
  route: any
}

const PostingsScreen = ({ navigation, route }: ScreenProps) => {

  return (
    <>
    <View>
      <Headline>My Items for Sale</Headline>
    </View>
    </>
  );
}

export default PostingsScreen;