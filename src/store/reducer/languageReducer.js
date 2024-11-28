import {createReducer} from "@reduxjs/toolkit";
import {languageSelected} from "../../localFixtureData/reducerVariables";

const languageReducer = createReducer({}, builder => {
    builder
        .addCase(languageSelected, (store, action) => {
            return {...store, language: action.payload};
        })
})

export default languageReducer;