import { actionTypes } from "../actions/Types"

const initialValue = {
    arrBanner: [],
    arrMoviesPagination: [],
    arrMovies: [],
    modalState: {}
}

export const MovieReducer = (state = initialValue, action) => {
    switch (action.type) {
        case actionTypes.SET_BANNER: {
            state.arrBanner = action.payload
            return { ...state }
        }
        case actionTypes.FETCH_MOVIES_PAGINATION: {
            state.arrMoviesPagination = action.payload
            return { ...state }
        }
        case actionTypes.FETCH_MOVIES: {
            state.arrMovies = action.payload
            return { ...state }
        }
        case actionTypes.PLAY_MODAL: {
            state.modalState = action.payload
            return { ...state }
        }

        default: return { ...state }

    }
}