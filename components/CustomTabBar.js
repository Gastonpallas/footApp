import {Text, TouchableOpacity, View} from "react-native";
import React from "react";

const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={index}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: isFocused ? 'blue' : 'lightblue',
                            paddingVertical: 12,
                        }}
                        onPress={onPress}
                    >
                        <Text style={{ color: isFocused ? 'white' : 'black' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomTabBar;