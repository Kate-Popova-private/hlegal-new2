import {createAction} from "@reduxjs/toolkit";
import {modalMessageAdd as add, modalMessageRemove as remove} from "../../localFixtureData/reducerVariables";


const modalMessageAdd = createAction(add);
const modalMessageRemove = createAction(remove);

export {modalMessageAdd, modalMessageRemove};