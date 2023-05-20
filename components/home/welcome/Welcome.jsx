import React from 'react'
import {useState} from "react";
import {
    View, Text, TextInput, TouchableOpacity, Image, FlatList
} from 'react-native'
import {useRouter} from "expo-router";
import {icons, SIZES} from "../../../constants";

import styles from './welcome.style'

const Welcome = () => {

    const router = useRouter();

  return (
    <View>
        <View style={styles.container} >
          <Text style={styles.userName}>Hello Cristiano</Text>
          <Text style={styles.welcomeMessage}>Find all the data you want</Text>
        </View >
        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper} >
                <TextInput
                    style={styles.searchInput}
                    value=""
                    onChange ={() => {} }
                    placeholder="what do you want"
                />
            </View>
        </View>
    </View>
  )
}

export default Welcome