import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import createAction from '../../../store/actions/createAction';
import { actionTypes } from '../../../store/actions/Types';
import TimeOut from '../TimeOut';

const SeatPlan = ({ danhSachGhe, thongTinPhim, onBookingArr, currentUser, key }) => {
    const dispatch = useDispatch()
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
        <div className="bg-bgColorMain h-full py-8">
            <div className="flex justify-between align-middle mt-5">
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


            <div className="overflow-x-scroll whitespace-nowrap sm:overflow-x-hidden p-10">
                {renderSeats()}
            </div>

            <div className="flex flex-wrap justify-evenly items-center my-10">
                <div className=" flex justify-center items-center p-1">
                    <button className="w-8 h-8 rounded-lg m-1 bg-blue-500 "></button>
                    <span className="text-white leading-10">Available</span>
                </div>
                <div className=" flex justify-center items-center p-1">
                    <button className="w-8 h-8 rounded-lg m-1 bg-yellow-500 "></button>
                    <span className="text-white leading-10">Vip</span>
                </div>
                <div className=" flex justify-center items-center p-1">
                    <button className="w-8 h-8 rounded-lg m-1 bg-red-500 ">
                        <CloseOutlined />
                    </button>
                    <span className="text-white leading-10">Served</span>
                </div>
                <div className=" flex justify-center items-center p-1">
                    <button className="w-8 h-8 rounded-lg m-1 bg-green-500 "></button>
                    <span className="text-white leading-10">Choosing</span>
                </div>
                <div className=" flex justify-center items-center p-1">
                    <button className="w-8 h-8 rounded-lg m-1 bg-pink-500 "></button>
                    <span className="text-white leading-10">Others</span>
                </div>
                <div className=" flex justify-center items-center p-1">
                    <button className="w-8 h-8 rounded-lg m-1 bg-blue-500 "></button>
                    <span className="text-white leading-10">Available</span>
                </div>
                <div className=" flex justify-center items-center p-1">
                    <button className="w-8 h-8 rounded-lg m-1 bg-white text-greenText ">
                        <UserOutlined />
                    </button>
                    <span className="text-white leading-10">My</span>
                </div>

            </div>

            {/* <div className="mt-5 flex justify-evenly flex-wrap w-96 overflow-x-hidden">
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
    );
};

export default SeatPlan;