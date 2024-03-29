import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#fff',
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
        color: '#34383D',
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
        color: 'red',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10
    },
    inputContainer: {
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 10,
        height: 45,
        flexDirection: "row",
        backgroundColor: "#00000009",
    },
    inputField: {
        paddingLeft: 12.5,
        color: "#34383D",
        fontSize: 16,
        fontWeight: "500",
        width: "100%",
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
            color: '#34383D',
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
            color: '#34383D',
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