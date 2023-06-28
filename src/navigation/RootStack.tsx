import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../core/Strings';
import { Home } from '../modules/home/screens/Home';
import { Cart } from '../modules/cart/screens/Cart';

const Stack = createNativeStackNavigator();
export default function RootStack() {
    return (
        <Stack.Navigator initialRouteName={Screens.home}>
            <Stack.Screen
                name={Screens.home}
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={Screens.cart}
                component={Cart}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}
