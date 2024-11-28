import {createAction} from "@reduxjs/toolkit";
import {languageSelected as selected} from "../../localFixtureData/reducerVariables";

const languageSelected = createAction(selected);

export {languageSelected};