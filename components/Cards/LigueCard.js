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
            break;

        case "Liga":
            link = LEAGUES.IMG + "/" + LEAGUE.SPAIN
            console.log(link)
            break;

        case "BundesLiga":
            link = LEAGUES.IMG + "/" + LEAGUE.GERMANY
            console.log(link)
            break;

        case "Premier League":
            link = LEAGUES.IMG + "/" + LEAGUE.ENGLAND
            console.log(link)
            break;

        case "Serie A":
            link = LEAGUES.IMG + "/" + LEAGUE.ITALY
            console.log(link)
            break;
    }

    return (
        <TouchableOpacity onPress={onPress}>

            <Image
                source={{ uri: link }}
                style={{ width: 100, height: 100 }}
                resizeMode="cover"
            />
            <Text>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default LigueCard