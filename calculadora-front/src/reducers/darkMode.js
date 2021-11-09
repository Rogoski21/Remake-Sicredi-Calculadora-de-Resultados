import { types } from "./types.js";

const initialState = {
    isDark: false,
};

export const darkModeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_THEME:
            return {
                ...state,
                isDark: true,
            };
        default:
            return { ...state };
    }
};
