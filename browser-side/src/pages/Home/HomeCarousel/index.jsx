import { LeftOutlined, PlayCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import React, { memo, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import createAction from '../../../store/actions/createAction';
import { getArrBanner } from '../../../store/actions/ManageMovieAction';
import { actionTypes } from '../../../store/actions/Types';
import './carousel.scss';
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

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

};




const HomeCarousel = ({ arrMovies }) => {

    const slider = useRef(null);

    const next = () => {
        slider.current.innerSlider.slickNext()
    }
    const prev = () => {
        slider.current.innerSlider.slickPrev()
    }


    const dispatch = useDispatch();
    // const fetchArrBanner = useCallback(() => {
    //     dispatch(getArrBanner())
    // }, [dispatch]);

    const arrBanner = useSelector(state => state.MovieReducer.arrBanner);
    console.log(arrBanner)

    const renderBanner = () => {
        return arrBanner.map((banner, index) => {
            return <div key={index}>
                <div className="flex justify-center items-center" style={{ ...contentStyle, backgroundImage: `url(${banner.hinhAnh})` }} >
                    <div className="overlay"></div>
                    <div className="relative z-50">
                        <PlayCircleOutlined
                            style={{ fontSize: "50px", color: '#31d7a9', }}
                            className="playIcon"
                            onClick={() => dispatch(createAction(actionTypes.PLAY_MODAL,
                                { isOpen: true, trailer: banner.trailer }))}
                        />
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div id="home">
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