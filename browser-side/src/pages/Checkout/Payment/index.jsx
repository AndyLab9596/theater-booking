import { CloseOutlined, InfoOutlined, UserOutlined } from '@ant-design/icons';
import { message, Modal, Result } from 'antd';
import _ from 'lodash';
import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import BookingTicketInfo from '../../../core/models/bookingTicketInfo';
import createAction from '../../../store/actions/createAction';
import { getBookingTicketInfo } from '../../../store/actions/MangeBookingAction';
import { actionTypes } from '../../../store/actions/Types';
import formMoney from '../../../utils/formMoney';
import TimeOut from '../TimeOut';
import CheckoutModal from '../CheckoutModal';
import { useHistory } from 'react-router';
import './payment.scss'
import SeatPlan from '../SeatPlan';
import BookingSummary from '../BookingSummary';

const Payment = ({
    bookingInfo,
    movieId,
    onBookingArr,
    currentUser,
    next,
    prev,
    key
}) => {

    const handleChange = (e) => {
        setChecked(e.target.checked)
    }
    const history = useHistory()

    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false)

    // const handleSendBookingTicket = () => {
    //     if (!checked) return
    //     const bookingTicketInfo = new BookingTicketInfo();
    //     bookingTicketInfo.maLichChieu = movieId.id;
    //     bookingTicketInfo.danhSachVe = onBookingArr;
    //     bookingTicketInfo.taiKhoanNguoiDung = currentUser.taiKhoan;
    //     setIsModalVisible(false)
    //     dispatch(getBookingTicketInfo(bookingTicketInfo))
    //     message.success('Processing complete!')
    //     setTimeout(() => {
    //         history.push('/')
    //     }, 500)
    // }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {

        if (checked && onBookingArr.length > 0) {
            setIsModalVisible(true);
        }
        next()
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        prev()
    };

    const { thongTinPhim, danhSachGhe } = bookingInfo
    console.log(bookingInfo)

    const renderSeats = () => {
        return danhSachGhe.map((seat, index) => {

            let classVipSeat = seat.loaiGhe === 'Vip' ? 'seatVip' : '';
            let classSeatServed = seat.daDat === true ? 'seatServed' : '';
            let classSeatOnChoose = ''
            let indexSeatOnChoose = onBookingArr.findIndex(onBooking => onBooking.maGhe === seat.maGhe);
            if (indexSeatOnChoose !== -1) {
                classSeatOnChoose = 'seatOnChoose'
            }
            let classChooseByMe = '';
            if (currentUser?.taiKhoan === seat.taiKhoanNguoiDat) {
                classChooseByMe = 'seatChooseByMe'
            }


            return (
                <Fragment key={index}>
                    <button
                        onClick={() => {
                            dispatch(createAction(actionTypes.BOOKING_SEAT, seat));

                        }}
                        disabled={seat.daDat} className={`
                        w-8 h-8 rounded-lg m-1 bg-blue-500 
                        hover:bg-greenText transition duration-300 ease-in-out
                        ${classVipSeat} 
                        ${classSeatServed} 
                        ${classSeatOnChoose} 
                        ${classChooseByMe}
                        `}
                        key={index}>
                        {seat.daDat ? classChooseByMe !== '' ?
                            <UserOutlined style={{ color: "#31d7a9" }} />
                            : <CloseOutlined /> : seat.stt}
                    </button>
                    {(index + 1) % 16 === 0 ? <br /> : ''}
                </Fragment>
            )
        })
    }


    return (
        <div className="">
            <div className="grid grid-cols-12 ">
                <div className="col-span-8">
                    <SeatPlan

                        danhSachGhe={danhSachGhe}
                        thongTinPhim={thongTinPhim}
                        onBookingArr={onBookingArr}
                        currentUser={currentUser}
                        key={key}
                    />

                    {/* <div className="flex justify-between align-middle">
                        <div className="ml-10 text-left">
                            <h3 className="text-white text-xl font-bold">{thongTinPhim.tenCumRap} </h3>
                            <p className="text-gray-400 text-base">{thongTinPhim.diaChi} - {thongTinPhim.tenRap}</p>
                        </div>
                        <div className="mr-10">
                            <p className="text-gray-400 text-base">Time Out</p>
                            <TimeOut key={key} />
                        </div>
                    </div>


                    <div className="py-5">
                        <div className="flex justify-center align-middle">
                            <img src="http://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png" alt="screen" />
                        </div>
                        <h4 className="text-xl text-white font-bold">Screen</h4>
                    </div>


                    <div>
                        {renderSeats()}
                    </div>
                    <div className="mt-5 flex justify-center">
                        <table className="divide-y divide-gray-200 w-2/3 table-auto">
                            <thead>
                                <tr className="flex justify-evenly space-x-5">
                                    <th className="flex justify-center">
                                        <button className="w-8 h-8 rounded-lg m-1 bg-blue-500 "></button>
                                        <span className="text-white leading-10">Available</span>
                                    </th>
                                    <th className="flex justify-center">
                                        <button className="w-8 h-8 rounded-lg m-1 bg-yellow-500 "></button>
                                        <span className="text-white leading-10">Vip</span>
                                    </th>
                                    <th className="flex justify-center">
                                        <button className="w-8 h-8 rounded-lg m-1 bg-red-500 ">
                                            <CloseOutlined />
                                        </button>
                                        <span className="text-white leading-10">Served</span>
                                    </th>
                                    <th className="flex justify-center">
                                        <button className="w-8 h-8 rounded-lg m-1 bg-green-500 "></button>
                                        <span className="text-white leading-10">Choosing</span>
                                    </th>
                                    <th className="flex justify-center">
                                        <button className="w-8 h-8 rounded-lg m-1 bg-pink-500 "></button>
                                        <span className="text-white leading-10">Others</span>
                                    </th>
                                    <th className="flex justify-center">
                                        <button className="w-8 h-8 rounded-lg m-1 bg-white text-greenText ">
                                            <UserOutlined />
                                        </button>
                                        <span className="text-white leading-10">My</span>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div> */}


                </div>
                <div className="col-span-4 ">
                    <BookingSummary
                        movieId={movieId}
                        thongTinPhim={thongTinPhim}
                        onBookingArr={onBookingArr}
                        currentUser={currentUser}
                        next={next}
                        prev={prev}

                    />

                </div>
                {/* <div className="p-5 col-span-4 divide-y-2 divide-yellow-600 divide-dashed">
                    <h3 className="text-white text-3xl text-center pb-4">
                        BOOKING SUMMARY
                    </h3>

                    <div className="py-2 text-left text-white">
                        <h3 className="text-xl text-greenText">{thongTinPhim.tenPhim}</h3>
                        <p>Address: <span className="text-gray-400">{thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</span></p>
                        <p>Show Time: <span className="text-gray-400">{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</span> </p>
                    </div>

                    <div className="flex flex-row py-2">
                        <div className="flex-none">
                            <span className="text-white text-lg">Seats:</span>
                        </div>
                        <div className="flex-grow flex-wrap">
                            {_.sortBy(onBookingArr, ['stt']).map((onBookingSeat, index) => {
                                return <span key={index} className="text-base text-gray-400 m-1">
                                    {onBookingSeat.stt}
                                </span>
                            })}
                        </div>

                        <div className="text-right">
                            <span className="text-green-500 text-lg">
                                {formMoney(
                                    onBookingArr.reduce((total, seat, index) => {
                                        return total += seat.giaVe
                                    }, 0)
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="py-2  text-left">
                        <p className="text-white">User name: <span className="text-gray-400">{currentUser?.taiKhoan}</span></p>
                        <p className="text-white">Email: <span className="text-gray-400">{currentUser?.email}</span></p>
                        <p className="text-white">Phone: <span className="text-gray-400">{currentUser?.soDT}</span></p>
                    </div>

                    <div className="py-2">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-14 w-14 text-indigo-600"
                                onChange={(e) => handleChange(e)} />
                            <p className="ml-2 text-white">
                                I Accept" button, you represent that you have read and understand this agreement,
                                any additional terms and conditions imposed by the promoter
                            </p>
                        </label>
                    </div>

                    <div className="pt-5">
                        <button
                            className={
                                `px-12 py-3 font-semibold text-sm rounded-full text-white duration-300 ease-in-out min-w-52
                            ${checked && onBookingArr.length > 0 ? `bg-gradient-to-r from-yellow-400 via-red-500 to-indigo-700 hover:shadow-button`
                                    : `disabled:opacity-50 bg-transparent border-2 border-indigo-500 cursor-not-allowed`
                                }
                        `}
                            onClick={showModal}
                        >
                            BOOKING TICKET
                        </button>

                    </div>
                    <Modal
                        visible={isModalVisible}
                        footer={null}
                        centered
                        keyboard
                        closable={false}
                        onCancel
                        bodyStyle={{ padding: 0, margin: 0 }}
                    >
                        <CheckoutModal
                            currentUser={currentUser}
                            onBookingArr={onBookingArr}
                            thongTinPhim={thongTinPhim}
                            handleSendBookingTicket={handleSendBookingTicket}
                            handleCancel={handleCancel} />
                    </Modal>
                </div> */}
            </div>

        </div>

    );
};

export default Payment;