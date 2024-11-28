import {createAction} from "@reduxjs/toolkit";
import {
    servicesListLoading as loading,
    servicesListSuccess as success,
    servicesListFailed as failed
} from "../../localFixtureData/reducerVariables";


const servicesListLoading = createAction(loading);
const servicesListSuccess = createAction(success);
const servicesListFailed = createAction(failed);

export {servicesListLoading, servicesListSuccess, servicesListFailed};