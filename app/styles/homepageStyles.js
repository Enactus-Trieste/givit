import { StyleSheet } from "react-native";

export default homepageStyle = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    },
    fSection: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fSection_text: {
        fontSize: 53,
        fontFamily: 'PTSans-Bold',
    },
    sSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sSection_text: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Inter-Bold',
    },
    sSection_button: {
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 22,
        backgroundColor: '#FFFFFF',
        marginTop: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    sSection_button_text: {
        color: '#00B29D',
        fontSize: 20,
        fontFamily: 'Inter-Bold',
    },
    tSection: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tSection_button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 22,
        backgroundColor: '#000000',
        marginTop: 25,
    },
    tSection_button_text: {
        color: '#FFFFFF',
        fontFamily: 'Inter-Medium',
        fontSize: 16,
    },
});