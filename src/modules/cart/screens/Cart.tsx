import { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Cart.styles';
import { RootState } from '../../../app/store';
import { updatedCartList } from '../data/cartSlice';
import { FailedIndexInfo, ShopListItems } from '../../../app/commonTypes';
import { Strings } from '../../../core/Strings';
import { icons } from '../../../core/Images';

export function Cart(props: any) {
    const dispatch = useDispatch();
    const cartList = useSelector((state: RootState) => state.cart.cartList);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        if (cartList.length) {
            const price = cartList.reduce((initial: number, currentValue: ShopListItems) => initial + currentValue.price * currentValue.count, 0);
            setTotalPrice(price);
        } else {
            setTotalPrice(0);
        }
    }, [cartList])

    const deleteAction = (index: number) => {
        Alert.alert(Strings.appName, Strings.deleteMsg, [
            {
                text: Strings.cancel,
                onPress: () => { },
                style: 'cancel',
            },
            {
                text: Strings.ok, onPress: () => {
                    const updatedList = [...cartList]
                    updatedList.splice(index, 1)
                    dispatch(updatedCartList(updatedList));
                }
            },
        ]);
        return;
    }

    const updateItems = (item: ShopListItems, check: boolean) => {
        const updateList = [...cartList]
        const getIndex = updateList.findIndex((cartItem: ShopListItems) => cartItem.id === item.id)

        if (getIndex > -1) {
            const updateDetails = updateList[getIndex]
            if (check) {
                updateDetails.count++;
            } else {
                if (item.count > 1) {
                    updateDetails.count--;
                } else {
                    deleteAction(getIndex);
                }
            }
            dispatch(updatedCartList(updateList));
        }
    }

    const shopCartItem = (item: ShopListItems, index: number) => {
        return (
            <View style={styles.cellContainer}>
                <Image style={styles.imageBig} source={{ uri: item.img }} resizeMode='cover' />
                <View style={styles.rightView}>
                    <Text style={styles.productName} ellipsizeMode='tail' numberOfLines={3}>{item.name}</Text>
                    <Text style={styles.priceText}>{'£'}{(item.price * item.count).toFixed(2)}</Text>
                    <View style={styles.countView}>
                        <TouchableOpacity testID={`Subtraction-${index}`} activeOpacity={0.5} style={styles.subtractTouch} onPress={() => updateItems(item, false)}>
                            <Text style={styles.subtractText}>{'-'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countText}>{item.count}</Text>
                        <TouchableOpacity testID={`Addition-${index}`} activeOpacity={0.5} style={styles.additionTouch} onPress={() => updateItems(item, true)} ><Text style={styles.additionText}>{'+'}</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    // ===================={EMPTY LIST UI}=======================//
    const emptyList = () => {
        return (
            cartList.length === 0 ? <Image source={icons.blankCart} style={styles.emptyUI} resizeMode='contain' /> : null
        );
    };

    return (
        <View style={styles.container} testID='Cart'>
            <FlatList
                bounces={false}
                data={cartList}
                keyExtractor={(item: ShopListItems, _index: number) =>
                    item.id.toString()
                }
                renderItem={({ item, index }) => shopCartItem(item, index)}
                onScrollToIndexFailed={(_data: FailedIndexInfo) => { }}
                style={styles.listContainer}
                contentContainerStyle={styles.containerList}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={emptyList()}
            />
            <View style={styles.totalPriceView}>
                <Text style={styles.priceLabel}>{Strings.totalPrice + ': £'}</Text>
                <Text style={styles.amountText}>{totalPrice.toFixed(2)}</Text>
                <View style={styles.seperatorLine} />
            </View>
        </View>
    );
}
