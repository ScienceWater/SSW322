import * as React from 'react';
import { Alert, Button, Dimensions, Platform, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { Appbar, DarkTheme, DefaultTheme, Provider, Surface, TextInput, ThemeProvider, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import { getFirstName } from "../services/firebase"

type ScreenProps = {
  navigation: any,
  route: any,
}

export default function Account() {
    const navigation = useNavigation();

    const [name, setName] = React.useState("");

    React.useEffect(() => {
        const getItems = async () => {
            let result = "temp";
            result = await getFirstName();
            setName(result);
        }
        getItems();
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello, {name} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 10, 
        paddingRight: 10,
        backgroundColor: "white",
        height: Dimensions.get('screen').height * 1.1,
    },
    title: {
        marginBottom: 15, 
        textAlign: "left", 
        fontSize: 18,
        fontWeight: "700",
    }
});
