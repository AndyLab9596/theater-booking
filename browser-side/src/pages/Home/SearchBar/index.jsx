import React, { useState } from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { getSingleMovieWithSchedule } from '../../../store/actions/ManageTheaterAction';
import { useSelector } from 'react-redux';
const { Option } = Select;


const SearchBar = ({ arrTheater, arrMovies }) => {

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
        console.log(value)
    }

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

                <Select style={{ width: 120 }} onChange={handleSelectRap}>
                    {data.rapRender?.map((item, index) => (
                        <Option value={item} key={index}>
                            {item}
                        </Option>
                    ))}
                </Select>

                <Select style={{ width: 120 }} onChange={handleSelectNgayXem}>
                    {data.ngayChieuRender?.map((item, index) => {
                        return (
                            <Option value={item} key={index}>
                                {item}
                            </Option>
                        )
                    })}
                </Select>

            </div>
        </div>
    );
};

export default SearchBar;