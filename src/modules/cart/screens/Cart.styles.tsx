import { StyleSheet } from 'react-native';
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
    cellContainer: {
        flex: 1,
        marginBottom: 15,
        flexDirection: 'row',
        borderRadius: 5,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.black,
        backgroundColor: Colors.pink
    },
    countView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.black,
        marginTop: 5,
        alignSelf: 'center',
        width: 100,
    },
    subtractTouch: {
        padding: 5,
        marginRight: 5,
        paddingHorizontal: 10
    },
    subtractText: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 20
    },
    countText: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 20
    },
    additionTouch: {
        padding: 5,
        marginLeft: 5,
        paddingHorizontal: 10
    },
    additionText: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 20
    },
    rightView: {
        backgroundColor: Colors.pink,
        padding: 5,
        marginLeft: 5,
        flex: 1
    },
    imageBig: {
        aspectRatio: 0.59,
        width: 100
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'left',
    },
    priceText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'left',
        marginRight: 5,
        marginVertical: 5,
    },
    totalPriceView: {
        flexDirection: 'row',
        marginBottom: 0,
        width: '100%',
        height: 100,
        backgroundColor: Colors.pink,
        alignItems: 'center',
        justifyContent: 'center'
    },
    priceLabel: {
        color: Colors.white,
        fontSize: 30,
        fontWeight: 'bold'
    },
    amountText: {
        color: Colors.white,
        fontSize: 30,
        fontWeight: 'bold'
    },
    seperatorLine: {
        height: 1,
        backgroundColor: Colors.black,
        position: 'absolute',
        top: 0,
        width: '100%'
    },
    emptyUI: {
        aspectRatio: 1,
        alignSelf: 'center',
        marginTop: -100
    }
});

export default styles;
