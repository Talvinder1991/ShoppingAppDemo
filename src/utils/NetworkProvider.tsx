import { useState, createContext, useEffect } from 'react';
import { Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { Strings } from '../core/Strings';

const NetworkContext = createContext<boolean>(false);

export function NetworkProvider(props: any) {
    const [isOffline, setOfflineStatus] = useState(false);

    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener(state => {
            const offline = !state.isConnected;
            setOfflineStatus(offline);
        });

        return () => removeNetInfoSubscription();
    }, []);
    return (
        <NetworkContext.Provider value={isOffline}>
            {props.children}
            {isOffline ? Alert.alert(Strings.noNetwork) : null}
        </NetworkContext.Provider>
    );
}
