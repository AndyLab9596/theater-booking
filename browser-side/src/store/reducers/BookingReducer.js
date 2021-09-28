import { BookingInfo } from "../../core/models/bookingInfo";
import { actionTypes } from "../actions/Types";

const initialValue = {
    bookingInfo: new BookingInfo(),
    onBookingArr: [],
    tabActive: "1",
    timeOut: false,
    activeStep: 0,
}

export const BookingReducer = (state = initialValue, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOKING_INFO: {
            state.bookingInfo = action.payload;
            state.timeOut = false;
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
        case actionTypes.FINISH_BOOKING: {
            state.onBookingArr = [];
            state.timeOut = false;
            return { ...state }
        }
        case actionTypes.OVER_10_SEATS: {
            let updateBookingArr = [...state.onBookingArr];
            updateBookingArr.pop()
            return { ...state, onBookingArr: updateBookingArr }
        }
        case actionTypes.TIME_OUT: {
            state.timeOut = true;
            return { ...state }
        }
        case actionTypes.MOBILE_SET_STEP: {
            state.activeStep = action.payload;
            return { ...state }
        }
        default: return { ...state }

    }
}