import React, { Fragment, memo, useCallback, useEffect } from 'react';
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getArrBanner } from '../../../store/actions/ManageMovieAction';

import './carousel.scss'
import SearchBar from './SearchBar';

const contentStyle = {
    height: '100vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
};


const HomeCarousel = ({ arrMovies }) => {

    const dispatch = useDispatch();
    const fetchArrBanner = useCallback(() => {
        dispatch(getArrBanner())
    }, [dispatch]);

    const arrBanner = useSelector(state => state.MovieReducer.arrBanner);

    const renderBanner = () => {
        return arrBanner.map((banner, index) => {
            return <div key={index} className="overlay">
                <div style={{ ...contentStyle, backgroundImage: `url(${banner.hinhAnh})` }} ></div>

            </div>
        })
    }

    useEffect(() => {
        fetchArrBanner()

    }, [fetchArrBanner])


    return (
        <Fragment>
            <Carousel autoplay={true} style={{ width: '100%', padding: 0, margin: 0 }} >
                {renderBanner()}
            </Carousel>

            <SearchBar arrMovies={arrMovies} />

        </Fragment>
    );
};

export default memo(HomeCarousel);