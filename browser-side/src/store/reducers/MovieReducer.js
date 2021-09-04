import { actionTypes } from "../actions/Types"

const initialValue = {
    arrBanner: [],
}

export const MovieReducer = (state = initialValue, action) => {
    switch (action.type) {
        case actionTypes.SET_BANNER: {
            state.arrBanner = action.payload
            return { ...state }
        }

        default: return { ...state }

    }
}