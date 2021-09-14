import { ArrowRightOutlined, UserOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import createAction from '../../store/actions/createAction';
import { getUserInfo } from '../../store/actions/ManageUserAction';
import { getBookingInfo } from '../../store/actions/MangeBookingAction';
import { actionTypes } from '../../store/actions/Types';
import BookingHistory from './BookingHistory';
import './checkout.scss';
import Payment from './Payment';

const { TabPane } = Tabs;

const CheckoutPage = (props) => {
    const currentUser = useSelector(state => state.UserReducer.currentUser);
    const currentUserInfo = useSelector(state => state.UserReducer.currentUserInfo)
    const { bookingInfo, onBookingArr } = useSelector(state => state.BookingReducer);
    const tabActive = useSelector(state => state.BookingReducer.tabActive);

    const history = useHistory()
    const movieId = useParams()
    const dispatch = useDispatch()

    const fetchBooking = useCallback(() => {
        dispatch(getBookingInfo(movieId.id))

    }, [dispatch, movieId])

    const fetchUserInfo = useCallback(() => {
        dispatch(getUserInfo())
    }, [dispatch])


    useEffect(() => {
        fetchBooking()
        fetchUserInfo()
    }, [fetchBooking, fetchUserInfo])

    return <div className=" bg-bgColorMain">
        <Tabs defaultActiveKey="1"
            activeKey={tabActive}
            className="customTab"
            tabBarStyle={{
                color: '#fff', height: '10vh', fontSize: '17px',
                fontWeight: 'bold',
                backgroundColor: "#032055",
                padding: "8px"
            }}
            onChange={(key) => dispatch(createAction(actionTypes.CHANGE_TAB_TYPE, key))}
            tabBarExtraContent={<div className="mr-5" >
                <div className="flex align-middle">
                    <UserOutlined
                        className="py-1.5 mr-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full h-8 w-8 leading-8"
                        style={{ fontSize: "20px", color: "white", fontWeight: 500 }}
                    />
                    <p className="text-pink-200 text-lg font-bold flex items-center border-r-2 border-indigo-500 pr-5 mb-0">
                        {currentUser?.taiKhoan}
                    </p>

                    <ArrowRightOutlined style={{ fontSize: "20px", color: "white", fontWeight: 500 }}
                        className="ml-1 py-1.5 "
                        onClick={() => history.push('/')}
                    />
                </div>
            </div>}
        >
            <TabPane tab="01 CHOOSE YOUR SEAT" key="1">
                <Payment
                    bookingInfo={bookingInfo}
                    onBookingArr={onBookingArr}
                    currentUser={currentUser}
                    movieId={movieId}
                    currentUserInfo={currentUserInfo}
                    {...props} />
            </TabPane>
            <TabPane tab="02 BOOKING HISTORY" key="2">
                <BookingHistory
                    currentUserInfo={currentUserInfo} {...props} />
            </TabPane>
        </Tabs>
    </div>
}

export default CheckoutPage;