import { Carousel } from 'antd';
import React, { memo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import createAction from '../../../store/actions/createAction';
import { actionTypes } from '../../../store/actions/Types';
import './carousel.scss';
import SearchBar from './SearchBar';

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


    const arrBanner = useSelector(state => state.MovieReducer.arrBanner);

    const renderBanner = () => {
        return arrBanner.map((banner, index) => {
            return <div key={index}>
                <div className="flex justify-center items-center
                bg-center bg-cover bg-no-repeat
                md:h-104 xl:h-screen 
                " style={{

                        backgroundImage: `url(${banner.hinhAnh})`
                    }}>
                    {/* <div className="overlay"></div> */}
                    <div className="relative z-50">
                        <div className="group cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                onClick={() => dispatch(createAction(actionTypes.PLAY_MODAL,
                                    { isOpen: true, trailer: banner.trailer }))}
                                className="h-16 w-16  text-green-100 opacity-25
                                transition duration-300 cursor-pointer
                                group-hover:text-green-500 group-hover:opacity-100"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div id="home" className="hidden sm:block">
            <svg xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 absolute top-48 right-5 xl:top-2/4 xl:right-10 z-10 cursor-pointer 
            text-red-500 transition duration-300 hover:text-yellow-500"
                onClick={() => prev()}
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>

            <Carousel autoplay  {...settings} ref={slider}>
                {renderBanner()}
            </Carousel>

            <svg xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 absolute top-48 left-5 xl:top-2/4 xl:left-10 z-10 cursor-pointer 
                transition duration-300
                text-red-500 hover:text-yellow-500"
                onClick={() => next()}
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>

            <SearchBar arrMovies={arrMovies} />
        </div>
    );
};

export default memo(HomeCarousel);