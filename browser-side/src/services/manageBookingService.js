
import baseService from "./baseServices";
import BookingTicketInfo from '../core/models/bookingTicketInfo'
export class ManageBookingService extends baseService {
    constructor(props) {
        super()
    }
    getBookingInfo = (maLichChieu) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    getBookingTicketInfo = (bookingInfo = new BookingTicketInfo()) => {
        return this.post(`/api/QuanLyDatVe/DatVe`, bookingInfo)
    }

}

export const manageBookingService = new ManageBookingService();