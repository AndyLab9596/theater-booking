
import baseService from "./baseServices";

export class ManageBookingService extends baseService {
    constructor(props) {
        super()
    }
    getBookingInfo = (maLichChieu) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }

}

export const manageBookingService = new ManageBookingService();