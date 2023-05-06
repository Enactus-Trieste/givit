import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";

function Homepage(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.jpeg")}
        resizeMode="contain"
        style={styles.background}
        imageStyle={styles.background_imageStyle}
      >
        <Text style={styles.title}>Benvenuto!</Text>
        <Text style={styles.section_text}>Hai già sentito parlare di noi?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("About1")}
          style={styles.section_button}
        >
          <Text style={styles.section_button_text}>Conosciamoci!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("SignupPage")}
          style={styles.button}
        >
          <Text style={styles.button_text}>So già tutto</Text>
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
    marginTop: -177,
    marginLeft: -422
  },
  background_imageStyle: {},
  title: {
    width: '100%',
    textAlign: 'center',
    fontFamily: "PTSans-Bold",
    color: "#121212",
    fontSize: 55,
    marginTop: '28%',
  },
  section_text: {
    width: '100%',
    fontFamily: "Inter-Bold",
    color: "rgba(255,255,255,1)",
    marginTop: '13%',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 16.94,
  },
  section_button: {
    width: 154,
    height: 45,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 50,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 90,
    shadowOpacity: 0.25,
    shadowRadius: 30,
    marginTop: 25,
    marginLeft: 532
  },
  section_button_text: {
    width: '100%',
    fontFamily: "Inter-Bold",
    color: "rgba(0,178,157,1)",
    marginTop: 'auto',
    marginBottom: 'auto',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 16.94,
  },
  button: {
    width: 111,
    height: 34,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 29,
    marginTop: '13%',
    marginLeft: 554
  },
  button_text: {
    width: '100%',
    fontFamily: "Inter-Medium",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    lineHeight: 16.94,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  }
});

export default Homepage;
