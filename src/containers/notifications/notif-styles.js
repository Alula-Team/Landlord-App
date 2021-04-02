import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    // Body
    container: {
        backgroundColor: '#09061C',
        height: '100%',
    },

    // Flatlist
    flatlistTitle: {
        fontSize: 18,
        fontWeight: '600',
        textDecorationLine: 'underline',
        color: '#fff',
        left: 30
    },
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
    emptyList: {
        marginTop: 100,
    },
    img: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
});

export default styles;