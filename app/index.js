import {SafeAreaView} from 'react-native';
import {Stack, useRouter} from "expo-router";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import Ligues from "../components/Ligues";
import Clubs from "../components/Clubs";
import {useState} from "react";



const Home =() => {

    const router = useRouter();
    const [showLigue, setShowLigue] = useState(true);
    const handleLeftButtonPress = () => {
        console.log("droite");
        setShowLigue(true);
    };

    const handleRightButtonPress = () => {
        console.log("gauche");
        setShowLigue(false);
    };

    return(
        <SafeAreaView>
            <Stack.Screen
                options={
                    {
                        headerTitle:"",
                        headerShadowVisible : false,
                        headerLeft: () => <ScreenHeaderBtn text={'Ligues'} onPress={() => handleLeftButtonPress()} />,
                        headerRight: () => <ScreenHeaderBtn text={'Club'} onPress={() => handleRightButtonPress()} />

                    }}
            />
            {showLigue ? <Ligues /> : <Clubs />}
        </SafeAreaView>
    )
}

export default Home;