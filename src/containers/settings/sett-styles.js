import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#09061C',
        height: '100%',
    },

    // Forms
    buttonContainer: {
        marginHorizontal: 5,
        marginTop: 10,
        marginBottom: 20,
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
    deleteAccountButtonText: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 10
    },
    icons: {
        alignSelf: 'center'
    },
    sectionText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'left',
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 30
    },
    logoutButtonText: {
        alignSelf: 'center',
        color: '#5858FB',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10
    },
    formInput: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 12.5,
    },

    // Update Payment Explainer
        // Image
        img: {
            width: '100%',
            height: 200,
            resizeMode: 'center'
        },
        // Explainer
        title: {
            color: '#fff',
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
            marginTop: 10
        },
        listView: {
            marginHorizontal: 30,
            marginVertical: 50,
           
        },
        listInline: {
            flexDirection: 'row',
        },
        listText: {
            color: '#fff',
            fontSize: 18,
            fontWeight: '600',
            marginBottom: 20
        },
        continueButton: {
            backgroundColor: "#5858FB",
            marginHorizontal: 30,
            marginTop: 20,
            padding: 15,
            borderRadius: 10,
        },
        continueButtonText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: '700',
            textAlign: 'center'
        },
});

export default styles;