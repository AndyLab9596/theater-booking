import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Steps, Tabs } from 'antd';
import _ from 'lodash';
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import BookingTicketInfo from '../../core/models/bookingTicketInfo';
import createAction from '../../store/actions/createAction';
import { getBookingInfo, getBookingTicketInfo } from '../../store/actions/MangeBookingAction';
import { actionTypes } from '../../store/actions/Types';
import formMoney from '../../utils/formMoney';
import './checkout.scss';

const { TabPane } = Tabs;


const CheckoutPage = () => {
    const { Step } = Steps;
    const currentUser = useSelector(state => state.UserReducer.currentUser);
    console.log(currentUser)
    const { bookingInfo, onBookingArr } = useSelector(state => state.BookingReducer);

    // const inputCheck = useRef();
    // const activeButton = inputCheck.current.checked

    const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        setChecked(e.target.checked)
    }

    const movieId = useParams()


    const dispatch = useDispatch();
    const fetchBooking = useCallback(() => {
        dispatch(getBookingInfo(movieId.id))

    }, [dispatch, movieId])

    useEffect(() => {
        fetchBooking()
    }, [fetchBooking])



    const handleSendBookingTicket = () => {
        if (!checked) return
        const bookingTicketInfo = new BookingTicketInfo();
        bookingTicketInfo.maLichChieu = movieId.id;
        bookingTicketInfo.danhSachVe = onBookingArr;
        dispatch(getBookingTicketInfo(bookingTicketInfo))
    }

    const { thongTinPhim, danhSachGhe } = bookingInfo

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
                    <button onClick={() => {
                        dispatch(createAction(actionTypes.BOOKING_SEAT, seat))
                    }}
                        disabled={seat.daDat} className={`
                        w-8 h-8 rounded-lg m-1 bg-blue-500 
                        hover:bg-greenText transition duration-300 ease-in-out
                        ${classVipSeat} 
                        ${classSeatServed} 
                        ${classSeatOnChoose} 
                        ${classChooseByMe}`}
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
        <div className=" py-4">
            <div className="grid grid-cols-12 ">
                <div className="col-span-8">
                    {/* <div className="p-5 border-b-4 border-black">
                        <Steps>
                            <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
                            <Step status="process" title="Pay" icon={<LoadingOutlined />} />
                            <Step status="wait" title="Done" icon={<SmileOutlined />} />
                        </Steps>
                    </div> */}
                    {/* <div className="flex items-center justify-center mt-5 flex-col">
                        <div className="bg-black w-5/6">
                            screen
                        </div>
                        <div className="trapezoid"></div>
                    </div> */}
                    <div className="py-5">
                        <div className="flex justify-center align-middle">
                            <img src="http://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png" alt="screen" />
                        </div>
                        <h4 className="text-xl text-white font-bold">Screen</h4>
                    </div>


                    <div>
                        {renderSeats()}
                    </div>
                    <div className="mt-5 flex justify-evenly">
                        <table className="divide-y divide-gray-200 w-2/3 table-auto">
                            <thead>
                                <tr className="flex space-x-4">
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
                                        <button className="w-8 h-8 rounded-lg m-1 bg-white text-greenText ">
                                            <UserOutlined />
                                        </button>
                                        <span className="text-white leading-10">Choose by me</span>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>


                </div>
                <div className="p-5 col-span-4 divide-y-2 divide-yellow-600 divide-dashed">
                    <h3 className="text-white text-3xl text-center pb-4">
                        BOOKING SUMMARY
                    </h3>

                    <div className="py-2 text-left text-white">
                        <h3 className="text-xl text-greenText">{thongTinPhim.tenPhim}</h3>
                        <p>Address: <span className="text-gray-500">{thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</span></p>
                        <p>Show Time: <span className="text-gray-500">{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</span> </p>
                    </div>

                    <div className="flex flex-row py-2">
                        <div className="flex-none">
                            <span className="text-white text-lg">Seats:</span>
                        </div>
                        <div className="flex-grow flex-wrap">
                            {_.sortBy(onBookingArr, ['stt']).map((onBookingSeat, index) => {
                                return <span key={index} className="text-base text-gray-500 m-1">
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
                        <p className="text-white">User name: <span className="text-gray-500">{currentUser?.taiKhoan}</span></p>
                        <p className="text-white">Email: <span className="text-gray-500">{currentUser?.email}</span></p>
                        <p className="text-white">Phone: <span className="text-gray-500">{currentUser?.soDT}</span></p>
                    </div>

                    <div className="py-2">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-14 w-14 text-indigo-600"
                                onChange={(e) => handleChange(e)} />
                            <p className="ml-2 text-white">
                                I Accept" button, you represent that you have read and understand this agreement, any additional terms and conditions imposed by the promoter
                            </p>
                        </label>
                    </div>

                    <div className="pt-5">
                        <button
                            className={
                                `px-12 py-3 font-semibold text-sm rounded-full text-white duration-300 ease-in-out min-w-52
                            ${checked ? `bg-gradient-to-r from-yellow-400 via-red-500 to-indigo-700 hover:shadow-button`
                                    : `disabled:opacity-50 bg-transparent border-2 border-indigo-500 cursor-not-allowed`
                                }
                        `}
                            onClick={() => handleSendBookingTicket()}
                        >

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
                color: '#fff', height: '10vh', fontSize: '17px',
                fontWeight: 'bold',
                backgroundColor: "#032055",
                padding: "8px"
            }}
        >
            <TabPane tab="01 CHOOSE YOUR SEAT" key="1" className="">
                <CheckoutPage {...props} />
            </TabPane>
            <TabPane tab="02 BOOKING HISTORY" key="2">
                <CheckOutFinal {...props} />
            </TabPane>
        </Tabs>
    </div>
}






export default Demo;