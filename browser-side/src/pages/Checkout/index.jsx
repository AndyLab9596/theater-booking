import { Steps, Tabs } from 'antd';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useHistory, useParams } from 'react-router';
import createAction from '../../store/actions/createAction';
import { getBookingInfo } from '../../store/actions/MangeBookingAction';
import { actionTypes } from '../../store/actions/Types';
import './checkout.scss';
import CheckoutMobileView from './CheckoutMobileView';
import Header from './Header';
import NotiModal from './NotiModal';
import Payment from './Payment';

const { Step } = Steps;

const { TabPane } = Tabs;

const CheckoutPage = (props) => {
    const currentUser = useSelector(state => state.UserReducer.currentUser);
    const { bookingInfo, onBookingArr, timeOut } = useSelector(state => state.BookingReducer);
    // const tabActive = useSelector(state => state.BookingReducer.tabActive);
    console.log('timeOut', timeOut)
    const history = useHistory()
    const movieId = useParams()
    const dispatch = useDispatch()

    const fetchBooking = useCallback(async () => {
        await dispatch(getBookingInfo(movieId.id))

        refreshKey(Date.now())

    }, [dispatch, movieId])

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isNotiModalVisible, setIsNotiModalVisible] = useState(false);
    const [key, refreshKey] = useState(1)


    const handleBackToPrevPage = () => {
        dispatch(createAction(actionTypes.FINISH_BOOKING));
        history.goBack()
    }

    const steps = [
        {
            title: 'First',
            content: 'Choosing',
        },
        {
            title: 'Second',
            content: 'Confirm',
        },
        {
            title: 'Last',
            content: 'Paying',
        },
    ];


    const [current, setCurrent] = useState(1);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };


    useEffect(() => {
        fetchBooking()

    }, [fetchBooking])

    useEffect(() => {
        if (onBookingArr.length > 10) {
            setIsNotiModalVisible(state => !state)
        }
        if (timeOut) {
            setIsNotiModalVisible(state => !state)
        }
    }, [onBookingArr.length, timeOut])


    const isMobile = useMediaQuery({ query: '(max-width: 640px)' })

    return <section className=" bg-bgColorMain h-screen">

        {isMobile ?
            <>
                <CheckoutMobileView />
            </>
            : <>

                <Header currentUser={currentUser} current={current} handleBackToPrevPage={handleBackToPrevPage} />
                <Payment
                    key={key}
                    bookingInfo={bookingInfo}
                    onBookingArr={onBookingArr}
                    currentUser={currentUser}
                    movieId={movieId}
                    next={next}
                    prev={prev}
                    {...props} />
            </>
        }

        {/* <Header currentUser={currentUser} current={current} handleBackToPrevPage={handleBackToPrevPage} />
        <Payment
            key={key}
            bookingInfo={bookingInfo}
            onBookingArr={onBookingArr}
            currentUser={currentUser}
            movieId={movieId}
            next={next}
            prev={prev}
            {...props} /> */}
        <NotiModal
            fetchBooking={fetchBooking}
            onBookingArr={onBookingArr}
            timeOut={timeOut}
            isNotiModalVisible={isNotiModalVisible}
            setIsNotiModalVisible={setIsNotiModalVisible} />


    </section>
}

export default memo(CheckoutPage);