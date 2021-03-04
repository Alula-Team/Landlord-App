import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#09061C',
        height: '100%',
    },
    // Net Gains Box
    netGainsCell: {
        margin: 30,
        padding: 20,
        backgroundColor: '#4124C3',
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
    flatlistTitle: {
        fontSize: 18,
        fontWeight: '600',
        textDecorationLine: 'underline',
        color: '#fff',
        left: 30
    },
    listView: {
        marginTop: 15,
        marginHorizontal: 30,
        borderRadius: 10,
        // backgroundColor: '#4B416C'
    },
    listCell: {
        paddingVertical: 20,
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
});

export default styles;