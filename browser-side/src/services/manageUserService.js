
import baseService from "./baseServices";

export class ManageUserService extends baseService {
    constructor(props) {
        super()
    }
    loginUser = (values) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, values)
    }

}

export const manageUserService = new ManageUserService();