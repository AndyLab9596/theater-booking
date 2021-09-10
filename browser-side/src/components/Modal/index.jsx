import React from 'react';
import ModalVideo from 'react-modal-video';
import { useDispatch, useSelector } from 'react-redux';
import createAction from '../../store/actions/createAction';
import { actionTypes } from '../../store/actions/Types';
import './modal.scss';

const Modal = () => {
    const dispatch = useDispatch()
    const playModal = useSelector(state => state.MovieReducer.modalState)
    const { isOpen, trailer } = playModal || {};

    const trailerId = trailer?.length > 30 ? trailer?.slice(30) : trailer?.slice(16)
    return (
        <div>
            <ModalVideo
                channel='youtube' autoplay isOpen={isOpen} videoId={trailerId}
                onClose={() => dispatch(createAction(actionTypes.PLAY_MODAL, { isOpen: false, trailer: '' }))} />
        </div>
    );
};

export default Modal;