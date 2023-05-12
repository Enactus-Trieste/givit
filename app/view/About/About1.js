import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

function About1(props) {
  return (
    <LinearGradient
        colors={['#0CE6AC', '#00D5E2']}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.section1}>
              <Text style={styles.section1_text1}>Givit</Text>
              <Image
                source={require("../../assets/images/logo.jpeg")}
                resizeMode="contain"
                style={styles.section1_image}
              ></Image>
              <Text style={styles.section1_text2}>
                Con Givit puoi noleggiare e mettere{"\n"}a noleggio quaisiasi
                oggetto,{"\n"}quando e come vuoi.
              </Text>
          </View>
          <View style={styles.section2}>
            <TouchableOpacity
              style={styles.section2_button}
            >
              <Image
                source={require("../../assets/images/arrow.png")}
                resizeMode="contain"
                style={styles.section2_button_image}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section1: {
    flex: 2,
    width: (Dimensions.get('screen').width)*0.7,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 90,
    shadowOpacity: 0.25,
    shadowRadius: 30,
    borderRadius: 22,
    marginTop: '10%',
    marginBottom: '10%',
  },
  section2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section1_text1: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Cookie',
    fontSize: 96,
    lineHeight: 106.46,
    marginTop: '20%',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  section1_image: {
    flex: 1,
    width: 106,
    height: 106,
    marginTop: '10%',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  section1_text2: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    lineHeight: 16.94,
    marginTop: '20%',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  section2_button: {
    width: 75,
    height: 75,
    backgroundColor: 'white',
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 90,
    shadowOpacity: 0.25,
    shadowRadius: 30,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  section2_button_image: {
    width: 25,
    height: 30,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});

export default About1;
