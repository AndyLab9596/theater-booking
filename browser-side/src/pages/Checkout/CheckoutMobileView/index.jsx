import { ArrowRightOutlined, UserOutlined } from '@ant-design/icons';
import { message } from 'antd';
import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import BookingTicketInfo from '../../../core/models/bookingTicketInfo';
import createAction from '../../../store/actions/createAction';
import { getBookingTicketInfo } from '../../../store/actions/MangeBookingAction';
import { actionTypes } from '../../../store/actions/Types';
import BookingSummary from '../BookingSummary';
import CheckoutModal from '../CheckoutModal';
import SeatPlan from '../SeatPlan';

const CheckoutMobileView = ({ currentUser, handleBackToPrevPage, bookingInfo, onBookingArr, key, next, prev, movieId, activeStep, isChecked }) => {
    const { thongTinPhim, danhSachGhe } = bookingInfo

    // const bookingTicketInfo = new BookingTicketInfo();
    // bookingTicketInfo.maLichChieu = movieId.id;
    // bookingTicketInfo.danhSachVe = onBookingArr;
    // console.log(bookingTicketInfo)
    console.log(currentUser)

    const handleSendBookingTicket = () => {
        const bookingTicketInfo = new BookingTicketInfo();
        bookingTicketInfo.maLichChieu = movieId.id;
        bookingTicketInfo.danhSachVe = onBookingArr;
        bookingTicketInfo.taiKhoanNguoiDung = currentUser.taiKhoan

        dispatch(getBookingTicketInfo(bookingTicketInfo))
        message.success('Processing complete!')
        setTimeout(() => {
            history.push('/')
        }, 500)
    }

    const history = useHistory()
    const dispatch = useDispatch()

    console.log(activeStep, isChecked)

    const steps = ['Choosing', 'Payment', 'Booking result'];

    const bottomButtons = () => {
        switch (activeStep) {
            case 0:
                return { left: "Back home", right: "Continue" };
            case 1:
                return { left: "Back", right: "Continue" };
            case 2:
                return { left: "Back", right: "Check out" }
            default:
                return {}
        }
    }

    const handleBack = () => {
        if (activeStep === 0) {
            history.push('/')
        }
        if (activeStep === 1) {
            dispatch(createAction(actionTypes.MOBILE_SET_STEP, 0))
        }
        if (activeStep === 2) {
            dispatch(createAction(actionTypes.MOBILE_SET_STEP, 1))
        }
    }


    const handleNext = () => {
        if (activeStep === 0 && onBookingArr.length !== 0) {
            dispatch(createAction(actionTypes.MOBILE_SET_STEP, 1))
        }
        if (activeStep === 1) {

            dispatch(createAction(actionTypes.MOBILE_SET_STEP, 2))
        }
        if (activeStep === 2) {
            handleSendBookingTicket()
        }
    }


    return (
        <section>
            <header className="bg-bgColorDetail py-4 flex justify-between items-center px-5">

                {steps.map((step, index) => (

                    <Fragment key={index}>
                        {activeStep === index && (
                            <p className="text-lg font-semibold text-white mb-0">
                                {`${String(index + 1)}. ${step} `}
                            </p>
                        )}
                    </Fragment>
                ))}



                <div className="flex align-middle">
                    <UserOutlined
                        className="py-1.5 mr-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full h-8 w-8 leading-8"
                        style={{ fontSize: "20px", color: "white", fontWeight: 500 }}
                    />
                    <p className="text-pink-200 text-lg font-bold flex items-center border-r-2 border-indigo-500 pr-5 mb-0">
                        {currentUser?.hoTen}
                    </p>

                    <ArrowRightOutlined style={{ fontSize: "20px", color: "white", fontWeight: 500 }}
                        className="ml-1 py-1.5 "
                        onClick={() => handleBackToPrevPage()}
                    />
                </div>
            </header>

            <div className="bg-bgColorMain h-screen">
                {activeStep === 0 && <main>
                    <SeatPlan danhSachGhe={danhSachGhe}
                        thongTinPhim={thongTinPhim}
                        onBookingArr={onBookingArr}
                        currentUser={currentUser}
                        key={key} />
                </main>}

                {activeStep === 1 && <main>
                    <BookingSummary
                        movieId={movieId}
                        thongTinPhim={thongTinPhim}
                        onBookingArr={onBookingArr}
                        currentUser={currentUser}
                        next={next}
                        prev={prev}
                    />

                </main>}

                {activeStep === 2 && <main>
                    <CheckoutModal
                        thongTinPhim={thongTinPhim}
                        currentUser={currentUser}
                        onBookingArr={onBookingArr}
                    />
                </main>}


                <div className="flex justify-evenly h-12 fixed bottom-0 left-0 right-0">
                    <button
                        onClick={() => handleBack()}
                        className="bg-red-300 hover:bg-red-800 transition duration-300 w-full flex items-center justify-center cursor-pointer ">
                        <p className="text-lg font-semibold p-1">{bottomButtons().left}</p>
                    </button>
                    <button
                        disabled={onBookingArr.length === 0}
                        onClick={() => handleNext()}
                        className={`bg-green-300 hover:bg-green-800 transition duration-300 w-full flex items-center justify-center
                        ${(activeStep === 0 && onBookingArr.length === 0)
                                || (activeStep === 1 && !isChecked)

                                ? 'cursor-not-allowed' : 'cursor-pointer'}
                        `}>
                        <p className="text-lg font-semibold p-1">{bottomButtons().right}</p>
                    </button>
                </div>
            </div>

        </section>
    );
};

export default CheckoutMobileView;