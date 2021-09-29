import { Modal } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import createAction from '../../../store/actions/createAction';
import { actionTypes } from '../../../store/actions/Types';

const NotiModal = ({ onBookingArr, fetchBooking, timeOut, isNotiModalVisible, setIsNotiModalVisible }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleOk = () => {
        dispatch(createAction(actionTypes.OVER_10_SEATS))
        setIsNotiModalVisible(state => !state)
    }

    const params = useParams();
    const handleTimeOut = () => {
        history.push(`/checkout/${params.id}`)
        setIsNotiModalVisible(state => !state)
    }

    return (
        <Modal
            visible={isNotiModalVisible}
            footer={null}
            centered
            keyboard
            closable={false}
            onCancel
            bodyStyle={{ padding: 0, margin: 0 }}

        >
            {timeOut && (
                <div className="bg-bgColorDetail p-12 rounded-2xl overflow-hidden">
                    <div className="flex items-center space-x-4">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-xl leading-6 font-bold text-white" id="modal-title">
                                Your time is running out !
                            </h3>
                        </div>
                    </div>
                    <div className="mt-8 w-full">
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-10 py-2 
                                bg-green-600 text-base font-medium text-white hover:bg-green-700 
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => handleTimeOut()}
                        >
                            Re-order
                        </button>
                    </div>
                </div>
            )

            }
            {onBookingArr.length > 10 && (
                <div className="bg-bgColorDetail w-64 mx-auto p-4 sm:p-12 rounded-2xl overflow-hidden">
                    <div className="flex items-center space-x-4">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-lg sm:text-xl leading-6 font-bold text-white" id="modal-title">
                                Cannot choose 10 seats at a time
                            </h3>
                        </div>
                    </div>
                    <div className="mt-8 w-full">
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-10 py-2 
                bg-green-600 text-base font-medium text-white hover:bg-green-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => handleOk()}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

        </Modal >
    );
};

export default NotiModal;