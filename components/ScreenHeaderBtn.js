import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity, Image } from "react-native";

const ScreenHeaderBtn = ({text, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn