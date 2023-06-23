import React from 'react';
import { View, Image } from 'react-native';

const Clubs = () => {
    const imageURL = 'https://footstatsapi.sangmin.fr/api/images/leagues/Ligue%201';

    return (
        <View>
            <Image source={{ uri: imageURL }} style={{ width: 200, height: 200 }} />
        </View>
    );
};

export default Clubs;
