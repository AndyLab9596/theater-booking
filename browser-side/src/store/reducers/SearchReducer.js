import { actionTypes } from "../actions/Types"

const initialState = {
    // handleSelectMovie
    thongTinLichChieu: {},
    rapRender: [],
    cumRapChieuData: [],
    startRequest: false,

    // handleSelectRap
    ngayChieuRender: [],
    lichChieuPhimData: [],

    // handleSelectNgayXem
    suatChieuRender: [],
    lichChieuPhimDataSelected: [],

    // handleSelectSuatChieu
    maLichChieu: "",




}

export const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIE_SCHEDULE: {
            const cumRapChieuData = action.payload.heThongRapChieu?.reduce(
                (collect, item) => {
                    return [...collect, ...item.cumRapChieu];
                },
                []
            );
            const rapRender = cumRapChieuData?.map((item) => item.tenCumRap);
            state.cumRapChieuData = cumRapChieuData
            state.thongTinLichChieu = cumRapChieuData;
            state.rapRender = rapRender;
            return { ...state }
        }

        case actionTypes.SELECT_RAPCHIEU: {
            state.ngayChieuRender = [];
            state.lichChieuPhimData = [];
            state.suatChieuRender = [];
            state.lichChieuPhimDataSelected = [];
            state.maLichChieu = "";
            const indexSelect = state.cumRapChieuData.findIndex((item) => item.tenCumRap === action.payload)
            const lichChieuPhimData = state.cumRapChieuData[indexSelect]?.lichChieuPhim
            const ngayChieuRender = lichChieuPhimData?.map((item) => {
                return item.ngayChieuGioChieu.slice(0, 10)
            })
            const ngayChieuRenderKhongTrungLap = [...new Set(ngayChieuRender)]
            state.ngayChieuRender = ngayChieuRenderKhongTrungLap;
            state.lichChieuPhimData = lichChieuPhimData;
            return { ...state }
        }

        case actionTypes.SELECT_NGAYXEM: {
            state.suatChieuRender = [];
            state.lichChieuPhimDataSelected = [];
            state.maLichChieu = "";
            const lichChieuPhimDataSelected = state.lichChieuPhimData.filter((item) => {
                // lấy tất cả item có ngày chiếu giống với ngày chiếu đã chọn
                if (item.ngayChieuGioChieu.slice(0, 10) === action.payload) {
                    return true;
                }
                return false;
            });
            const suatChieuRender = lichChieuPhimDataSelected.map((item) => {
                // cắt lấy giờ chiếu trong ngayChieuGioChieu: "2019-01-01T20:00:00" > "20:00"
                return item.ngayChieuGioChieu.slice(11, 16);
            });
            state.suatChieuRender = suatChieuRender;
            state.lichChieuPhimDataSelected = lichChieuPhimDataSelected;
            return { ...state }
        }

        case actionTypes.SELECT_SUATCHIEU: {
            state.maLichChieu = "";
            const indexMaLichChieuSelect = state.lichChieuPhimDataSelected.findIndex(
                (item) => item.ngayChieuGioChieu.slice(11, 16) === action.payload
            );
            const maLichChieu = state.lichChieuPhimDataSelected[indexMaLichChieuSelect].maLichChieu;
            state.maLichChieu = maLichChieu
            return { ...state }
        }

        default:
            return { ...state }
    }
}

