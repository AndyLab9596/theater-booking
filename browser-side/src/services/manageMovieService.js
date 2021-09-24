
import { GROUPID } from "../utils/config";
import baseService from "./baseServices";

export class ManageMovieService extends baseService {
    constructor(props) {
        super()
    }

    getArrMovies = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }

    getArrMoviesPagination = (page) => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUPID}&soTrang=${page}&soPhanTuTrenTrang=8`)
    }
    // getArrMoviesPagination = (page) => {
    //     return this.get(`/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUPID}&soTrang=${page}&soPhanTuTrenTrang=8`)
    // }

    getSingleMovie = (id) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
    }
}

export const manageMovieService = new ManageMovieService();