import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import './loading.scss'

const Loading = () => {


    const isLazy = useSelector(state => state.LazyReducer.isLazy)
    const {
        userLoading, arrMovieLoading, arrTheaterLoading, bookingInfoLoading

    } = useSelector(state => state.LoadingReducer)


    const HomePageLoading = userLoading || arrMovieLoading || arrTheaterLoading;
    const CheckoutPageLoading = bookingInfoLoading;

    const playLoading = isLazy || HomePageLoading || CheckoutPageLoading


    return (
        <Fragment>
            {playLoading ? <div className="fixed top-0 left-0 w-full h-full bg-bgColorDetail flex justify-center items-center opacity-80 z-50">
                <div className="text-4xl text-white">
                    <Spin size="large" className="spinCustom" />
                </div>
            </div> : ''}
        </Fragment>
    );
};

export default Loading;