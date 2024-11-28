import {createAction} from "@reduxjs/toolkit";
import {
    serviceLoading as loading,
    serviceLoadingSuccess as success,
    serviceLoadingFailed as failed
} from '../../localFixtureData/reducerVariables';


const serviceLoading = createAction(loading);
const serviceLoadingSuccess = createAction(success);
const serviceLoadingFailed = createAction(failed);

export {serviceLoading, serviceLoadingSuccess, serviceLoadingFailed};