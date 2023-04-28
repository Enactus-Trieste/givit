import { ImageBackground, Text, View, Pressable } from 'react-native';

import homepageStyle from '../styles/homepageStyles';

import background from '../assets/images/backgroundHomepage.jpeg';

export default function Homepage() {

  return (
    <View style={homepageStyle.container}>
        <ImageBackground source={background} style={homepageStyle.background} resizeMode="cover">

            <View style={homepageStyle.fSection}>
              <Text style={homepageStyle.fSection_text}>Benvenuto!</Text>
            </View>

            <View style={homepageStyle.sSection}>
              <Text style={homepageStyle.sSection_text}>Hai già sentito parlare di noi?</Text>
              <Pressable style={homepageStyle.sSection_button}>
                <Text style={homepageStyle.sSection_button_text}>Conosciamoci!</Text>
              </Pressable>
            </View>

            <View style={homepageStyle.tSection}>
              <Pressable style={homepageStyle.tSection_button}>
                <Text style={homepageStyle.tSection_button_text}>So già tutto</Text>
              </Pressable>
            </View>

        </ImageBackground>
    </View>
  );
}

