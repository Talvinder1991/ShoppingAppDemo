import { Platform } from 'react-native';
import axios from 'axios';
import Constants from '../core/Constants';

let timeout = 60000;

export function commonApiAxios(method: any, url: string, params: any) {
    // set request headers end
    let axiosConfig = {
        authorization: 'Bearer ' + Constants.ACCESS_TOKEN,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'app-version': Constants.APP_VERSION,
        'device-type': Platform.OS,
        'certification_type': (__DEV__) ? "development" : "distribution",
    };

    let axiosConfigForm = {
        authorization: 'Bearer ' + Constants.ACCESS_TOKEN,
        "Content-Type": "multipart/form-data",
        'Access-Control-Allow-Origin': '*',
        'app-version': Constants.APP_VERSION,
        'device-type': Platform.OS,
        'certification_type': (__DEV__) ? "development" : "distribution",
    };

    switch (method) {
        case Constants.GET:
            return axios
                .get(url, { headers: axiosConfig, params: params, timeout: timeout })
                .then((response: any) => {
                    return response;
                })
                .catch((error: any) => {
                    handleError(error.response)
                });

        case Constants.POST:
            return axios
                .post(url, params, { headers: axiosConfig, timeout: timeout })
                .then((response: any) => {
                    return response;
                })
                .catch((error: any) => {
                    handleError(error.response)
                });

        case Constants.PUT:
            return axios
                .put(url, params, { headers: axiosConfig, timeout: timeout })
                .then((response: any) => {
                    return response;
                })
                .catch((error: any) => {
                    handleError(error.response)
                });

        case Constants.DELETE:
            return axios
                .delete(url, { headers: axiosConfig, params: params, timeout: timeout })
                .then((response: any) => {
                    return response;
                })
                .catch((error: any) => {
                    handleError(error.response)
                });

        case Constants.POST_WITH_FORM:
            return axios
                .post(url, params, { headers: axiosConfigForm, timeout: timeout })
                .then((response: any) => {
                    return response;
                })
                .catch((error: any) => {
                    handleError(error.response)
                });
    }
}

function handleError(response: any) {
    console.log(response);
}