import { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../app/store';
import { icons } from '../../core/Images';
import { Screens, Strings } from '../../core/Strings';
import styles from './Header.styles';

type Props = {
    currentRoute: string;
};

export function Header(props: Props) {
    const navigation = useNavigation();
    const cartList = useSelector((state: RootState) => state.cart.cartList);

    const isCartMounted = props.currentRoute !== '' && props.currentRoute === Screens.cart;

    return (
        <View style={styles.container}>
            {isCartMounted ? <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backImgTouch}>
                <Image style={styles.backImg} resizeMode='contain' source={icons.backArrow} />
            </TouchableOpacity> : null}
            <Text style={styles.headerText}>{isCartMounted ? Screens.cart : Strings.appName}</Text>
            {!isCartMounted ? <TouchableOpacity onPress={() => { navigation.navigate(Screens.cart) }} style={styles.cartImgTouch}>
                <Image style={styles.cartImg} resizeMode='contain' source={cartList.length > 0 ? icons.filledCart : icons.emptyCart} />
                {cartList.length > 0 && <Text style={styles.cartCountText}>{cartList.length}</Text>}
            </TouchableOpacity> : null}
        </View>
    );
}
