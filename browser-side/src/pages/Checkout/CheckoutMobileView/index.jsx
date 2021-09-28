import { ArrowRightOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import BookingSummary from '../BookingSummary';
import CheckoutModal from '../CheckoutModal';
import SeatPlan from '../SeatPlan';

const CheckoutMobileView = ({ currentUser, handleBackToPrevPage, bookingInfo, onBookingArr, key, next, prev, movieId }) => {
    const { thongTinPhim, danhSachGhe } = bookingInfo

    const steps = ['Choosing', 'Payment', 'Booking result']

    return (
        <section>
            <header className="bg-bgColorDetail py-4 flex justify-between items-center px-5">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-300 hover:text-red-600 transition duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>

                {/* {steps.map((step, index) => (
                    <p key={index} >
                        {step}
                    </p>
                ))} */}
                <p className="text-lg font-semibold text-white mb-0">
                    01. CHOOSING
                </p>

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
                {/* <main>
                    <SeatPlan danhSachGhe={danhSachGhe}
                        thongTinPhim={thongTinPhim}
                        onBookingArr={onBookingArr}
                        currentUser={currentUser}
                        key={key} />
                </main> */}

                {/* <main>
                    <BookingSummary
                        movieId={movieId}
                        thongTinPhim={thongTinPhim}
                        onBookingArr={onBookingArr}
                        currentUser={currentUser}
                        next={next}
                        prev={prev}
                    />

                </main> */}

                <main>
                    <CheckoutModal
                        thongTinPhim={thongTinPhim}
                        currentUser={currentUser}
                        onBookingArr={onBookingArr}
                    />
                </main>


                <div className="flex justify-evenly h-16 fixed bottom-0 left-0 right-0">
                    <div className="bg-red-300 hover:bg-red-800 transition duration-300 w-full flex items-center justify-center cursor-pointer ">
                        <p className="text-lg font-semibold p-1">Prev Step</p>
                    </div>
                    <div className="bg-green-300 hover:bg-green-800 transition duration-300 w-full flex items-center justify-center cursor-pointer">
                        <p className="text-lg font-semibold p-1">Next Step</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CheckoutMobileView;