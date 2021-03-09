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

    // Money Boxes
    moneyInCell: {
        margin: 30,
        padding: 20,
        backgroundColor: '#5CB85C',
        borderRadius: 10,
    },
    moneyOutCell: {
        marginHorizontal: 30,
        marginBottom: 30,
        padding: 20,
        backgroundColor: '#D9534F',
        borderRadius: 10,
    },
    netGainsCellTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff'
    },
    netGainsCellSubTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        opacity: 0.5,
    },
    netGainsCellNumber: {
        fontSize: 26,
        fontWeight: '700',
        color: '#fff',
        marginVertical: 10
    },

    // Flatlist
    listView: {
        // marginHorizontal: 5,
    },
    listCell: {
        paddingVertical: 20,
        paddingHorizontal: 25
    },
    itemCenter: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 10, 
        alignItems: 'center'
    },
    listItem: {
        paddingLeft: 12.5,
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
        alignSelf: 'center',
    },
    transactionType: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    amount: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
});

export default styles;