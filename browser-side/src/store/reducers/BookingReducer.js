import { BookingInfo } from "../../core/models/bookingInfo";
import { actionTypes } from "../actions/Types";

const initialValue = {
    bookingInfo: new BookingInfo(),
    onBookingArr: []
}

export const BookingReducer = (state = initialValue, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOKING_INFO: {
            state.bookingInfo = action.payload;
            return { ...state }
        }
        case actionTypes.BOOKING_SEAT: {
            // Cập nhập danh sách ghế đang đặt
            let updateBookingArr = [...state.onBookingArr];
            let index = updateBookingArr.findIndex(booked => booked.maGhe === action.payload.maGhe);
            if (index !== -1) {

                updateBookingArr.splice(index, 1)
            } else {
                updateBookingArr.push(action.payload)
            }

            return { ...state, onBookingArr: updateBookingArr }
        }

        default: return { ...state }

    }
}