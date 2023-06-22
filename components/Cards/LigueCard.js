import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {Image} from "react-native";
import {LEAGUES} from "../../data/Api";
import LEAGUE from "../../data/constants";


const LigueCard = ({text, onPress}) => {

    let link = null

    switch ({text}.text){

        case "Ligue 1":
            link = LEAGUES.IMG + "/" + LEAGUE.FRANCE
            console.log(link)

    }

    return (
        <TouchableOpacity onPress={onPress}>

            <Image
                source={{uri: "https://footstatsapi.sangmin.fr/api/images/leagues/Ligue%201"}}
                resizeMode="cover"
            />
            <Text>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default LigueCard