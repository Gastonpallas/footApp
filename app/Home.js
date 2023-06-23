import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import Ligues from "../components/Ligues";
import Clubs from "../components/Clubs";

const Stack = createStackNavigator();

const Home = () => {
    const [showLigue, setShowLigue] = useState(true);

    const handleLeftButtonPress = () => {
        setShowLigue(true);
    };

    const handleRightButtonPress = () => {
        setShowLigue(false);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Ligues"
                    component={Ligues}
                    options={{
                        headerTitle: "",
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <ScreenHeaderBtn
                                text={"Ligues"}
                                onPress={() => handleLeftButtonPress()}
                            />
                        ),
                        headerRight: () => (
                            <ScreenHeaderBtn
                                text={"Clubs"}
                                onPress={() => handleRightButtonPress()}
                            />
                        ),
                    }}
                />
                <Stack.Screen name="Clubs" component={Clubs} />
            </Stack.Navigator>
        </SafeAreaView>
    );
};

export default Home;
