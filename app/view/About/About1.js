import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";

function About1(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.jpeg")}
        resizeMode="contain"
        style={styles.background}
        imageStyle={styles.background_imageStyle}
      >
        <View style={styles.card}>
          <Text style={styles.card_title}>Givit</Text>
          <Image
            source={require("../../assets/images/logo.jpeg")}
            resizeMode="contain"
            style={styles.card_icon}
          ></Image>
          <Text style={styles.card_text}>
            Con Givit puoi noleggiare e mettere{"\n"}a noleggio quaisiasi
            oggetto,{"\n"}quando e come vuoi.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("About2")}
          style={styles.button}
        >
          <Image
            source={require("../../assets/images/arrow.png")}
            resizeMode="contain"
            style={styles.button_icon}
          ></Image>
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
    fontFamily: "Cookie",
    color: "#121212",
    fontSize: 96,
    marginTop: 70,
    textAlign: 'center',
  },
  card_icon: {
    width: 110,
    height: 130,
    marginTop: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  card_text: {
    width: '100%',
    fontFamily: "Inter-Medium",
    color: "#121212",
    textAlign: "center",
    lineHeight: 16.94,
    fontSize: 14,
    marginTop: 33,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    width: 75,
    height: 75,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 50,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 90,
    shadowOpacity: 0.25,
    shadowRadius: 30,
    marginTop: 47,
    marginLeft: 574
  },
  button_icon: {
    width: 34,
    height: 40,
    marginTop: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});

export default About1;
