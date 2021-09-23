import { Modal } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import createAction from '../../../store/actions/createAction';
import { actionTypes } from '../../../store/actions/Types';

const NotiModal = ({ isNotiModalVisible, setIsNotiModalVisible }) => {
    const dispatch = useDispatch()

    const handleOk = () => {
        dispatch(createAction(actionTypes.OVER_10_SEATS))
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
            <div className="inline-block align-bottom bg-red-300
        rounded-2xl text-left shadow-xl
        transform transition-all w-full ">
                <div className=" bg-red-300
            px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-xl leading-6 font-bold text-gray-900" id="modal-title">
                                You are not allowed to choose over 10 seats
                            </h3>

                        </div>
                    </div>
                </div>
                <div className="bg-red-300
            px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => handleOk()}
                    >
                        OK
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default NotiModal;