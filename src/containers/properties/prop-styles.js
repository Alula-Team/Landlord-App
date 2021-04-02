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
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        flexDirection: 'row',
        backgroundColor: '#ffffff30'
    },
    searchIcon: {
        alignSelf: 'center',
        marginLeft: 10
    },
    searchInput: {
        color: '#fff',
        fontSize: 18,
        marginHorizontal: 12.5,
        width: '85%'
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
    emptyList: {
        marginTop: 30,
    },
    img: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
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
    propertyInput: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 12.5
    },
    addUnitInput: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        // width: '75%',
        flexDirection: 'row'
    },

    // ** SERVICE REQUEST Screen ** //
    propertySectionSpacing: {
        marginTop: 37,
        marginLeft: 30
    },
    propertyServiceTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'left', 
    },
    propertyServiceSubText: {
        color: '#ffffff90',
        fontSize: 16,
        fontWeight: '500',
    },
    descriptionSectionSpacing: {
        margin: 30
    },
    descriptionText: {
        color: '#fff',
        fontSize: 16,
    },

    // ** PROPERTY DETAIL SCREEN ** //
    backBtn: {
        top: 70, 
        left: 30,
        borderRadius: 10,
    },
    sectionSpacing: {
        marginTop: 37,
        left: 100
    },
    propertyDetailTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'left', 
    },
    propertyDetailSubText: {
        color: '#ffffff90',
        fontSize: 14,
        fontWeight: '500',
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
    removePropButton: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        width: 100
    },
    removePropButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center'
    },
});

export default styles;