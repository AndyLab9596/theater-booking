
import baseService from "./baseServices";

export class ManageMovieService extends baseService {
    constructor(props) {
        super()
    }
    getArrBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
    }

}

export const manageMovieService = new ManageMovieService();