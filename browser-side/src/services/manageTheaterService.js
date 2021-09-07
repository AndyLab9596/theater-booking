
import { GROUPID } from "../utils/config";
import baseService from "./baseServices";

export class ManageTheaterService extends baseService {
    constructor(props) {
        super()
    }

    getShowScheduleTheaterLocation = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }


}

export const manageTheaterService = new ManageTheaterService();