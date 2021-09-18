import { Alert, Select, Tooltip } from 'antd';
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import createAction from '../../../../store/actions/createAction';
import { searchSingleMovie } from '../../../../store/actions/ManageSearchBarAction';
import { actionTypes } from '../../../../store/actions/Types';
import "./searchBar.scss"
import { DownOutlined } from '@ant-design/icons';

const { Option } = Select;


const SearchBar = ({ arrMovies }) => {


    const history = useHistory()
    const {
        thongTinLichChieu,
        rapRender,
        ngayChieuRender,
        suatChieuRender,
        maLichChieu,

    } = useSelector(state => state.SearchReducer);

    const dispatch = useDispatch()
    const handleSelectMovie = (maPhim) => {
        if (!maPhim) return;

        dispatch(searchSingleMovie(maPhim));

        console.log('cumRapChieuData', thongTinLichChieu)

        console.log('rapRender', rapRender)

    }

    const handleSelectRap = (value) => {

        dispatch(createAction(actionTypes.SELECT_RAPCHIEU, value))

    }

    const handleSelectNgayXem = (value) => {
        dispatch(createAction(actionTypes.SELECT_NGAYXEM, value))
        console.log(value)
    }

    const handleSelectSuatChieu = (value) => {
        dispatch(createAction(actionTypes.SELECT_SUATCHIEU, value))
        console.log(value)
    };

    const handleBookingTicket = () => {
        if (!maLichChieu) return
        history.push(`/checkout/${maLichChieu}`)

    }

    // const [arrowMode, setArrowMode] = useState(false);
    // console.log('arrowMode', arrowMode)


    return (
        <div className="w-full absolute transform -translate-y-1/4 mx-auto">

            <div className="container max-w-5xl mx-auto">

                {/* Có thể chèn background linear gradient chỗ này để cho đẹp hơn, cần nâng cấp !!! */}
                <div className="py-10 px-8 bg-cover bg-center bg-no-repeat rounded-xl"
                    style={{ backgroundImage: "url('http://pixner.net/boleto/demo/assets/images/ticket/ticket-bg01.jpg')" }}>

                    <div className="grid grid-cols-2">
                        <div className="text-left">
                            <h6 className="text-lg font-semibold text-greenText mb-4 -mt-2">WELCOME TO BOLETO</h6>
                            <h3 className="text-3xl font-bold text-white leading-6">WHAT ARE YOUT LOOKING FOR?</h3>
                        </div>
                        <div className="flex justify-center items-center">
                            <Tooltip title="Choose your movie then booking !">
                                <button
                                    className={`${maLichChieu ? 'button--action' : 'button--transparent cursor-not-allowed'}`}
                                    onClick={() => handleBookingTicket()}>
                                    BOOKING TICKET
                                </button>
                            </Tooltip>
                        </div>

                    </div>

                    <div className="
                    p-8 mt-8 shadow-2xl 
                    border-t-2 border-b-2 border-indigo-500
                    bg-black
                    bg-opacity-50
                    max-h-full
                    ">
                        <Select
                            // className="searchBar"

                            placeholder={
                                <div className="flex items-center">
                                    <h6 className="mr-2 text-lg text-greenText font-semibold">Select Movie</h6>
                                    <DownOutlined style={{
                                        color: "#c1c1c1", fontSize: "14px", marginBottom: "8px",
                                        // transform: 'rotate(180deg)', transition: 'all .2s linear'
                                    }} />
                                </div>
                            }
                            style={{ width: "25%", fontSize: '20px', color: "#31d7a9" }}
                            onChange={handleSelectMovie}
                            bordered={false}
                            // suffixIcon={<DownOutlined style={{ color: "#c1c1c1", fontSize: "14px", marginBottom: "8px" }} />}
                            // onDropdownVisibleChange={() => setArrowMode((state) => !state)}
                            showArrow={false}
                        >
                            {arrMovies.map((movie, index) => {
                                return (
                                    <Option value={movie.maPhim} key={index}>{movie.tenPhim}</Option>
                                )
                            })}

                        </Select>

                        <Select
                            notFoundContent={
                                <Alert showIcon message="Choose movie first " type="error" />
                            }
                            placeholder={
                                <div className="flex items-center">
                                    <h6 className="mr-2 text-lg text-greenText font-semibold">Select Theater</h6>
                                    <DownOutlined style={{
                                        color: "#c1c1c1", fontSize: "14px", marginBottom: "8px",

                                    }} />
                                </div>
                            }
                            bordered={false}
                            disabled={!rapRender}
                            style={{ width: "25%", fontSize: '20px', color: "#31d7a9" }}
                            onChange={handleSelectRap}
                            showArrow={false}
                        >
                            {rapRender?.map((item, index) => (
                                <Option value={item} key={index}>
                                    {item}
                                </Option>
                            ))}
                        </Select>

                        <Select
                            notFoundContent={
                                <Alert showIcon message="Movie and theater first" type="error" />
                            }
                            bordered={false}
                            placeholder={
                                <div className="flex items-center">
                                    <h6 className="mr-2 text-lg text-greenText font-semibold">Select Day</h6>
                                    <DownOutlined style={{
                                        color: "#c1c1c1", fontSize: "14px", marginBottom: "8px",

                                    }} />
                                </div>
                            }
                            style={{ width: "25%", fontSize: '20px', color: "#31d7a9" }}
                            onChange={handleSelectNgayXem}
                            disabled={!ngayChieuRender}
                            showArrow={false}
                        >
                            {ngayChieuRender?.map((item, index) => {
                                return (
                                    <Option value={item} key={index}>
                                        {item}
                                    </Option>
                                )
                            })}
                        </Select>

                        <Select
                            notFoundContent={
                                <Alert showIcon message="Movie, theater, day are required!" type="error" />
                            }
                            bordered={false}
                            placeholder={
                                <div className="flex items-center">
                                    <h6 className="mr-2 text-lg text-greenText font-semibold">Select Time</h6>
                                    <DownOutlined style={{
                                        color: "#c1c1c1", fontSize: "14px", marginBottom: "8px",

                                    }} />
                                </div>
                            }
                            style={{ width: "25%", fontSize: '20px', color: "#31d7a9" }}
                            onChange={handleSelectSuatChieu}
                            disabled={!ngayChieuRender}
                            showArrow={false}
                        >
                            {suatChieuRender?.map((item, index) => {
                                return (
                                    <Option value={item} key={index}>
                                        {item}
                                    </Option>
                                )
                            })}
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;