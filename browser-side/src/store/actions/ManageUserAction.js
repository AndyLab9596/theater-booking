import createAction from './createAction/index'
import { actionTypes } from './Types/index'
import { manageUserService } from '../../services/manageUserService';
import { TOKEN } from '../../utils/config';


export const loginUser = (values, history, openNotification) => {
    return async (dispatch) => {
        try {
            const res = await manageUserService.loginUser(values);
            dispatch(createAction(actionTypes.LOGIN_USER, res.data.content))
            localStorage.setItem(TOKEN, res.data.content.accessToken)
            history()
        }
        catch (error) {
            console.log(error.response.data.content)
            openNotification(error.response.data.content)
        }
    }
}