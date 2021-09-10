
import { GROUPID } from "../utils/config";
import baseService from "./baseServices";

export class ManageTheaterService extends baseService {
    constructor(props) {
        super()
    }

    getShowScheduleTheaterLocation = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    getSingleMovieWithSchedule = (id) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
    }

}

export const manageTheaterService = new ManageTheaterService();