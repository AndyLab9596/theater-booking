import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { getSingleMovieWithSchedule } from '../../../store/actions/ManageTheaterAction';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
const { Option } = Select;


const SearchBar = ({ arrTheater, arrMovies }) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { singleMovieWithSchedule } = useSelector(state => state.TheaterReducer)


    // const cumRapChieuDataMap = singleMovieWithSchedule.heThongRapChieu.map((item) => (
    //     item.cumRapChieu
    // ))

    // console.log('cumRapChieuData', cumRapChieuData)
    // console.log('singleMovieWithSchedule', singleMovieWithSchedule)
    // console.log('cumRapChieuDataMap', cumRapChieuDataMap)


    const [data, setData] = useState({

        // handleSelectMovie
        setPhim: "",
        rapRender: [],
        cumRapChieuData: [],
        startRequest: false,
        errorCallApi: "",

        // handleSelectRap
        setRap: "",
        ngayChieuRender: [],
        lichChieuPhimData: [],

        // handleSelectNgayXem
        setNgayXem: "",
        suatChieuRender: [],
        lichChieuPhimDataSelected: [],

        // handleSelectSuatChieu
        setSuatChieu: "",
        maLichChieu: "",

        // handleOpen
        openCtr: { phim: false, rap: false, ngayXem: false, suatChieu: false },
        // element:
        rootElementPopup: null,

    })

    const handleSelectMovie = (maPhim) => {
        if (!maPhim) return;
        setData((data) => ({
            ...data,
            setPhim: maPhim,
            openCtr: { ...data.openCtr, rap: true },
            // reset
            rapRender: [],
            cumRapChieuData: [],
            setRap: "",
            ngayChieuRender: [],
            lichChieuPhimData: [],
            setNgayXem: "",
            suatChieuRender: [],
            lichChieuPhimDataSelected: [],
            setSuatChieu: "",
            maLichChieu: "",
        }));
        dispatch(getSingleMovieWithSchedule(maPhim));
        const cumRapChieuData = singleMovieWithSchedule.heThongRapChieu?.reduce(
            (collect, item) => {
                return [...collect, ...item.cumRapChieu];
            },
            []
        );
        const rapRender = cumRapChieuData?.map((item) => item.tenCumRap);
        setData((data) => ({
            ...data,
            rapRender,
            cumRapChieuData,
        }))

    };


    // console.log(data.rapRender)

    const handleSelectRap = (value) => {
        // console.log(value)
        setData((data) => ({
            ...data,
            setRap: value,
            openCtr: { ...data.openCtr, ngayXem: true },
            // reset 
            ngayChieuRender: [],
            lichChieuPhimData: [],
            setNgayXem: "",
            suatChieuRender: [],
            lichChieuPhimDataSelected: [],
            setSuatChieu: "",
            maLichChieu: "",
        }));
        const indexSelect = data.cumRapChieuData.findIndex((item) => item.tenCumRap === value)
        const lichChieuPhimData = data?.cumRapChieuData[indexSelect]?.lichChieuPhim
        const ngayChieuRender = lichChieuPhimData?.map((item) => {
            return item.ngayChieuGioChieu.slice(0, 10)
        })
        const ngayChieuRenderKhongTrungLap = [...new Set(ngayChieuRender)]
        setData((data) => ({
            ...data,
            ngayChieuRender: ngayChieuRenderKhongTrungLap,
            lichChieuPhimData,
        }))
        console.log('ngayChieuRender', ngayChieuRenderKhongTrungLap);
    }

    const handleSelectNgayXem = (value) => {
        setData((data) => ({
            ...data,
            setNgayXem: value,
            openCtr: { ...data.openCtr, suatChieu: true },
            // reset
            suatChieuRender: [],
            lichChieuPhimDataSelected: [],
            setSuatChieu: "",
            maLichChieu: "",
        }));

        const lichChieuPhimDataSelected = data.lichChieuPhimData.filter((item) => {
            // lấy tất cả item có ngày chiếu giống với ngày chiếu đã chọn
            if (item.ngayChieuGioChieu.slice(0, 10) === value) {
                return true;
            }
            return false;
        });
        const suatChieuRender = lichChieuPhimDataSelected.map((item) => {
            // cắt lấy giờ chiếu trong ngayChieuGioChieu: "2019-01-01T20:00:00" > "20:00"
            return item.ngayChieuGioChieu.slice(11, 16);
        });
        setData((data) => ({
            ...data,
            suatChieuRender,
            lichChieuPhimDataSelected,
        }));
    }

    // input: suatChieu
    // output: setSuatChieu(suatChieu), maLichChieu(suatChieu)[maLichChieu]
    const handleSelectSuatChieu = (value) => {
        setData((data) => ({
            ...data,
            setSuatChieu: value,
            // reset
            maLichChieu: "",
        }));
        const indexMaLichChieuSelect = data.lichChieuPhimDataSelected.findIndex(
            (item) => item.ngayChieuGioChieu.slice(11, 16) === value
        );
        const maLichChieu =
            data.lichChieuPhimDataSelected[indexMaLichChieuSelect].maLichChieu;
        setData((data) => ({ ...data, maLichChieu }));
    };



    return (
        <div className="max-w-4xl h-24 mx-auto">
            <div className="">
                <Select
                    style={{ minWidth: '200px' }}
                    onChange={handleSelectMovie}
                    placeholder="Select a movie"
                >
                    {arrMovies.map(movies => (
                        <Option key={movies.maPhim}
                            value={movies.maPhim}
                        >
                            {movies.tenPhim}
                        </Option>
                    ))}
                </Select>

                <Select style={{ width: 200 }} onChange={handleSelectRap}>
                    {data.rapRender?.map((item, index) => (
                        <Option value={item} key={index}>
                            {item}
                        </Option>
                    ))}
                </Select>

                <Select style={{ width: 200 }} onChange={handleSelectNgayXem}>
                    {data.ngayChieuRender?.map((item, index) => {
                        return (
                            <Option value={item} key={index}>
                                {item}
                            </Option>
                        )
                    })}
                </Select>

                <Select style={{ width: 200 }} onChange={handleSelectSuatChieu}>
                    {data.suatChieuRender?.map((item, index) => {
                        return (
                            <Option value={item} key={index}>
                                {item}
                            </Option>
                        )
                    })}
                </Select>

                <button onClick={() => history.push(`/checkout/${data.maLichChieu}`)}>Mua vé</button>

            </div>
        </div>
    );
};

export default SearchBar;