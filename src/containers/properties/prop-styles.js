import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#09061C',
        height: '100%',
    },

    // Searchbar
    searchContainer: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        flexDirection: 'row'
    },
    searchIcon: {
        alignSelf: 'center',
        marginLeft: 10
    },
    searchInput: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 12.5
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
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 10,
        alignSelf: 'center'
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
        alignSelf: 'center'
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
    addButton: {
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        width: '30%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 20
    },
    addButtonText: {
        fontSize: 16,
        color: '#fff',
        
    },

    // ** SERVICE REQUEST DETAIL SCREEN ** //
    markComplete: {
        marginHorizontal: 20,
        marginTop: 50,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        justifyContent: 'center'
    },
    completed: {
        marginHorizontal: 20,
        marginTop: 50,
        backgroundColor: '#5cb85c',
        borderRadius: 10,
        height: 45,
        justifyContent: 'center'
    },
    serviceRequestImage: {
        backgroundColor: '#ffffff50',
        width: '100%',
        height: 200,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center'
    },

    // ** PROPERTY DETAIL SCREEN ** //
    backBtn: {
        top: 70, 
        left: 20, 
        backgroundColor:'#09061C70', 
        width: 45, 
        height: 45, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10
    },
    sectionSpacing: {
        margin: 30
    },
    propertyDetailTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700'
    },
    propertyDetailSubText: {
        color: '#ffffff90',
        fontSize: 16,
        fontWeight: '500'
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 30,
        marginTop: 30,
        marginBottom: 20
    },
    infoTitle: {
        color: '#ffffff90',
        fontSize: 16,
        marginLeft: 10,
        marginVertical: 10
    },
    infoText: {
        color: '#fff',
        fontSize: 16,
        marginRight: 10,
        marginVertical: 10
    },
    tenantName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 10,
        marginVertical: 10
    },
    buttons: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
    },
});

export default styles;