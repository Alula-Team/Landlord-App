import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#ffffff'
    },
    image: {
    },
    headerText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700',
        color: '#fff',
        marginTop: 10
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        color: '#34383D',
        marginTop: 60,
        left: 20
    },
    subTitle: {
        fontSize: 22,
        fontWeight: '500',
        color: '#34383D80',
        left: 20
    },
    form: {
        marginTop: 40
    },
    authFieldContainer: {
        marginBottom: 25
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 10,
        height: 45,
        flexDirection: "row",
        backgroundColor: "#00000012",
    },
    inputField: {
        color: "#34383D",
        fontSize: 16,
        fontWeight: "500",
        width: "85%",
    },
    inputIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        paddingVertical: 17.5,
        paddingHorizontal: 5,
        color: '#ffffff70'
    },
    errorMsg: {
        marginLeft: 30, 
        marginTop: 10
    },
    errorText: {
        color: '#f0ad4e'
    },
    password: {
        flex: 1,
        backgroundColor: '#323f4b',
        color: '#fff',
        fontSize: 16,
    },
    submitButton: {
        marginVertical: 50,
        width: 200,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#7556FF',
        alignSelf: 'center'
    },
    submitText: {
        fontSize: 18,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center'
    },
    termsText: {
        marginHorizontal: 20,
        marginBottom: 20,
        textAlign: 'center',
        color: 'white'
    },
    terms: {
        textDecorationLine: 'underline',
        fontWeight: '700'
    },
    otherAuthButton: {
        alignItems: 'center',
        marginTop: 20
    },
    otherAuthText: {
        fontSize: 16,
        color: '#34383D'
    },
    forgotPasswordButton: {
        alignItems: 'flex-end',
        marginHorizontal: 25,
    },
    forgotPasswordText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#34383D90'
    },
    pressables: {
        marginTop: 60
    },
    credDisplay: {
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 15,
        backgroundColor: '#323f4b',
    },
    boxTitleNotifications: {
        paddingVertical: 26,
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 20,
        color: 'white',
    },
    buttonContainer: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonText: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10
    },
    continueButton: {
        backgroundColor: "#5858FB",
        marginHorizontal: 30,
        marginVertical: 30,
        padding: 15,
        borderRadius: 10,
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center'
    },

    // Loading Screen
    splashContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',
        height: '100%'
    },
});

export default styles;