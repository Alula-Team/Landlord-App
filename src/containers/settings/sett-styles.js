import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#09061C',
        height: '100%',
    },

    // Forms
    buttonContainer: {
        marginHorizontal: 30,
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
    logoutButton: {
        backgroundColor: "red",
        margin: 30,
        padding: 15,
        borderRadius: 10,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center'
    }
});

export default styles;