import { BookingInfo } from "../../core/models/bookingInfo";
import { actionTypes } from "../actions/Types";

const initialValue = {
    bookingInfo: new BookingInfo()
}

export const BookingReducer = (state = initialValue, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOKING_INFO: {
            state.bookingInfo = action.payload;
            return { ...state }
        }

        default: return { ...state }

    }
}