import {createAction} from "@reduxjs/toolkit";
import {
    employeeCardLoading as loading,
    employeeCardLoadingSuccess as success,
    employeeCardLoadingFailed as failed
} from "../../localFixtureData/reducerVariables";


const employeeCardLoading = createAction(loading);
const employeeCardLoadingSuccess = createAction(success);
const employeeCardLoadingFailed = createAction(failed);

export {employeeCardLoading, employeeCardLoadingSuccess, employeeCardLoadingFailed};