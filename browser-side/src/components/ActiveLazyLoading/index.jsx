import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import createAction from '../../store/actions/createAction';
import { actionTypes } from '../../store/actions/Types';

const ActiveLazyLoading = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(createAction(actionTypes.LOADING_LAZY_MOUNT))
        return () => {
            dispatch(createAction(actionTypes.LOADING_LAZY_UNMOUNT))
        }
    })


    return (
        <div>

        </div>
    );
};

export default ActiveLazyLoading;