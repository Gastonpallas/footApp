import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ligues from './components/Ligues';
import {ImageBackground, ScrollView, StatusBar, StyleSheet} from "react-native";

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <Ligues/>
    );
};


export default App;
