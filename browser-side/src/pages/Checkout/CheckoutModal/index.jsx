import { CheckOutlined } from '@ant-design/icons';
import React from 'react';
import formMoney from '../../../utils/formMoney';


const CheckoutModal = ({ currentUser, onBookingArr, thongTinPhim, handleSendBookingTicket, handleCancel }) => {
    console.log(currentUser)
    const { diaChi, gioChieu, hinhAnh, maLichChieu, ngayChieu, tenCumRap, tenPhim, tenRap } = thongTinPhim
    return (
        // <div className="inline-block align-bottom bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
        // rounded-2xl text-left shadow-xl
        // transform transition-all w-full ">
        //     <div className=" bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
        //     px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        //         <div className="sm:flex sm:items-start">
        //             <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
        //                 <CheckOutlined />
        //             </div>
        //             <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        //                 <h3 className="text-xl leading-6 font-bold text-gray-900" id="modal-title">
        //                     Confirm booking ticket
        //                 </h3>
        //                 <div className="mt-2">
        //                     <p className="text-sm text-white">
        //                         Are you sure you want to confirm? This action cannot be undone.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
        //     px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        //         <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
        //             onClick={() => handleSendBookingTicket()}
        //         >
        //             Confirm
        //         </button>
        //         <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        //             onClick={() => handleCancel()}
        //         >
        //             Cancel
        //         </button>
        //     </div>
        // </div>
        <div className="bg-bgColorDetail p-12 rounded-2xl overflow-hidden">
            <div className="flex space-x-4">
                <img src={hinhAnh} alt={tenPhim}
                    onError={e => (e.target.src = "https://picsum.photos/264/370/")}
                    className="object-cover block w-52 h-60 rounded-lg" />
                <div className="flex-grow">
                    <h3 className="text-lg text-greenText">{tenPhim}</h3>
                    <p className="text-base text-indigo-300">{tenCumRap}</p>
                    <p className="text-base text-indigo-300">{diaChi}</p>
                    <p className="text-base text-white">Show time: {ngayChieu} / {gioChieu}</p>
                    <p className="text-base text-white">Room: {tenRap}</p>
                    <p className="text-base text-white space-x-1">Seat:
                        {onBookingArr.map((seat) => {
                            return <span className="ml-1">{seat.tenGhe}</span>
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