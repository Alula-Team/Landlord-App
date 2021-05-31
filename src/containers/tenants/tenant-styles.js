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
    itemCenter: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 10, 
        alignItems: 'center'
    },
    listItem: {
        paddingLeft: 12.5,
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
    },
    status: {
        color: '#fff',
        marginLeft: 12.5,
        marginTop: 5
    },
    emptyList: {
        marginTop: 30,
    },
    img: {
        width: '120%',
        height: 300,
        resizeMode: 'contain',
        alignSelf: 'center'
    },

    // ADD TENANT
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: '#5858FB',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 325
    },
    modalText: {
        color: '#fff',
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 18
    },
    modalButton: {
        backgroundColor: '#fff',
        padding: 15,
        marginTop: 20,
        marginHorizontal: '20%',
        borderRadius: 10,
    },
    modalButtonText: {
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'center',
        color: '#5858FB'
    },
    tenantInputContainer: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        flexDirection: 'row',
        borderColor: '#ffffff60'
    },
    tenantInput: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 12.5
    },

    // Tenant Detail
    imgPlaceHolder: {
        width: 70, 
        height: 70, 
        borderRadius: 80/2, 
        borderColor: '#fff',
        borderWidth: 3,
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'center'
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