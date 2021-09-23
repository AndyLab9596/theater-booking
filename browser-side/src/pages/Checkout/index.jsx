import { ArrowRightOutlined, DollarOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, message, Steps, Tabs } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import createAction from '../../store/actions/createAction';
import { getBookingInfo } from '../../store/actions/MangeBookingAction';
import { actionTypes } from '../../store/actions/Types';
import './checkout.scss';
import NotiModal from './NotiModal';
import Payment from './Payment';

const { Step } = Steps;

const { TabPane } = Tabs;

const CheckoutPage = (props) => {
    const currentUser = useSelector(state => state.UserReducer.currentUser);
    const { bookingInfo, onBookingArr } = useSelector(state => state.BookingReducer);
    const tabActive = useSelector(state => state.BookingReducer.tabActive);
    console.log(onBookingArr)

    const history = useHistory()
    const movieId = useParams()
    const dispatch = useDispatch()

    const fetchBooking = useCallback(() => {
        dispatch(getBookingInfo(movieId.id))

    }, [dispatch, movieId])

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isNotiModalVisible, setIsNotiModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleBackToHome = () => {
        dispatch(createAction(actionTypes.FINISH_BOOKING));
        history.push('/')
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
    }, [onBookingArr.length])



    return <section className=" bg-bgColorMain">
        <header className={`py-5 w-full bg-bgColorDetail`}>
            <div className="container flex items-center align-middle h-16 mx-auto">

                <div className="flex-grow px-11">
                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title}
                                title={
                                    <span className="text-white text-lg font-semibold">
                                        {item.content}
                                    </span>} />
                        ))}
                    </Steps>
                </div>
                {/* <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                </div> */}


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
                        onClick={() => handleBackToHome()}
                    />
                </div>
            </div>
        </header>
        <Payment bookingInfo={bookingInfo}
            onBookingArr={onBookingArr}
            currentUser={currentUser}
            movieId={movieId}
            next={next}
            prev={prev}
            {...props} />
        {/* <button onClick={() => setIsNotiModalVisible(state => !state)}>Click</button>
        {onBookingArr.length > 10 ? !isNotiModalVisible : isNotiModalVisible} */}

        <NotiModal isNotiModalVisible={isNotiModalVisible} setIsNotiModalVisible={setIsNotiModalVisible} />

        {/* <Tabs defaultActiveKey="1"
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
                    {...props} />
            </TabPane>
            <TabPane tab="02 BOOKING HISTORY" key="2">
                <BookingHistory
                    currentUser={currentUser} {...props} />
            </TabPane>
        </Tabs> */}

    </section>
}

export default CheckoutPage;