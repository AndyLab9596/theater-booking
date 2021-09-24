import { manageMovieService } from "../../services/manageMovieService"
import createAction from './createAction/index'
import { actionTypes } from './Types/index'

export const getArrMoviesPagination = (page) => {
    return async (dispatch) => {
        try {
            const res = await manageMovieService.getArrMoviesPagination(page);
            console.log(res)
            dispatch(createAction(actionTypes.FETCH_MOVIES_PAGINATION, res.data))
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getArrMovies = () => {
    return async (dispatch) => {
        try {
            dispatch(createAction(actionTypes.FETCH_ARRAY_MOVIE_REQUEST))
            const res = await manageMovieService.getArrMovies();
            await dispatch(createAction(actionTypes.FETCH_MOVIES, res.data))
            dispatch(createAction(actionTypes.HIDE_ARRAY_MOVIE_REQUEST))
        }
        catch (error) {
            console.log(error.response)
            dispatch(createAction(actionTypes.HIDE_ARRAY_MOVIE_REQUEST))
        }
    }
}

export const getSingleMovie = (id) => {
    return async (dispatch) => {
        try {
            const res = await manageMovieService.getSingleMovie(id);
            dispatch(createAction(actionTypes.FETCH_MOVIE, res.data))
        }
        catch (error) {
            console.log(error)
        }
    }
}