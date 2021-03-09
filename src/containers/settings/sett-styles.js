import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#09061C',
        height: '100%',
    },

    // Global
    cellBackground: {
        marginHorizontal: 30,
        marginBottom: 20,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cellText: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 12.5
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        margin: 30,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    icon: {
        color: '#fff',
        marginLeft: 10,
        marginRight: 15
    },
   

    // Service Request Button
    serviceRequestsButton: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    serviceRequestsText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 10
    },

    // Flatlist
    listCell: {
        paddingVertical: 20,
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listItem: {
        paddingLeft: 12.5,
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
        alignSelf: 'center',
    },
    status: {
        color: '#fff',
        marginLeft: 12.5,
        marginTop: 5
    },
    arrow: {
        alignSelf: 'center',
        color: '#fff',
        marginRight: 10
    },

    // ** ADD PROPERTY SCREEN ** //
    sectionText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'left',
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 20
    },
   logOutButton: {
        backgroundColor: 'red',
        borderRadius: 10,
        margin: 30,
        padding: 20,
    },
    logOutButtonText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        alignSelf: 'center'
    },

    // ** EDIT PROFILE SCREEN ** //

    // ** CHANGE PASSWORD SCREEN ** //

    // ** UPDATE PAYMENT SCREEN ** //
    
});

export default styles;