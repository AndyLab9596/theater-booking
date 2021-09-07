
import { GROUPID } from "../utils/config";
import baseService from "./baseServices";

export class ManageMovieService extends baseService {
    constructor(props) {
        super()
    }
    getArrBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
    }

    getArrMovies = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }

    getArrMoviesPagination = (page) => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUPID}&soTrang=${page}&soPhanTuTrenTrang=8`)
    }

}

export const manageMovieService = new ManageMovieService();