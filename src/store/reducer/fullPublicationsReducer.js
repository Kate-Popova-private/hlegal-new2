import {createReducer} from "@reduxjs/toolkit";
import {fullPublicationsLoading , fullPublicationsSuccess, fullPublicationsFailed} from "../../localFixtureData/reducerVariables";


const fullPublicationsReducer = createReducer([], builder => {
    builder
        .addCase(fullPublicationsLoading, (store, action) => {
            return {...store, loading: true};
        })
        .addCase(fullPublicationsSuccess, (store, action) => {
        return {...store, ...{loading: false, publicationCard: action.payload}};
    })
        .addCase(fullPublicationsFailed, (store, action) => {
        return {...store, ...{loading: false, error: action.payload}};
    })
})
export default fullPublicationsReducer;