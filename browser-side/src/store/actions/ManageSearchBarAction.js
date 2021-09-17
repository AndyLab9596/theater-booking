import { manageTheaterService } from "../../services/manageTheaterService";
import createAction from "./createAction";
import { actionTypes } from "./Types";

export const searchSingleMovie = (id) => {
    return async (dispatch) => {
        try {
            const res = await manageTheaterService.getSingleMovieWithSchedule(id);
            dispatch(createAction(actionTypes.FETCH_MOVIE_SCHEDULE, res.data.content));

        }
        catch (error) {
            console.log(error)
        }
    }
}