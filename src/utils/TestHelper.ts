import React from 'react';

import { Provider as StoreProvider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

const mockedStore = configureStore([]);
const store = mockedStore({
    todoState: {},
    appState: {},
    dailyState: {},
    monthlyState: {},
    standardPlan: {},
    openTaskState: {},
    productList: {},
    planCompliance: {},
    fetchQueryDoctorsState: {},
    landing: {},
    ePriorityProductList: {},
    eOtherProductList: {},
    timeline: {},
    authState: {},
    dcrState: {},
    perDayPlan: {},
    myPerformanceMasterData: {},
    contactDetails: {},
    rcpa: {},
    visitList: {},
    settingState: {},
    submitPresentationData: {},
    submitCatalogAnalytics: {},
    totalBrandList: {},
    callReportings: {},
    chemistDoctor: {},
    activeNav: {},
    tourPlan: {},
    chemistMoreDetails: {},
    gspManagerState: {},
});


export const renderer = (component: any, mockStore = store) => {
    return render(
        <StoreProvider store={ mockStore } >
        <NavigationContainer>{ component } < /NavigationContainer>
    < /StoreProvider>,
    );
};

export * from '@testing-library/react-native';