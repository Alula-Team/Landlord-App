import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

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

    // Money Boxes
    moneyInCell: {
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: '#5CB85C',
        borderRadius: 10,
    },
    moneyOutCell: {
        marginTop: 15,
        marginHorizontal: 20,
        marginBottom: 30,
        padding: 10,
        backgroundColor: '#D9534F',
        borderRadius: 10,
    },
    netGainsCellTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        marginLeft: 10
    },
    netGainsCellSubTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        opacity: 0.5,
        marginLeft: 10
    },
    netGainsCellNumber: {
        fontSize: 26,
        fontWeight: '700',
        color: '#fff',
        marginVertical: 10,
        marginLeft: 10
    },

    // Flatlist
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
        fontSize: 18,
        fontWeight: '600',
    },
    amount: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    actionsBtn: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: 30,
        padding: 7,
        width: 100,
    },
    actionsText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
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

    // Add Transaction Screen
    scrollView: {
        paddingBottom: 30
    },
    sectionText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'left',
        marginTop: 30,
        marginLeft: 20
    },
    upload: {
        marginHorizontal: 30,
        marginTop: 10,
        marginBottom: 20,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        flexDirection: 'row'
    },
    textArea: {
        marginHorizontal: 30,
        marginTop: 10,
        marginBottom: 50,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        flexDirection: 'row'
    },
    amountContainer: {
        marginHorizontal: 20,
        marginTop: 10,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        flexDirection: 'row'
    },
    dateContainer: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        borderColor: '#ffffff50',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        flexDirection: 'row'
    },
    dateText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 12.5
    },
});

export default styles;