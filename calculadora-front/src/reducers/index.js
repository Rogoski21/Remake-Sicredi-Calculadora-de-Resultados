import { combineReducers } from "redux";
import { darkModeReducer } from "./darkMode.js";

import { defaultProductsReducer } from "./defaultProductsReducer.js";
import { dialogReducer } from "./dialogReducer.js";
import { selectedProductsReducers } from "./selectedProductsReducer.js";
import snackbarReducer from "./snackbarReducer.js";

const rootReducers = combineReducers({
    darkMode: darkModeReducer,
    defaultProducts: defaultProductsReducer,
    dialog: dialogReducer,
    selectedProducts: selectedProductsReducers,
    snackbar: snackbarReducer,
});

export default rootReducers;
