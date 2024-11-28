import {createReducer} from "@reduxjs/toolkit";
import {employeeCardLoading, employeeCardLoadingSuccess, employeeCardLoadingFailed} from "../../localFixtureData/reducerVariables";


const employeeCardReducer = createReducer([], (builder) => {
    builder
        .addCase(employeeCardLoading, (store, action) => {
            return {...store, loading: true};
        })
        .addCase(employeeCardLoadingSuccess, (store, action) => {
            return {...store, ...{loading: false, employee: action.payload}};
        })
        .addCase(employeeCardLoadingFailed, (store, action) => {
            return {...store, ...{loading: false, error: action.payload}};
        })
})

export default employeeCardReducer;