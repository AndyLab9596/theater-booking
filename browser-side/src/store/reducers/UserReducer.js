import { actionTypes } from "../actions/Types"

const initialValue = {
    currentUser: null
}

export const UserReducer = (state = initialValue, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER: {
            state.currentUser = action.payload;
            return { ...state }
        }

        default:
            return { ...state }
    }
}
