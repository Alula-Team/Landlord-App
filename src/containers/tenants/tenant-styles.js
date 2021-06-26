import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#ffffff80',
        height: '100%',
    },

    // Searchbar
    searchContainer: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 45,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    searchIcon: {
        alignSelf: 'center',
        marginLeft: 10
    },
    searchInput: {
        color: '#34383D',
        fontSize: 16,
        fontWeight: '500',
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
        fontSize: 15,
        fontWeight: '600',
        color: '#34383D',
        alignSelf: 'center',
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
        backgroundColor: '#00000050',
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: '#2a2933',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 275
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
        borderWidth: 4,
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
    sectionText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#34383D',
        textAlign: 'left',
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 20
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
    propInfo: {
        flexDirection: 'row',
        backgroundColor: "#5858FB",
        marginHorizontal: 20,
        padding: 20,
        marginBottom: 20,
        marginTop: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 5,
    }
});

export default styles;