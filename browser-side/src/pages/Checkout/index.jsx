import { CloseOutlined, LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import createAction from '../../store/actions/createAction';
import { getBookingInfo, getBookingTicketInfo } from '../../store/actions/MangeBookingAction';
import { actionTypes } from '../../store/actions/Types';
import _ from 'lodash';
import './checkout.scss';
import BookingTicketInfo from '../../core/models/bookingTicketInfo';
import { Tabs } from 'antd';

const { TabPane } = Tabs;


const CheckoutPage = () => {
    const { Step } = Steps;
    const currentUser = useSelector(state => state.UserReducer.currentUser);
    console.log(currentUser)
    const { bookingInfo, onBookingArr } = useSelector(state => state.BookingReducer);
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
            let classGheDangDat = ''
            let indexGheDangDat = onBookingArr.findIndex(onBooking => onBooking.maGhe === seat.maGhe);
            if (indexGheDangDat !== -1) {
                classGheDangDat = 'gheDangDat'
            }
            let classGheDaDuocDat = '';
            if (currentUser?.taiKhoan === seat.taiKhoanNguoiDat) {
                classGheDaDuocDat = 'gheDaDuocDat'
            }

            return (
                <Fragment key={index}>
                    {/* Cách css 1 */}
                    {/* {seat.loaiGhe === 'Vip'

                        ? <button className="ghe gheVip" key={index}>{seat.stt}</button>
                        : <button className="ghe" key={index}>{seat.stt}</button>
                    } */}
                    {/* Cách css 2 */}
                    <button onClick={() => {
                        dispatch(createAction(actionTypes.BOOKING_SEAT, seat))
                    }}
                        disabled={seat.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat}`}
                        key={index}>
                        {seat.daDat ? classGheDaDuocDat !== '' ? <UserOutlined /> : <CloseOutlined /> : seat.stt}
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
                    <div className="mt-5 flex justify-center">
                        <table className="divide-y divide-gray-200 w-2/3 table-auto">
                            <thead>
                                <tr>
                                    <th>Ghế chưa đặt</th>
                                    <th>Ghế đang đặt</th>
                                    <th>Ghế vip</th>
                                    <th>Ghế đã được đặt</th>
                                </tr>
                            </thead>
                        </table>
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
                            {_.sortBy(onBookingArr, ['stt']).map((onBookingSeat, index) => {
                                return <span key={index} className="text-base text-green-500 m-1">
                                    {onBookingSeat.stt}
                                </span>
                            })}
                        </div>
                        <div className="text-right">
                            <span className="text-green-500 text-lg">
                                {onBookingArr.reduce((total, seat, index) => {
                                    return total += seat.giaVe
                                }, 0).toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <hr />
                    <div className="my-5">
                        <p>Email</p>
                        <span>{currentUser?.email}</span>
                    </div>
                    <div className="my-5">
                        <p>Phone</p>
                        <span>{currentUser?.soDT}</span>
                    </div>
                    <hr />
                    <div className="mb-5 fixed bottom-0 transform translate-x-2/4">
                        <button className="button--action " onClick={() => {
                            const bookingTicketInfo = new BookingTicketInfo();
                            bookingTicketInfo.maLichChieu = movieId.id;
                            bookingTicketInfo.danhSachVe = onBookingArr;
                            dispatch(getBookingTicketInfo(bookingTicketInfo))
                        }}>
                            BOOKING TICKET
                        </button>
                    </div>

                </div>
            </div>

        </div>

    );
};

const CheckOutFinal = () => {
    return (
        <div>
            <h1>Kết quả đặt vé</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                                    <p className="text-gray-500">UI Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Henry Letham</h2>
                                    <p className="text-gray-500">CTO</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Oskar Blinde</h2>
                                    <p className="text-gray-500">Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">John Doe</h2>
                                    <p className="text-gray-500">DevOps</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Martin Eden</h2>
                                    <p className="text-gray-500">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Boris Kitua</h2>
                                    <p className="text-gray-500">UX Researcher</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Atticus Finch</h2>
                                    <p className="text-gray-500">QA Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
                                    <p className="text-gray-500">System</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
                                    <p className="text-gray-500">Product Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>


    )
}


const Demo = (props) => {

    return <div className=" bg-bgColorMain">
        <Tabs defaultActiveKey="1"
            className="customTab"
            tabBarStyle={{
                color: '#fff', height: '10vh', fontSize: '18px',
                fontWeight: 'bold',
                backgroundColor: "#032055",
                padding: "8px"
            }}
        >
            <TabPane tab="01 CHOOSE YOUR SEAT" key="1" className="">
                <CheckoutPage {...props} />
            </TabPane>
            <TabPane tab="02 HISTORY" key="2">
                <CheckOutFinal {...props} />
            </TabPane>
        </Tabs>
    </div>
}






export default Demo;