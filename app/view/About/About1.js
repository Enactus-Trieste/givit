import { ImageBackground, Text, View, Image, Pressable } from 'react-native';

import about1Styles from '../../styles/about/about1Styles';

import background from '../../assets/images/backgroundHomepage.jpeg';
import logo from '../../assets/images/logo.jpeg';
import arrow from '../../assets/images/arrow.png';

export default function About1() {

  return (
    <View style={about1Styles.container}>
        <ImageBackground source={background} style={about1Styles.background} resizeMode="cover">

          <View style={about1Styles.card}>
            <Text style={about1Styles.card_title}>Givit</Text>
            <Image style={about1Styles.card_logo} source={logo}/>
            <Text style={about1Styles.card_description}>Con Givit puoi noleggiare e mettere a noleggio qualsiasi oggetto, quando e come vuoi.</Text>
          </View>

          <Pressable style={about1Styles.button}>
            <Image style={about1Styles.button_image} source={arrow}/>
          </Pressable>

        </ImageBackground>
    </View>
  );
}

