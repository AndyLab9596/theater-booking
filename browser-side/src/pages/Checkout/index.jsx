import { CloseOutlined, LoadingOutlined, SmileOutlined, SolutionOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import React, { Fragment, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getBookingInfo } from '../../store/actions/MangeBookingAction';
import './checkout.scss';


const CheckoutPage = () => {
    const { Step } = Steps;
    const currentUser = useSelector(state => state.UserReducer.currentUser);
    console.log(currentUser)
    const bookingInfo = useSelector(state => state.BookingReducer.bookingInfo);
    console.log('booking', bookingInfo)

    const movieId = useParams()
    console.log(movieId.id)

    const dispatch = useDispatch();
    const fetchBooking = useCallback(() => {
        dispatch(getBookingInfo(movieId.id))

    }, [dispatch, movieId])

    useEffect(() => {
        fetchBooking()
    }, [fetchBooking])

    const { thongTinPhim, danhSachGhe } = bookingInfo

    const renderSeats = () => {
        return danhSachGhe.map((seat, index) => {

            let classGheVip = seat.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = seat.daDat === true ? 'gheDaDat' : '';


            return (
                <Fragment key={index}>
                    {/* Cách css 1 */}
                    {/* {seat.loaiGhe === 'Vip'

                        ? <button className="ghe gheVip" key={index}>{seat.stt}</button>
                        : <button className="ghe" key={index}>{seat.stt}</button>
                    } */}
                    {/* Cách css 2 */}
                    <button disabled={seat.daDat} className={`ghe ${classGheVip} ${classGheDaDat}`} key={index}>
                        {seat.daDat ? <CloseOutlined /> : seat.stt}
                    </button>
                    {(index + 1) % 16 === 0 ? <br /> : ''}
                </Fragment>
            )
        })
    }


    return (
        <div className="max-h-full">
            <div className="grid grid-cols-12 ">
                <div className="col-span-9">
                    <div className="p-5 border-b-4 border-black">
                        <Steps>
                            <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
                            <Step status="process" title="Pay" icon={<LoadingOutlined />} />
                            <Step status="wait" title="Done" icon={<SmileOutlined />} />
                        </Steps>
                    </div>
                    <div className="flex items-center justify-center mt-5 flex-col">
                        <div className="bg-black w-5/6">
                            screen
                        </div>
                        <div className="trapezoid"></div>
                    </div>
                    <div>
                        {renderSeats()}
                    </div>


                </div>
                <div className="col-span-3 text-left">
                    <h3 className="text-green-500 text-2xl">0 vnd</h3>

                    <hr />

                    <h3 className="text-xl">{thongTinPhim.tenPhim}</h3>
                    <p>Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
                    <p>Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>

                    <hr />

                    <div className="flex flex-row my-5">
                        <div className="w-4/5">
                            <span className="text-red-400">Ghế</span>
                        </div>
                        <div className="text-right">
                            <span className="text-green-500 text-lg">0d</span>
                        </div>
                    </div>

                    <hr />
                    <div className="my-5">
                        <p>Email</p>
                        <span>{currentUser.email}</span>
                    </div>
                    <div className="my-5">
                        <p>Phone</p>
                        <span>{currentUser.soDT}</span>
                    </div>
                    <hr />
                    <div className="mb-5 fixed bottom-0 transform translate-x-2/4">
                        <button className="button--action ">
                            BOOKING TICKET
                        </button>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default CheckoutPage;