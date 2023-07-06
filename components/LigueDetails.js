import React, { useEffect, useState } from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { LEAGUES } from "../data/Api";
import { COLORS } from "../data/COLORS";
import imagefond from "../assets/fond/site.png";

const LigueDetails = ({ route }) => {
    const { text } = route.params;
    const [clubNames, setClubNames] = useState([]);

    let apiUrl = LEAGUES.DATA;

    switch (text) {
        case "Ligue 1":
            apiUrl += '/2';
            break;
        case "Liga":
            apiUrl += '/4';
            break;
        case "BundesLiga":
            apiUrl += '/3';
            break;
        case "Premier League":
            apiUrl += '/1';
            break;
        case "Serie A":
            apiUrl += '/5';
            break;
        default:
            break;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const jsonData = await response.json();
                const clubNames = jsonData.clubs.map((club) => club.name);
                setClubNames(clubNames);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <ImageBackground
            source= {imagefond}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <ScrollView>
                <View style={styles.containerLigueDetails}>
                    <Text style={styles.text}>{text}</Text>
                    <View style={styles.pastilleContainer}>
                        {clubNames.map((name) => (
                            <TouchableOpacity key={name} style={styles.pastille}>
                                <Text key={name} style={styles.pastilleText}>{name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    containerLigueDetails: {
        width: "100%",
        height: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: "5%",
        paddingTop: "10%"
    },
    pastilleContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: "15%",

    },
    pastille: {
        width: "30%",
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: COLORS.tiffanyBlue,
        borderRadius: 15,
        padding: "2%",
        backgroundColor: COLORS.gray,
        height: "10%",
        alignContent: "center",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',

    },
    pastilleText: {
        color: COLORS.powderBlue,
    },
    text: {
        color: COLORS.powderBlue,
        fontSize: 40,
        marginTop: 10,
    },
    backgroundImage: {
        flex: 1,
    },
});

export default LigueDetails;
