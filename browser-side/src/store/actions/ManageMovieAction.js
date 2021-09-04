import { manageMovieService } from "../../services/manageMovieService"
import createAction from './createAction/index'
import { actionTypes } from './Types/index'

export const getArrBanner = () => {
    return async (dispatch) => {
        try {
            const res = await manageMovieService.getArrBanner();
            dispatch(createAction(actionTypes.SET_BANNER, res.data.content))
        }
        catch (error) {
            console.log(error)
        }
    }
}