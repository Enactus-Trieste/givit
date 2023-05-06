import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";

function About3(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.jpeg")}
        resizeMode="contain"
        style={styles.background}
        imageStyle={styles.background_imageStyle}
      >
        <View style={styles.card}>
          <Text style={styles.card_title}>Noleggia</Text>
          <View style={styles.card_fSection_iconRow}>
            <Image
              source={require("../../assets/images/business.png")}
              resizeMode="contain"
              style={styles.card_fSection_icon}
            ></Image>
            <Text style={styles.card_fSection_text}>
              Scegli una categoria,{"\n"}dicci qualche info... et{"\n"}voilà! Il
              tuo oggetto è{"\n"}pronto per essere{"\n"}noleggiato.
            </Text>
          </View>
          <View style={styles.card_sSection_iconRow}>
            <Image
              source={require("../../assets/images/chat.png")}
              resizeMode="contain"
              style={styles.card_sSection_icon}
            ></Image>
            <Text style={styles.card_sSection_text}>
              Chiedi informazioni e{"\n"}accordati direttamente{"\n"}col
              proprietario, con la{"\n"}chat integrata.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("SignupPage")}
          style={styles.button}
        >
          <Text style={styles.button_text}>Cominciamo</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width: 1220,
    height: 1099,
    marginTop: -176,
    marginLeft: -424
  },
  background_imageStyle: {},
  card: {
    width: 281,
    height: 464,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 90,
    shadowOpacity: 0.25,
    shadowRadius: 30,
    marginTop: 298,
    marginLeft: 471
  },
  card_title: {
    width: '100%',
    fontFamily: "PTSans-Bold",
    color: "#121212",
    fontSize: 32,
    marginTop: 74,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  card_fSection_icon: {
    width: '40%',
    width: 33,
    height: 29,
    marginTop: 14,
    marginRight: 'auto',
    marginLeft: '15%',
  },
  card_fSection_text: {
    width: '50%',
    fontFamily: "Inter-Medium",
    color: "#121212",
    textAlign: "right",
    lineHeight: 16.94,
    marginLeft: 'auto',
    marginRight: '10%',
    fontSize: 14,
  },
  card_fSection_iconRow: {
    width: '100%',
    height: 83,
    flexDirection: "row",
    marginTop: '25%',
  },
  card_sSection_icon: {
    width: '40%',
    width: 33,
    height: 33,
    marginTop: 14,
    marginRight: 'auto',
    marginLeft: '15%',
  },
  card_sSection_text: {
    width: '50%',
    fontFamily: "Inter-Medium",
    color: "#121212",
    textAlign: "right",
    lineHeight: 16.94,
    marginLeft: 'auto',
    marginRight: '10%',
    fontSize: 14,
  },
  card_sSection_iconRow: {
    width: '100%',
    height: 66,
    flexDirection: "row",
    marginTop: '15%',
  },
  button: {
    width: 111,
    height: 35,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 29,
    marginTop: 77,
    marginLeft: 556
  },
  button_text: {
    fontFamily: "Inter-Medium",
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});

export default About3;