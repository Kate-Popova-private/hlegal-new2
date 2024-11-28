import {createReducer} from "@reduxjs/toolkit";
import {
    employeesListLoading,
    employeesListLoadingSuccess,
    employeesListLoadingFailed
} from "../../localFixtureData/reducerVariables";

const employeesListReducer = createReducer([], (builder) => {
    builder
        .addCase(employeesListLoading, (store, action) => {
            return {...store, loading: true};
        })
        .addCase(employeesListLoadingSuccess, (store, action) => {
            return {...store, ...{loading: false, employeesList: action.payload}};
        })
        .addCase(employeesListLoadingFailed, (store, action) => {
            return {...store, ...{loading: false, error: action.payload}};
        })
})

export default employeesListReducer;