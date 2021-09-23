import { CheckOutlined } from '@ant-design/icons';
import React from 'react';
import formMoney from '../../../utils/formMoney';


const CheckoutModal = ({ currentUser, onBookingArr, thongTinPhim, handleSendBookingTicket, handleCancel }) => {
    const { diaChi, gioChieu, hinhAnh, maLichChieu, ngayChieu, tenCumRap, tenPhim, tenRap } = thongTinPhim
    return (

        <div className="bg-bgColorDetail p-14 rounded-2xl overflow-hidden">
            <div className="flex space-x-4">
                <img src={hinhAnh} alt={tenPhim}
                    onError={e => (e.target.src = "https://picsum.photos/264/370/")}
                    className="object-cover block w-52 h-60 rounded-lg" />
                <div className="flex-grow">
                    <h3 className="text-lg text-greenText">{tenPhim}</h3>
                    <p className="text-base text-indigo-300">{tenCumRap}</p>
                    <p className="text-base text-indigo-300">{diaChi}</p>
                    <p className="text-base text-white">Show time: {ngayChieu}~{gioChieu}</p>
                    <p className="text-base text-white">Room: {tenRap}</p>
                    <p className="text-base text-white space-x-1">Seat:
                        {onBookingArr.map((seat) => {
                            return <div className="flex-wrap inline-flex">
                                <span className="ml-1">{seat.tenGhe}</span>
                            </div>
                        })}
                    </p>
                </div>
            </div>
            <div className>
                <h3 className="text-center text-lg font-bold text-white pt-2 border-t-2 border-yellow-300 ">TICKET INFO</h3>
                <div>
                    <p className="text-base text-white">Name: {currentUser.hoTen}</p>
                    <p className="text-base text-white">Email: {currentUser.email}</p>
                    <p className="text-base text-white">Phone: {currentUser.soDT}</p>
                    <p className="text-lg text-red-500 font-semibold">Total Pay:
                        <span className="ml-1">
                            {formMoney(
                                onBookingArr.reduce((total, seat, index) => {
                                    return total += seat.giaVe
                                }, 0)
                            )}
                        </span>
                    </p>
                </div>
                <div className="flex justify-between">
                    <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-12 py-2 
                    bg-green-600 text-base font-medium text-white 
                    hover:bg-green-700 focus:outline-none 
                    focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => handleSendBookingTicket()}
                    >
                        Confirm
                    </button>
                    <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-12 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none 
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => handleCancel()}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;