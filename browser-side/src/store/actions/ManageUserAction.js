import { manageUserService } from '../../services/manageUserService';
import { TOKEN } from '../../utils/config';
import createAction from './createAction/index';
import { actionTypes } from './Types/index';



export const loginUser = (values, history, openNotification) => {
    return async (dispatch) => {
        try {
            const res = await manageUserService.loginUser(values);
            dispatch(createAction(actionTypes.LOGIN_USER, res.data.content))
            localStorage.setItem(TOKEN, res.data.content.accessToken)
            history()
        }
        catch (error) {
            openNotification(error.response.data.content)
        }
    }
}

export const fetchUser = () => {
    return async (dispatch) => {
        try {
            dispatch(createAction(actionTypes.FETCH_USER_REQUEST))
            const res = await manageUserService.fetchUser();
            await dispatch(createAction(actionTypes.LOGIN_USER, res.data.content))
            dispatch(createAction(actionTypes.HIDE_USER_REQUEST))

        }
        catch (error) {
            console.log(error)
            dispatch(createAction(actionTypes.HIDE_USER_REQUEST))
        }
    }
}

export const registerUser = (values, history, openNotification) => {
    return async (dispatch) => {
        try {
            const res = await manageUserService.registerUser(values);
            history()
        }
        catch (error) {
            openNotification(error.response.data.content)
        }
    }
}

// export const getUserInfo = () => {
//     return async (dispatch) => {
//         try {
//             dispatch(createAction(actionTypes.FETCH_USER_REQUEST))
//             const res = await manageUserService.fetchUserInfo();
//             await dispatch(createAction(actionTypes.FETCH_USER_INFO, res.data.content))
//             dispatch(createAction(actionTypes.HIDE_USER_REQUEST))
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }
// }