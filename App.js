import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ligues from './components/Ligues';
import Clubs from './components/Clubs';
import CustomTabBar from "./components/CustomTabBar";

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBar={CustomTabBar}
                screenOptions={{
                    headerShown: false, // Masque la barre de navigation en haut
                }}
            >
                <Tab.Screen name="Ligues" component={Ligues} />
                <Tab.Screen name="Clubs" component={Clubs} />

            </Tab.Navigator>
        </NavigationContainer>
    );
};


export default App;
