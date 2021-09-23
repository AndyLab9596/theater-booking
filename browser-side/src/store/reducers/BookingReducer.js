import { BookingInfo } from "../../core/models/bookingInfo";
import { actionTypes } from "../actions/Types";

const initialValue = {
    bookingInfo: new BookingInfo(),
    onBookingArr: [],
    tabActive: "1",
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
        case actionTypes.FINISH_BOOKING: {
            state.onBookingArr = [];
            return { ...state }
        }
        case actionTypes.OVER_10_SEATS: {
            let updateBookingArr = [...state.onBookingArr];
            updateBookingArr.pop()
            return { ...state, onBookingArr: updateBookingArr }
        }
        // case actionTypes.CHANGE_TAB: {
        //     state.tabActive = "2";
        //     return { ...state }
        // }
        // case actionTypes.CHANGE_TAB_TYPE: {
        //     state.tabActive = action.payload;
        //     return { ...state }
        // }


        default: return { ...state }

    }
}