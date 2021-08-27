import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#fff',
        height: '100%',
    },

    // Notifications
    notificationContainer: {
        paddingVertical: 20,
        paddingHorizontal: 25,
    },
    notificationTitle: {
        color: '#34383D',
        fontSize: 18,
        fontWeight: '600',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 10, 
        alignItems: 'center',
    },
    notificationText: {
        paddingLeft: 12.5,
        fontSize: 14,
        fontWeight: '600',
        color: '#34383D80',
        alignSelf: 'center',
    },
});

export default styles;