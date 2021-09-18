import { LeftOutlined, PlayCircleOutlined, RightOutlined } from '@ant-design/icons';
import React, { Fragment, memo, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArrBanner } from '../../../store/actions/ManageMovieAction';
import './carousel.scss';
import SearchBar from './SearchBar';
import Slider from "react-slick";
import { Carousel } from 'antd';
import createAction from '../../../store/actions/createAction';
import { actionTypes } from '../../../store/actions/Types';


const contentStyle = {
    height: '100vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',

};

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

};




const HomeCarousel = ({ arrMovies }) => {

    const slider = useRef(null);
    console.log(slider)

    const next = () => {
        slider.current.innerSlider.slickNext()
    }
    const prev = () => {
        slider.current.innerSlider.slickPrev()
    }


    const dispatch = useDispatch();
    const fetchArrBanner = useCallback(() => {
        dispatch(getArrBanner())
    }, [dispatch]);

    const arrBanner = useSelector(state => state.MovieReducer.arrBanner);
    console.log(arrBanner)

    const renderBanner = () => {
        return arrBanner.map((banner, index) => {
            return <div key={index} className="overlay">
                <div style={{ ...contentStyle, backgroundImage: `url(${banner.hinhAnh})` }} >
                    <div className=" absolute bottom-2/4 left-2/4 z-10 transform -translate-x-2/4 translate-y-2/4">
                    </div>
                </div>
            </div>
        })
    }

    useEffect(() => {
        fetchArrBanner()

    }, [fetchArrBanner])


    return (
        <div>
            <RightOutlined style={{ right: "0px" }} onClick={() => next()} className="slider-arrow" />
            <Carousel autoplay  {...settings} ref={slider}>
                {renderBanner()}
            </Carousel>
            <LeftOutlined style={{ left: "0px" }} onClick={() => prev()} className="slider-arrow" />
            <SearchBar arrMovies={arrMovies} />
        </div>
    );
};

export default memo(HomeCarousel);