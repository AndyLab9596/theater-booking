import React, { useState } from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { searchSingleMovie } from '../../../store/actions/ManageSearchBarAction';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import createAction from '../../../store/actions/createAction';
import { actionTypes } from '../../../store/actions/Types';
const { Option } = Select;


const SearchBar2 = ({ arrTheater, arrMovies }) => {

    const history = useHistory()
    const {
        thongTinLichChieu,
        rapRender,
        ngayChieuRender,
        suatChieuRender,
        maLichChieu,

    } = useSelector(state => state.SearchReducer);
    // console.log(thongTinLichChieu)

    // const [data, setData] = useState({

    // // handleSelectMovie
    // setPhim: "",
    // rapRender: [],
    // cumRapChieuData: [],
    // startRequest: false,
    // errorCallApi: "",

    // // handleSelectRap
    // setRap: "",
    // ngayChieuRender: [],
    // lichChieuPhimData: [],

    // // handleSelectNgayXem
    // setNgayXem: "",
    // suatChieuRender: [],
    // lichChieuPhimDataSelected: [],

    // // handleSelectSuatChieu
    // setSuatChieu: "",
    // maLichChieu: "",

    // // handleOpen
    // openCtr: { phim: false, rap: false, ngayXem: false, suatChieu: false },
    // // element:
    // rootElementPopup: null,

    // })


    const dispatch = useDispatch()
    const handleSelectMovie = (maPhim) => {
        if (!maPhim) return;
        // setData((data) => ({
        //     ...data,
        //     setPhim: maPhim,
        //     openCtr: { ...data.openCtr, rap: true },
        //     // reset
        //     rapRender: [],
        //     cumRapChieuData: [],
        //     setRap: "",
        //     ngayChieuRender: [],
        //     lichChieuPhimData: [],
        //     setNgayXem: "",
        //     suatChieuRender: [],
        //     lichChieuPhimDataSelected: [],
        //     setSuatChieu: "",
        //     maLichChieu: "",
        // }));
        dispatch(searchSingleMovie(maPhim));
        // const cumRapChieuData = thongTinLichChieu.heThongRapChieu?.reduce(
        //     (collect, item) => {
        //         return [...collect, ...item.cumRapChieu];
        //     },
        //     []
        // );
        console.log('cumRapChieuData', thongTinLichChieu)
        // setData((data) => ({
        //     ...data,
        //     rapRender: rapRender,
        //     cumRapChieuData: thongTinLichChieu,
        // }))
        console.log('rapRender', rapRender)

    }

    const handleSelectRap = (value) => {
        // console.log(value)
        // setData((data) => ({
        //     ...data,
        //     setRap: value,
        //     openCtr: { ...data.openCtr, ngayXem: true },
        //     // reset 
        //     ngayChieuRender: [],
        //     lichChieuPhimData: [],
        //     setNgayXem: "",
        //     suatChieuRender: [],
        //     lichChieuPhimDataSelected: [],
        //     setSuatChieu: "",
        //     maLichChieu: "",
        // }));
        // const indexSelect = data.cumRapChieuData.findIndex((item) => item.tenCumRap === value)
        // const lichChieuPhimData = data?.cumRapChieuData[indexSelect]?.lichChieuPhim
        // const ngayChieuRender = lichChieuPhimData?.map((item) => {
        //     return item.ngayChieuGioChieu.slice(0, 10)
        // })
        // const ngayChieuRenderKhongTrungLap = [...new Set(ngayChieuRender)]
        // setData((data) => ({
        //     ...data,
        //     ngayChieuRender: ngayChieuRenderKhongTrungLap,
        //     lichChieuPhimData,
        // }))
        // console.log('ngayChieuRender', ngayChieuRenderKhongTrungLap);
        dispatch(createAction(actionTypes.SELECT_RAPCHIEU, value))

    }

    const handleSelectNgayXem = (value) => {
        // setData((data) => ({
        //     ...data,
        //     setNgayXem: value,
        //     openCtr: { ...data.openCtr, suatChieu: true },
        //     // reset
        //     suatChieuRender: [],
        //     lichChieuPhimDataSelected: [],
        //     setSuatChieu: "",
        //     maLichChieu: "",
        // }));

        // const lichChieuPhimDataSelected = data.lichChieuPhimData.filter((item) => {
        //     // lấy tất cả item có ngày chiếu giống với ngày chiếu đã chọn
        //     if (item.ngayChieuGioChieu.slice(0, 10) === value) {
        //         return true;
        //     }
        //     return false;
        // });
        // const suatChieuRender = lichChieuPhimDataSelected.map((item) => {
        //     // cắt lấy giờ chiếu trong ngayChieuGioChieu: "2019-01-01T20:00:00" > "20:00"
        //     return item.ngayChieuGioChieu.slice(11, 16);
        // });
        // setData((data) => ({
        //     ...data,
        //     suatChieuRender,
        //     lichChieuPhimDataSelected,
        // }));
        // console.log('ngayChieuRender', suatChieuRender);
        dispatch(createAction(actionTypes.SELECT_NGAYXEM, value))
        console.log(value)
    }

    // input: suatChieu
    // output: setSuatChieu(suatChieu), maLichChieu(suatChieu)[maLichChieu]
    const handleSelectSuatChieu = (value) => {
        // setData((data) => ({
        //     ...data,
        //     setSuatChieu: value,
        //     // reset
        //     maLichChieu: "",
        // }));
        // const indexMaLichChieuSelect = data.lichChieuPhimDataSelected.findIndex(
        //     (item) => item.ngayChieuGioChieu.slice(11, 16) === value
        // );
        // const maLichChieu =
        //     data.lichChieuPhimDataSelected[indexMaLichChieuSelect].maLichChieu;
        // setData((data) => ({ ...data, maLichChieu }));
        // console.log('maLichChieu', maLichChieu)
        dispatch(createAction(actionTypes.SELECT_SUATCHIEU, value))
        console.log(value)
    };


    return (
        <div className="max-w-4xl h-24 mx-auto">

            <Select defaultValue="Select Movie" style={{ width: 120 }} onChange={handleSelectMovie}>
                {arrMovies.map((movie, index) => {
                    return (
                        <Option value={movie.maPhim} key={index}>{movie.tenPhim}</Option>
                    )
                })}
            </Select>

            <Select style={{ width: 200 }} onChange={handleSelectRap}>
                {rapRender?.map((item, index) => (
                    <Option value={item} key={index}>
                        {item}
                    </Option>
                ))}
            </Select>

            <Select style={{ width: 200 }} onChange={handleSelectNgayXem}>
                {ngayChieuRender?.map((item, index) => {
                    return (
                        <Option value={item} key={index}>
                            {item}
                        </Option>
                    )
                })}
            </Select>

            <Select style={{ width: 200 }} onChange={handleSelectSuatChieu}>
                {suatChieuRender?.map((item, index) => {
                    return (
                        <Option value={item} key={index}>
                            {item}
                        </Option>
                    )
                })}
            </Select>

            <button onClick={() => history.push(`/checkout/${maLichChieu}`)}>Mua vé</button>


        </div>
    );
};

export default SearchBar2;