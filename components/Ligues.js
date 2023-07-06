import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {ImageBackground, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import LigueCard from './Cards/LigueCard';
import LigueDetails from "./LigueDetails";
import imagefond from '../assets/fond/site.png'

const Stack = createStackNavigator();

const Ligues = () => {
    return (
        <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Ligues" component={LiguesScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="LigueDetails" component={LigueDetails} options={{ headerShown: false }} />
                </Stack.Navigator>
        </NavigationContainer>
    );
};

const LiguesScreen = ({ navigation }) => {
    const handleLigueCardPress = (text) => {
        navigation.navigate('LigueDetails', {text});
    };

    return (
        <ImageBackground
            source= {imagefond}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
        <SafeAreaView style={styles.container}>

            <View style={styles.view}>
                <LigueCard text="Ligue 1" onPress={() => handleLigueCardPress("Ligue 1")} />
                <LigueCard text="BundesLiga" onPress={() => handleLigueCardPress("BundesLiga")} />
            </View>

            <View style={styles.view}>
                <LigueCard text="Serie A" onPress={() => handleLigueCardPress("Serie A")} />
                <LigueCard text="Liga" onPress={() => handleLigueCardPress("Liga")} />
            </View>

            <View style={styles.view}>
                <LigueCard text="Premier League" onPress={() => handleLigueCardPress("Premier League")} />
            </View>

        </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop : "10%",
        backgroundColor: 'transparent',

    },

    view: {
        height :"31%",
        width :"100%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: "5%",

    },
    backgroundImage: {
        flex: 1,
    },
});
export default Ligues;
