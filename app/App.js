import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HomePage from './view/HomePage';
import About1 from './view/About/About1';
import About2 from './view/About/About2';
import About3 from './view/About/About3';
import SignUpPage from "./view/SignUpPage";

const Stack = createNativeStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        "PTSans-Regular": require("./assets/fonts/PTSans-Regular.ttf"),
        "PTSans-Bold": require("./assets/fonts/PTSans-Bold.ttf"),
        "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
        "Cookie": require("./assets/fonts/Cookie-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="HomePage">
                <Stack.Screen name={"HomePage"} component={HomePage}/>
                <Stack.Screen name={"SignUpPage"} component={SignUpPage}/>
                <Stack.Screen name={"About1"} component={About1}/>
                <Stack.Screen name={"About2"} component={About2}/>
                <Stack.Screen name={"About3"} component={About3}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

}