import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import './loading.scss'

const Loading = () => {

    const isLoading = useSelector(state => state.LoadingReducer.isLoading)

    return (
        <Fragment>
            {isLoading ? <div style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                backgroundColor: 'rgba(0,0,0,.8)', display: 'flex', justifyContent: 'center',
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