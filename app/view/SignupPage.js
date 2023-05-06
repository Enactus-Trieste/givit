import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

function SignupPage(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.jpeg")}
        resizeMode="contain"
        style={styles.background}
        imageStyle={styles.background_imageStyle}
      >
        <Text style={styles.title}>Crea un account</Text>
        <View style={styles.container_icon}>
          <Image
            source={require("../assets/images/camera.png")}
            resizeMode="contain"
            style={styles.profile_icon}
          ></Image>
        </View>
        <View style={styles.name_labelRow}>
          <Text style={styles.name_label}>Come ti chiami?</Text>
          <View style={styles.input_name_container}>
            <TextInput
              placeholder="Nome"
              placeholderTextColor="rgba(0,0,0,1)"
              style={styles.input_name_placeholder}
            ></TextInput>
          </View>
        </View>
        <View style={styles.input_email_container}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(0,0,0,1)"
            style={styles.input_email_placeholder}
          ></TextInput>
        </View>
        <View style={styles.input_password_container}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(0,0,0,1)"
            style={styles.input_password_placeholder}
          ></TextInput>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("SignupPage")}
          style={styles.button_signup}
        >
          <Text style={styles.button_signup_text}>Crea</Text>
        </TouchableOpacity>
        <View style={styles.container_social}>
          <Text style={styles.container_social_label}>Accedi con:</Text>
          <View style={styles.container_social_googleStackRow}>
            <View style={styles.container_social_googleStack}>
              <View style={styles.container_social_google}></View>
              <Image
                source={require("../assets/images/google.png")}
                resizeMode="contain"
                style={styles.google_icon}
              ></Image>
            </View>
            <View style={styles.container_social_appleStack}>
              <View style={styles.container_social_apple}></View>
              <Image
                source={require("../assets/images/apple.png")}
                resizeMode="contain"
                style={styles.apple_icon}
              ></Image>
            </View>
            <View style={styles.container_social_facebook}>
              <Image
                source={require("../assets/images/facebook.png")}
                resizeMode="contain"
                style={styles.facebook_icon}
              ></Image>
            </View>
          </View>
        </View>
        <View style={styles.label_loginStack}>
          <Text style={styles.label_login}>Hai già un account?</Text>
          <View style={styles.button_login}>
            <Text style={styles.button_login_text}>Log in</Text>
          </View>
        </View>
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
    marginLeft: -422
  },
  background_imageStyle: {},
  title: {
    width: '100%',
    fontFamily: "PTSans-Bold",
    color: "#121212",
    fontSize: 32,
    marginTop: '25%',
    textAlign: 'center',
  },
  container_icon: {
    width: 52,
    height: 52,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 50,
    marginTop: '5%',
    marginLeft: 583
  },
  profile_icon: {
    width: '100%',
    width: 23,
    height: 20,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  name_label: {
    fontFamily: "Inter-Medium",
    color: "rgba(255,255,255,1)",
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  input_name_container: {
    width: '9%',
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 23,
    marginLeft: 11,
  },
  input_name_placeholder: {
    width: '100%',
    fontFamily: "Inter-Medium",
    color: "#121212",
    width: '100%',
    height: 17,
    textAlign: "center",
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 14,
  },
  name_labelRow: {
    width: '100%',
    height: 31,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 507,
    marginRight: 502
  },
  input_email_container: {
    width: 211,
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 50,
    marginTop: '2%',
    marginLeft: 507
  },
  input_email_placeholder: {
    width: '100%',
    fontFamily: "Inter-Medium",
    color: "#121212",
    width: 63,
    height: 17,
    textAlign: "center",
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 14,
  },
  input_password_container: {
    width: 211,
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 50,
    marginTop: '2%',
    marginLeft: 507,
  },
  input_password_placeholder: {
    width: '100%',
    fontFamily: "Inter-Medium",
    color: "#121212",
    width: 63,
    height: 17,
    textAlign: "center",
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 14,
  },
  button_signup: {
    width: 82,
    height: 34,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 29,
    marginTop: 23,
    marginLeft: 571
  },
  button_signup_text: {
    width: '100%',
    fontFamily: "Inter-Medium",
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    marginTop: 'auto',
    marginBottom: 'auto',
    textAlign: 'center',
    fontSize: 14,
  },
  container_social: {
    width: 125,
    height: 75,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 5
    },
    elevation: 90,
    shadowOpacity: 0.25,
    shadowRadius: 30,
    marginTop: '5%',
    marginLeft: 547
  },
  container_social_label: {
    fontFamily: "Inter-Medium",
    color: "#121212",
    marginTop: 12,
    marginLeft: 28
  },
  container_social_google: {
    top: 0,
    left: 0,
    width: 27,
    height: 27,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  google_icon: {
    top: 0,
    left: 2,
    width: 27,
    height: 27,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)"
  },
  container_social_googleStack: {
    width: 29,
    height: 27,
    marginTop: 1
  },
  container_social_apple: {
    top: 1,
    left: 0,
    width: 27,
    height: 27,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  apple_icon: {
    top: 0,
    left: 2,
    width: 27,
    height: 27,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  container_social_appleStack: {
    width: 29,
    height: 28,
    marginLeft: 5
  },
  container_social_facebook: {
    width: 27,
    height: 27,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 9,
    marginTop: 1
  },
  facebook_icon: {
    width: 24,
    height: 24,
    marginTop: 2,
    marginLeft: 1
  },
  container_social_googleStackRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 13,
    marginRight: 13
  },
  label_login: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "Inter-Medium",
    color: "#121212"
  },
  button_login: {
    top: 0,
    left: 115,
    width: 48,
    height: 17,
    position: "absolute"
  },
  button_login_text: {
    fontFamily: "Inter-Bold",
    color: "#121212",
    marginLeft: 2,
    fontSize: 14,
  },
  label_loginStack: {
    width: 163,
    height: 17,
    marginTop: 34,
    marginLeft: 530
  }
});

export default SignupPage;
