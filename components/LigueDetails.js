import {Text, View} from "react-native";



const LigueDetails = ({ route }) => {
    const { text } = route.params;

    //Appel a API

    return (
        <View>
            <Text>{text}</Text>
        </View>
    );
};

export default LigueDetails;