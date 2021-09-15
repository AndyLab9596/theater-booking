import { actionTypes } from "../actions/Types"

const initialState = {
    isLazy: false
}

export const LazyReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING_LAZY_MOUNT: {
            return { ...state, isLazy: true }
        }

        case actionTypes.LOADING_LAZY_UNMOUNT: {
            return { ...state, isLazy: false }
        }

        default:
            return { ...state }
    }
}

