import {SafeAreaView} from "react-native";
import LigueCard from "./Cards/LigueCard";

const Ligues = () => {

    return(
        <SafeAreaView className="flex-1 items-center bg-red">
            <LigueCard text={"Ligue 1"}/>
            <LigueCard text={"BundesLiga"}/>
            <LigueCard text={"Serie A"}/>
            <LigueCard text={"Liga"}/>
            <LigueCard text={"Premier League"}/>
        </SafeAreaView>
    )

}
export default Ligues