import { useEffect, Fragment } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Home.styles';
import { commonApiAxios } from '../../../service/ApiUtil';
import Constants from '../../../core/Constants';
import { Config, EndPointUrl } from '../../../service/Config';
import { RootState } from '../../../app/store';
import { setHomeItemsList } from '../data/homeSlice';
import { FailedIndexInfo, ShopListItems } from '../../../app/commonTypes';
import { updatedCartList } from '../../cart/data/cartSlice';
import { Strings } from '../../../core/Strings';

export function Home(props: any) {
    const dispatch = useDispatch();
    const homeList = useSelector((state: RootState) => state.home.homeList);
    const cartList = useSelector((state: RootState) => state.cart.cartList);

    useEffect(() => {
        getHomeListApi();
    }, [])

    // ===================={GET HOME LIST API}=======================//
    async function getHomeListApi() {
        let res = await commonApiAxios(
            Constants.GET,
            Config.BASE_URL + EndPointUrl.HOME_LIST,
            {},
        );
        console.log('res :: ', res);

        if (res?.data) {
            dispatch(setHomeItemsList(res?.data));
        }
    }

    const updateCartList = (item: ShopListItems) => {
        let cartUpdatedArray = [...cartList];
        if (getUpdatedIndex(item) === -1) {
            cartUpdatedArray.push({ ...item, count: 1 })
            dispatch(updatedCartList(cartUpdatedArray));
        }
    }

    const getUpdatedIndex = (item: ShopListItems) => {
        let cartUpdatedArray = [...cartList];
        const index = cartUpdatedArray.findIndex((cartItem: ShopListItems) => cartItem.id === item.id);
        return index
    }

    const shopCartItem = (item: ShopListItems, index: number) => {
        const foundIndex = getUpdatedIndex(item)
        return (
            <Fragment>
                <Image style={styles.imageBig} resizeMode='contain' source={{ uri: item.img }} />
                <View style={styles.bottomContainer}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <View style={styles.bottomInner}>
                        <Text style={styles.priceText}>{'£'}{item.price.toFixed(2)}</Text>
                        <TouchableOpacity testID={`AddToCart-${index}`} disabled={!(foundIndex === -1)} activeOpacity={0.5} style={styles.shopNowButton} onPress={() => {
                            updateCartList(item)
                        }}>
                            <Text style={styles.shopNowText}>{foundIndex === -1 ? Strings.shopNow : Strings.addedInCart}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Fragment>
        );
    };

    return (
        <View style={styles.container} testID='Home'>
            <FlatList
                bounces={false}
                data={homeList}
                keyExtractor={(_item: ShopListItems, index: number) =>
                    index.toString()
                }
                renderItem={({ item, index }) => shopCartItem(item, index)}
                onScrollToIndexFailed={(_data: FailedIndexInfo) => { }}
                style={styles.listContainer}
                contentContainerStyle={styles.containerList}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
