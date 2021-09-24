import { manageUserService } from '../../services/manageUserService';
import { TAIKHOAN, TOKEN } from '../../utils/config';
import createAction from './createAction/index';
import { actionTypes } from './Types/index';



export const loginUser = (values, history, openNotification) => {
    return async (dispatch) => {
        try {
            const res = await manageUserService.loginUser(values);
            console.log(res)
            dispatch(createAction(actionTypes.LOGIN_USER, res.data))
            localStorage.setItem(TOKEN, res.data.accessToken)
            localStorage.setItem(TAIKHOAN, res.data.taiKhoan)
            history()
        }
        catch (error) {
            console.log(error.response)
            openNotification(error.response.data)
        }
    }
}

export const fetchUser = (taiKhoan) => {
    return async (dispatch) => {
        try {
            dispatch(createAction(actionTypes.FETCH_USER_REQUEST))
            const res = await manageUserService.fetchUser(taiKhoan);
            console.log(res)
            await dispatch(createAction(actionTypes.LOGIN_USER, res.data))
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
            openNotification(error.response.data)
        }
    }
}
