import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';


const About2 = ({navigation}) => {
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
                        <Text style={styles.section1_text}>Scopri</Text>
                        <View style={styles.section1_row}>
                            <Image
                                source={require("../../assets/images/home.png")}
                                resizeMode="contain"
                                style={styles.section1_row_image}
                            ></Image>
                            <Text style={styles.section1_row_text}>
                                Lasciati ispirare dai{"\n"}suggerimenti pensati{"\n"}per te,
                                direttamente{"\n"}nella Home.
                            </Text>
                        </View>
                        <View style={styles.section1_row}>
                            <Image
                                source={require("../../assets/images/search.png")}
                                resizeMode="contain"
                                style={styles.section1_row_image}
                            ></Image>
                            <Text style={styles.section1_row_text}>
                                Cerca ciò che ti serve:{"\n"}filtra in base {"\n"}alla posizione,
                                alla{"\n"}categoria, e altro{"\n"}ancora.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.section2}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("About3")}
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
    section1: {
        flex: 2,
        width: (Dimensions.get('screen').width) * 0.7,
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
    section1_text: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'PTSans-Bold',
        fontSize: 32,
        lineHeight: 41.44,
        marginTop: '20%',
    },
    section1_row: {
        flex: 1,
        flexDirection: 'row',
    },
    section1_row_image: {
        flex: 1,
        marginLeft: '10%',
    },
    section1_row_text: {
        flex: 2,
        textAlign: 'right',
        marginRight: '10%',
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

export default About2;

/* Non perfetto */