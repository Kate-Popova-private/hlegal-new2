import {createAction} from "@reduxjs/toolkit";
import {
    fullPublicationsLoading as loading,
    fullPublicationsSuccess as success,
    fullPublicationsFailed as failed
} from "../../localFixtureData/reducerVariables";

const fullPublicationsLoading = createAction(loading);
const fullPublicationsSuccess = createAction(success);
const fullPublicationsFailed = createAction(failed);

export {fullPublicationsLoading, fullPublicationsSuccess, fullPublicationsFailed};