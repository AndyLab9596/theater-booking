import { actionTypes } from "../actions/Types"

const initialState = {
    isLoading: false,
}

export const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISPLAY_LOADING: {
            state.isLoading = true;
            return { ...state }
        }
        case actionTypes.HIDE_LOADING: {
            state.isLoading = false;
            return { ...state }
        }
        default:
            return { ...state }
    }
}