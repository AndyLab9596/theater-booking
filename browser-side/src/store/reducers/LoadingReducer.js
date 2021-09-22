import { actionTypes } from "../actions/Types"

const initialState = {
    bookingLoading: false,
    bookingInfoLoading: false,

    userLoading: false,
    arrMovieLoading: false,
    arrTheaterLoading: false,

}

export const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKING_INFO_REQUEST: {
            state.bookingInfoLoading = true;
            return { ...state }
        }

        case actionTypes.HIDE_BOOKING_INFO_REQUEST: {
            state.bookingInfoLoading = false;
            return { ...state }
        }

        case actionTypes.FETCH_TICKET_REQUEST: {
            state.bookingLoading = true;
            return { ...state }
        }

        case actionTypes.HIDE_TICKET_REQUEST: {
            state.bookingLoading = false;
            return { ...state }
        }

        case actionTypes.FETCH_USER_REQUEST: {
            state.userLoading = true;
            return { ...state }
        }

        case actionTypes.FETCH_ARRAY_MOVIE_REQUEST: {
            state.arrMovieLoading = true;
            return { ...state }
        }
        case actionTypes.FETCH_THEATER_REQUEST: {
            state.arrTheaterLoading = true;
            return { ...state }
        }

        case actionTypes.HIDE_USER_REQUEST: {
            state.userLoading = false;
            return { ...state }
        }
        case actionTypes.HIDE_ARRAY_MOVIE_REQUEST: {
            state.arrMovieLoading = false;
            return { ...state }
        }
        case actionTypes.HIDE_THEATER_REQUEST: {
            state.arrTheaterLoading = false;
            return { ...state }
        }

        default:
            return { ...state }
    }
}