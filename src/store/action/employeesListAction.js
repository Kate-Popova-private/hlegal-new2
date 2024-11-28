import {createAction} from "@reduxjs/toolkit";
import {
    employeesListLoading as loading,
    employeesListLoadingSuccess as success,
    employeesListLoadingFailed as failed
} from "../../localFixtureData/reducerVariables";


const employeesListLoading = createAction(loading);
const employeesListLoadingSuccess = createAction(success);
const employeesListLoadingFailed = createAction(failed);

export {employeesListLoading, employeesListLoadingSuccess, employeesListLoadingFailed};