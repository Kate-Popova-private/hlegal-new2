import {createReducer} from "@reduxjs/toolkit";
import {serviceLoading, serviceLoadingSuccess, serviceLoadingFailed} from '../../localFixtureData/reducerVariables';

const serviceReducer = createReducer({}, builder => {
    builder
        .addCase(serviceLoading, (store) => {
            return {...store, loading: true};
        })
        .addCase(serviceLoadingSuccess, (store, action) => {
            return {...store, ...{loading: false, fullService: action.payload}};
        })
        .addCase(serviceLoadingFailed, (store, action) => {
            return {...store, ...{loading: false, error: action.payload}};
        })
})

export default serviceReducer;