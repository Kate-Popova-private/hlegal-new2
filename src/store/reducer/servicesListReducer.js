import {createReducer} from "@reduxjs/toolkit";
import {servicesListLoading, servicesListSuccess, servicesListFailed} from "../../localFixtureData/reducerVariables";


const servicesListReducer = createReducer([], (builder) => {
    builder
        .addCase(servicesListLoading, (store, action) => {
            return {...store, loading: true};
        })
        .addCase(servicesListSuccess, (store, action) => {
            return {...store, ...{loading: false, servicesList: action.payload}};
        })
        .addCase(servicesListFailed, (store, action) => {
            return {...store, ...{loading: false, error: action.payload}};
        })
})

export default servicesListReducer;