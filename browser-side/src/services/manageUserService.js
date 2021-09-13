
import baseService from "./baseServices";

export class ManageUserService extends baseService {
    constructor(props) {
        super()
    }

    loginUser = (values) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, values)
    }

    fetchUser = () => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }

    registerUser = (values) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, values)
    }

    fetchUserInfo = () => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }

}

export const manageUserService = new ManageUserService();