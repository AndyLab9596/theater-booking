
import baseService from "./baseServices";

export class ManageUserService extends baseService {
    constructor(props) {
        super()
    }

    loginUser = (values) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, values)
    }

    fetchUser = (value) => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`, value)
    }

    registerUser = (values) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, values)
    }

}

export const manageUserService = new ManageUserService();