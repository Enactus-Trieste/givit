import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Homepage from './view/Homepage';
import About1 from './view/About/About1';

export default function App() {

  let [fontsLoaded] = useFonts ({
    "PTSans-Regular": require("./assets/fonts/PTSans-Regular.ttf"),
    "PTSans-Bold": require("./assets/fonts/PTSans-Bold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Cookie": require("./assets/fonts/Cookie-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Homepage />
  );

}