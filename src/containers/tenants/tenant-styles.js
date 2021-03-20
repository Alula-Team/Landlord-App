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

    // Flatlist
    listView: {
        marginHorizontal: 30,
        borderRadius: 10,
        // backgroundColor: '#4B416C'
    },
    listCell: {
        paddingVertical: 20,
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

    // ADD TENANT
    sectionText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'left',
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 20
    },
    tenantInput: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 12.5
    },
});

export default styles;