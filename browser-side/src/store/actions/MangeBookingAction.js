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
            // 1 loại là dispatch action lên thẳng reducer  còn 1 loại là dispatch action lên lại middleware
            dispatch(createAction(actionTypes.DISPLAY_LOADING))
            const res = await manageBookingService.getBookingTicketInfo(bookingInfo);
            dispatch(createAction(actionTypes.GET_BOOKING_TICKET_INFO, res.data.content))
            // nếu đặt vé thành công gọi api load lại phòng vé 
            await dispatch(getBookingInfo(bookingInfo.maLichChieu))
            // đồng thời clear mảng bên booking summary
            await dispatch(createAction(actionTypes.FINISH_BOOKING))
            await dispatch(createAction(actionTypes.HIDE_LOADING))
            dispatch(createAction(actionTypes.CHANGE_TAB))
            console.log(res)
        }
        catch (error) {
            console.log(error)
        }
    }
}