import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import LigueCard from './Cards/LigueCard';
import LigueDetails from "./LigueDetails";

const Stack = createStackNavigator();

const Ligues = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Ligues" component={LiguesScreen} />
                <Stack.Screen name="LigueDetails" component={LigueDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const LiguesScreen = ({ navigation }) => {
    const handleLigueCardPress = (text) => {
        navigation.navigate('LigueDetails', {text});
    };

    return (
        <SafeAreaView>
            <LigueCard text="Ligue 1" onPress={() => handleLigueCardPress("Ligue 1")} />
            <LigueCard text="BundesLiga" onPress={() => handleLigueCardPress("BundesLiga")} />
            <LigueCard text="Serie A" onPress={() => handleLigueCardPress("Serie A")} />
            <LigueCard text="Liga" onPress={() => handleLigueCardPress("Liga")} />
            <LigueCard text="Premier League" onPress={() => handleLigueCardPress("Premier League")} />
        </SafeAreaView>
    );
};

export default Ligues;
