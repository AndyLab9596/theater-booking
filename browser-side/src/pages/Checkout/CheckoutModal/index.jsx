import { CheckOutlined } from '@ant-design/icons';
import React from 'react';


const CheckoutModal = ({ handleSendBookingTicket, handleCancel }) => {
    return (
        <div className="inline-block align-bottom bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
        rounded-2xl text-left shadow-xl
        transform transition-all w-full ">
            <div className=" bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
            px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <CheckOutlined />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 className="text-xl leading-6 font-bold text-gray-900" id="modal-title">
                            Confirm booking ticket
                        </h3>
                        <div className="mt-2">
                            <p className="text-sm text-white">
                                Are you sure you want to confirm? This action cannot be undone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
            px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => handleSendBookingTicket()}
                >
                    Confirm
                </button>
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => handleCancel()}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default CheckoutModal;