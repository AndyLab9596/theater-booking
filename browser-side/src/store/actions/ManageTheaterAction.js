import { manageTheaterService } from '../../services/manageTheaterService';
import createAction from './createAction/index';
import { actionTypes } from './Types/index';


export const getShowScheduleTheaterLocation = (setTheaters) => {
    return async (dispatch) => {
        try {
            dispatch(createAction(actionTypes.FETCH_THEATER_REQUEST));
            const res = await manageTheaterService.getShowScheduleTheaterLocation();
            await dispatch(createAction(actionTypes.FETCH_THEATER, res.data.content));
            dispatch(createAction(actionTypes.HIDE_THEATER_REQUEST))
        }
        catch (error) {
            console.log(error)
            dispatch(createAction(actionTypes.HIDE_THEATER_REQUEST))
        }
    }
}

export const getSingleMovieWithSchedule = (id) => {
    return async (dispatch) => {
        try {
            const res = await manageTheaterService.getSingleMovieWithSchedule(id);
            dispatch(createAction(actionTypes.FETCH_MOVIE_SCHEDULE, res.data.content))
        }
        catch (error) {
            console.log(error)
        }
    }
}
