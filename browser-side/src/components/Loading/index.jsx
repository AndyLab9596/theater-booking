import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import './loading.scss'

const Loading = () => {

    const isLoading = useSelector(state => state.LoadingReducer.isLoading)

    const loading = useSelector(state => state.LazyReducer.isLazy)
    const { userLoading, arrMovieLoading, arrTheaterLoading } = useSelector(state => state.LoadingReducer)

    const HomePageLoading = userLoading || arrMovieLoading || arrTheaterLoading

    const playLoading = loading || HomePageLoading || isLoading

    return (
        <Fragment>
            {playLoading ? <div style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                backgroundColor: '#032055', display: 'flex', justifyContent: 'center',
                opacity: .8,
                alignItems: 'center',
                zIndex: 20
            }}>
                <div className="text-4xl text-white">
                    <Spin size="large" className="spinCustom" />
                </div>
            </div> : ''}
        </Fragment>
    );
};

export default Loading;