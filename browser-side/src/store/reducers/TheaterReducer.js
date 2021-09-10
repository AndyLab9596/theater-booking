
import { actionTypes } from "../actions/Types"

const initialValue = {
    arrTheater: [],
    singleMovieWithSchedule: {},
}

export const TheaterReducer = (state = initialValue, action) => {
    switch (action.type) {
        case actionTypes.FETCH_THEATER: {
            state.arrTheater = action.payload
            return { ...state }
        }
        case actionTypes.FETCH_MOVIE_SCHEDULE: {
            state.singleMovieWithSchedule = action.payload
            return { ...state }
        }


        default: return { ...state }

    }
}