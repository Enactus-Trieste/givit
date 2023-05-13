import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

const HomePage = ({navigation}) => {
    return (
        <LinearGradient
            colors={['#0CE6AC', '#00D5E2']}
            style={styles.background}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
        >
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.section1}>
                        <Text style={styles.section1_text}>Benvenuto!</Text>
                    </View>
                    <View style={styles.section2}>
                        <Text style={styles.section2_text}>Hai già sentito parlare di noi?</Text>
                        <TouchableOpacity
                            style={styles.section2_button}
                            onPress={() => navigation.navigate("About1")}
                        >
                            <Text style={styles.section2_button_text}>Conosciamoci!</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.section3}>
                        <TouchableOpacity
                            style={styles.section3_button}
                            onPress={() => navigation.navigate("SignUpPage")}
                        >
                            <Text style={styles.section3_button_text}>So già tutto</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    section2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    section3: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    section1_text: {
        textAlign: 'center',
        fontFamily: "PTSans-Bold",
        fontSize: 48,
        lineHeight: 62.16,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    section2_text: {
        textAlign: 'center',
        fontFamily: "Inter-Bold",
        color: "white",
        fontSize: 15,
        lineHeight: 16.94,
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    section2_button: {
        width: 165,
        height: 49,
        backgroundColor: "white",
        borderRadius: 50,
        shadowColor: "black",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 90,
        shadowOpacity: 0.25,
        shadowRadius: 30,
        marginTop: '5%',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    section2_button_text: {
        textAlign: 'center',
        fontFamily: "Inter-Bold",
        color: "#00B29D",
        fontSize: 15,
        lineHeight: 16.94,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    section3_button: {
        width: 129,
        height: 34,
        backgroundColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 50,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    section3_button_text: {
        fontFamily: "Inter-Medium",
        color: "white",
        fontSize: 14,
        lineHeight: 16.94,
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});

export default HomePage;