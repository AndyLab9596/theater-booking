import BookingTicketInfo from '../../core/models/bookingTicketInfo';
import { manageBookingService } from '../../services/manageBookingService';
import createAction from './createAction/index';
import { actionTypes } from './Types/index';


export const getBookingInfo = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const res = await manageBookingService.getBookingInfo(maLichChieu);
            dispatch(createAction(actionTypes.GET_BOOKING_INFO, res.data.content))

        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getBookingTicketInfo = (bookingInfo = new BookingTicketInfo()) => {
    return async (dispatch) => {
        try {
            const res = await manageBookingService.getBookingTicketInfo(bookingInfo);
            dispatch(createAction(actionTypes.GET_BOOKING_TICKET_INFO, res.data.content))
            console.log(res)
        }
        catch (error) {
            console.log(error)
        }
    }
}