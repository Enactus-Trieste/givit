import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

const SignUpPage = ({navigation}) => {
    return (
        <LinearGradient
            colors={['#0CE6AC', '#00D5E2']}
            style={styles.background}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
        >
            <SafeAreaView style={{flex: 1, width: Dimensions.get('screen').width * 0.7}}>
                <View style={styles.form}>
                    <Text style={styles.title}>Crea un account</Text>
                    <View style={styles.image_picker}>
                        <TouchableOpacity
                            style={styles.image_picker_button}
                        >
                            <Image
                                source={require("../assets/images/camera.png")}
                                resizeMode="contain"
                                style={styles.image_picker_button_image}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.name_picker}>
                        <Text style={styles.name_picker_label}>Come ti chiami?</Text>
                        <TextInput
                            placeholder='Nome'
                            placeholderTextColor='black'
                            style={styles.name_picker_input}
                        ></TextInput>
                    </View>
                    <View style={styles.email_picker}>
                        <TextInput
                            placeholder='Email'
                            placeholderTextColor='black'
                            style={styles.email_picker_input}
                        ></TextInput>
                    </View>
                    <View style={styles.password_picker}>
                        <TextInput
                            placeholder='Password'
                            placeholderTextColor='black'
                            style={styles.password_picker_input}
                        ></TextInput>
                    </View>
                    <View style={styles.submit}>
                        <TouchableOpacity
                            style={styles.submit_button}
                        >
                            <Text style={styles.submit_button_text}>Crea</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.form_social}>
                    <Text style={styles.form_social_label}>Accedi con</Text>
                    <View style={styles.form_social_list}>
                        <TouchableOpacity
                            style={styles.form_social_list_button}
                        >
                            <Image
                                source={require("../assets/images/google.png")}
                                resizeMode="contain"
                                style={styles.form_social_list_button_image}
                            ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.form_social_list_button}
                        >
                            <Image
                                source={require("../assets/images/apple.png")}
                                resizeMode="contain"
                                style={styles.form_social_list_button_image}
                            ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.form_social_list_button}
                        >
                            <Image
                                source={require("../assets/images/facebook.png")}
                                resizeMode="contain"
                                style={styles.form_social_list_button_image}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.login}>
                    <Text style={styles.login_text}>Hai già un account?</Text>
                    <TouchableOpacity
                        style={styles.login_link_button}
                    >
                        <Text style={styles.login_link_button_label}>Log in</Text>
                    </TouchableOpacity>
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
    title: {
        flex: 1,
        fontFamily: 'PTSans-Bold',
        fontSize: 36,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    form: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '15%',
    },
    image_picker: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image_picker_button: {
        width: 52,
        height: 52,
        borderRadius: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name_picker: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name_picker_label: {
        flex: 1,
        fontFamily: 'Inter-Bold',
        fontSize: 14,
        lineHeight: 16.94,
        color: 'white',
    },
    name_picker_input: {
        flex: 1,
        height: 35,
        backgroundColor: 'white',
        borderRadius: 22,
        textAlign: 'center',
        fontFamily: 'Inter-Medium',
    },
    email_picker: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    email_picker_input: {
        flex: 1,
        height: 35,
        backgroundColor: 'white',
        borderRadius: 22,
        textAlign: 'center',
        fontFamily: 'Inter-Medium',
    },
    password_picker: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    password_picker_input: {
        flex: 1,
        height: 35,
        backgroundColor: 'white',
        borderRadius: 22,
        textAlign: 'center',
        fontFamily: 'Inter-Medium',
    },
    submit: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submit_button: {
        width: 97,
        height: 34,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 22,
    },
    submit_button_text: {
        fontFamily: 'Inter-Medium',
        color: 'white',
        fontSize: 14,
    },
    form_social: {
        height: 85,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 22,
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '15%',
    },
    form_social_label: {
        flex: 1,
        fontSize: 15,
        lineHeight: 18.15,
        marginTop: '5%',
        fontFamily: 'Inter-Medium',
    },
    form_social_list: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%',
    },
    form_social_list_button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '15%',
        marginBottom: 'auto',
    },
    login_text: {
        flex: 2,
        textAlign: 'right',
        fontSize: 15,
        lineHeight: 18.15,
        fontFamily: 'Inter-Medium'
    },
    login_link_button: {
        flex: 1,
    },
    login_link_button_label: {
        fontFamily: 'Inter-Bold',
        fontSize: 15,
        lineHeight: 18.15,
        textAlign: 'left',
        marginLeft: '5%',
    }
});

export default SignUpPage;
