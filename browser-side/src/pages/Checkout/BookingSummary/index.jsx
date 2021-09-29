import { message, Modal } from 'antd';
import _ from 'lodash';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import BookingTicketInfo from '../../../core/models/bookingTicketInfo';
import createAction from '../../../store/actions/createAction';
import { getBookingTicketInfo } from '../../../store/actions/MangeBookingAction';
import { actionTypes } from '../../../store/actions/Types';
import formMoney from '../../../utils/formMoney';
import CheckoutModal from '../CheckoutModal';

const BookingSummary = ({ thongTinPhim, onBookingArr, currentUser, next, prev, movieId }) => {
    const [checked, setChecked] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory()
    // const { isChecked, tabActive } = useSelector(state => state.BookingReducer)

    const handleChange = (e) => {
        setChecked(e.target.checked)

    }

    useEffect(() => {
        dispatch(createAction(actionTypes.SET_CHECKED, checked))
    }, [checked])

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
    const handleSendBookingTicket = () => {
        if (!checked) return
        const bookingTicketInfo = new BookingTicketInfo();
        bookingTicketInfo.maLichChieu = movieId.id;
        bookingTicketInfo.danhSachVe = onBookingArr;
        bookingTicketInfo.taiKhoanNguoiDung = currentUser.taiKhoan
        setIsModalVisible(false)
        dispatch(getBookingTicketInfo(bookingTicketInfo))
        message.success('Processing complete!')
        setTimeout(() => {
            history.push('/')
        }, 500)
    }
    return (
        <div className="bg-bgColorMain h-full pt-5 px-5 divide-y-2 divide-yellow-600 divide-dashed ">
            <h3 className="text-white text-3xl text-center">
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

            <div className="pt-5 hidden sm:block">
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
        </div>
    );
};

export default BookingSummary;