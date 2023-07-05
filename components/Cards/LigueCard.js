import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {Image} from "react-native";
import {LEAGUES} from "../../data/Api";
import LEAGUE from "../../data/constants";


const LigueCard = ({text, onPress}) => {

    let link = LEAGUES.IMG + "/";

    switch ({text}.text){

        case "Ligue 1":
            link += LEAGUE.FRANCE
            break;

        case "Liga":
            link += LEAGUE.SPAIN
            break;

        case "BundesLiga":
            link += LEAGUE.GERMANY
            break;

        case "Premier League":
            link += LEAGUE.ENGLAND
            break;

        case "Serie A":
            link += LEAGUE.ITALY
            break;
        default:
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