import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LEAGUES } from "../../data/Api";
import LEAGUE from "../../data/constants";
import {COLORS} from "../../data/COLORS";

const LigueCard = ({ text, onPress }) => {
    let link = LEAGUES.IMG + "/";

    switch (text) {
        case "Ligue 1":
            link += LEAGUE.FRANCE;
            break;
        case "Liga":
            link += LEAGUE.SPAIN;
            break;
        case "BundesLiga":
            link += LEAGUE.GERMANY;
            break;
        case "Premier League":
            link += LEAGUE.ENGLAND;
            break;
        case "Serie A":
            link += LEAGUE.ITALY;
            break;
        default:
            break;
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image
                source={{ uri: link }}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.gray,
        padding: 10,
        width: "45%",
        height: "100%",
        borderWidth: 1,
        borderColor: COLORS.tiffanyBlue,
        borderRadius: 10,


    },
    image: {
        width: "80%",
        height: "63%",
    },
    text: {
        color: COLORS.tiffanyBlue,
        marginTop: 10,
    },
});
export default LigueCard;
