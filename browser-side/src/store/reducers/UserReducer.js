import { TOKEN } from "../../utils/config";
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
        case actionTypes.LOGOUT_USER: {
            state.currentUser = {};
            localStorage.removeItem(TOKEN);
            return { ...state }
        }

        default:
            return { ...state }
    }
}
