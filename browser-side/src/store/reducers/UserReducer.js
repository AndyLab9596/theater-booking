import CurrentUserInfo from "../../core/models/currentUserInfo";
import { TOKEN } from "../../utils/config";
import { actionTypes } from "../actions/Types"

const initialValue = {
    currentUser: null,
    currentUserInfo: new CurrentUserInfo(),
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
        // case actionTypes.FETCH_USER_INFO: {
        //     state.currentUserInfo = action.payload;
        //     return { ...state }
        // }

        default:
            return { ...state }
    }
}
