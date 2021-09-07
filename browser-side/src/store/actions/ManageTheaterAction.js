import { manageTheaterService } from '../../services/manageTheaterService';
import createAction from './createAction/index';
import { actionTypes } from './Types/index';


export const getShowScheduleTheaterLocation = () => {
    return async (dispatch) => {
        try {
            const res = await manageTheaterService.getShowScheduleTheaterLocation();
            dispatch(createAction(actionTypes.FETCH_THEATER, res.data.content))
        }
        catch (error) {
            console.log(error.response.data.content)
        }
    }
}