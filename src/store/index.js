import {configureStore} from "@reduxjs/toolkit";
import servicesListReducer from "./reducer/servicesListReducer";
import serviceReducer from "./reducer/serviceReducer";
import languageReducer from "./reducer/languageReducer";
import modalMessageReducer from "./reducer/modalMessageReducer";
import employeesListReducer from "./reducer/employeesListReducer";
import employeeCardReducer from "./reducer/employeeCardReducer";
import publicationListReducer from "./reducer/publicationListReducer";
import fullPublicationsReducer from "./reducer/fullPublicationsReducer";

export const store = configureStore({
    reducer: {
        services: servicesListReducer,
        service: serviceReducer,
        language: languageReducer,
        publicationsList: publicationListReducer,
        fullPublications: fullPublicationsReducer,
        modalMessage: modalMessageReducer,
        employees: employeesListReducer,
        employeeCard: employeeCardReducer,
    }
})