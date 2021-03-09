import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#09061C'
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
        color: '#f3f3f3',
        marginTop: 60,
        left: 20
    },
    subTitle: {
        fontSize: 22,
        fontWeight: '500',
        color: '#f3f3f3',
        left: 20
    },
    form: {
        marginTop: 40
    },
    nameInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#323f4b',
        color: '#fff',
        height: 55,
        marginHorizontal: 25,
        marginTop: 10,
        marginBottom: 25,
        borderRadius: 10
    },
    nameIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        paddingVertical: 17.5,
        paddingHorizontal: 5,
        color: '#ffffff70'
    },
    name: {
        flex: 1,
        backgroundColor: '#323f4b',
        color: '#fff',
        fontSize: 16,
    },
    emailInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#323f4b',
        height: 55,
        marginHorizontal: 25,
        marginBottom: 25,
        borderRadius: 10
    },
    emailIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        paddingVertical: 17.5,
        paddingHorizontal: 5,
        color: '#ffffff70'
    },
    email: {
        flex: 1,
        backgroundColor: '#323f4b',
        color: '#fff',
        fontSize: 16,
    },
    passwordInput: { 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#323f4b',
        height: 55,
        marginHorizontal: 25,
        borderRadius: 10
    },
    passwordIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        paddingVertical: 17.5,
        paddingLeft: 4,
        paddingRight: 1,
        color: '#ffffff70'
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
        color: 'white'
    },
    forgotPasswordButton: {
        alignItems: 'flex-end',
        marginHorizontal: 25,
        marginTop: 20
    },
    forgotPasswordText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#f3f3f3'
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
});

export default styles;