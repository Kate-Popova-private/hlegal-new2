import {createReducer} from "@reduxjs/toolkit";
import {modalMessageAdd, modalMessageRemove} from "../../localFixtureData/reducerVariables";


const modalMessageReducer = createReducer({message:false}, (builder) => {
    builder
        .addCase(modalMessageAdd, (store, action) => {
            return {...store, message: action.payload};
        })
        .addCase(modalMessageRemove, (store, action) => {
            return {...store, ...{message: false}};
        })
})

export default modalMessageReducer;