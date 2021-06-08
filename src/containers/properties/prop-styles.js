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
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10
    },
    addButtonText: {
        fontSize: 16,
        color: '#fff',
        // textDecorationLine: 'underline'
    },
    propertyInput: {
        backgroundColor: 'transparent',
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
        width: '80%',
        flexDirection: 'row'
    },
    addInputContainer: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        flexDirection: 'row',
        borderColor: '#ffffff50',
        backgroundColor: 'transparent'
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
    sectionTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 20
    },
    tenantCard: {

    },
    tenantInitials: {
        width: 50, 
        height: 50, 
        borderRadius: 80/2, 
        borderColor: '#fff',
        borderWidth: 3,
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'center'
    },
    overlay: {
        backgroundColor: '#00000050',
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: '#2a2933',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '40%'
    }
});

export default styles;