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

export const getArrMoviesPagination = (page) => {
    return async (dispatch) => {
        try {
            const res = await manageMovieService.getArrMoviesPagination(page);
            dispatch(createAction(actionTypes.FETCH_MOVIES_PAGINATION, res.data.content))
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getArrMovies = () => {
    return async (dispatch) => {
        try {
            const res = await manageMovieService.getArrMovies();
            dispatch(createAction(actionTypes.FETCH_MOVIES, res.data.content))
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getSingleMovie = (id) => {
    return async (dispatch) => {
        try {
            const res = await manageMovieService.getSingleMovie(id);
            dispatch(createAction(actionTypes.FETCH_MOVIE, res.data.content))
        }
        catch (error) {
            console.log(error)
        }
    }
}