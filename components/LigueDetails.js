import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import {LEAGUES} from "../data/Api";
import LEAGUE from "../data/constants";

const LigueDetails = ({ route }) => {
    const { text } = route.params;
    const [clubNames, setClubNames] = useState([]);

    let apiUrl = LEAGUES.DATA ;


    switch ({text}.text){

        case "Ligue 1":
            apiUrl += '/2'
            break;

        case "Liga":
            apiUrl += '/4'
            break;

        case "BundesLiga":
            apiUrl += '/3'
            break;

        case "Premier League":
            apiUrl += '/1'
            break;

        case "Serie A":
            apiUrl += '/5'
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
        <View>
            <Text>{text}</Text>
            {clubNames.map((name) => (
                <Text key={name}>{name}</Text>
            ))}
        </View>
    );
};

export default LigueDetails;
