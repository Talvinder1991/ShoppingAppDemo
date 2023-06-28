import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../core/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    containerList: {
        paddingBottom: 20
    },
    listContainer: {
        padding: 15,
    },
    imageBig: {
        aspectRatio: 0.63
    },
    bottomContainer: {
        marginBottom: 15,
        backgroundColor: Colors.pink,
        padding: 5,
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center'
    },
    bottomInner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
        marginRight: 5
    },
    shopNowButton: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.black,
        marginVertical: 10,
        padding: 10,
        marginLeft: 5
    },
    shopNowText: {
        color: Colors.black,
        fontSize: 15,
        fontWeight: '700'
    }
});

export default styles;
