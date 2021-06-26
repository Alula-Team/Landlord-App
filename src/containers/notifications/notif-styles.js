import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#ffffff90',
        height: '100%',
    },

    // Notifications
    notificationContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#fff",
    },
    notificationTitle: {
        fontSize: 18,
        fontWeight: '500',
        padding: 20,
        color: '#34383D'
    },
    notificationText: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: '500',
        color: '#34383D90',
        marginBottom: 10
    },
});

export default styles;