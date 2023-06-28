import { StyleSheet } from 'react-native';
import { Colors } from '../../core/Colors';

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
        paddingHorizontal: 20,
        height: 50,
        backgroundColor: Colors.pink,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    backImgTouch: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        marginRight: 10
    },
    backImg: {
        height: 30,
        width: 30,
        tintColor: Colors.white,
    },
    headerText: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.white
    },
    cartImgTouch: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        alignSelf: 'center'
    },
    cartImg: {
        height: 20,
        width: 20,
        tintColor: Colors.white
    },
    cartCountText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 13,
        position: 'absolute',
        top: -2,
        right: -2
    }
});

export default styles;
