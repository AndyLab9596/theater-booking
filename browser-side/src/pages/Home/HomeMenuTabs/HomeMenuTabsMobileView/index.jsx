import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import React, { Fragment, useRef, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { Carousel } from 'antd';
import rapChieu from '../../../../assets/img/rapchieu.jpg';
import LstLichChieu from '../lstLichChieu';
import Slider from "react-slick";


export function NextArrow(props) {
    const { onClick } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute top-5 -right-5  z-10 cursor-pointer 
            text-red-500 transition duration-300 hover:text-yellow-500"
            onClick={onClick}
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    );
}

export function PrevArrow(props) {
    const { onClick } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 absolute top-5 -left-5 z-10 cursor-pointer 
                transition duration-300
                text-red-500 hover:text-yellow-500"
            onClick={onClick}
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
    );
}


const HomeMenuTabsMobileView = ({ arrTheater }) => {

    var settings = {
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                    infinite: true,
                    speed: 500,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />
                }
            },
        ]
    };

    const [valueLstCumRap, setValueLstCumRap] = useState(0);
    const [valueDsPhim, setValueDsPhim] = useState(0);

    const { logo, lstCumRap, maHeThongRap, mahom, tenHeThongRap } = arrTheater?.[valueLstCumRap] || {};
    const { danhSachPhim, diaChi, hinhAnh, maCumRap, tenCumRap } = lstCumRap?.[valueDsPhim] || {};

    const renderArrTheater = () => {
        return arrTheater?.map((theater, index) => (
            <div className={`p-2 transition duration-150 ease-in-out opacity-30
                    ${index === valueLstCumRap && `opacity-100`}`}>
                <img src={theater?.logo} alt="logo"
                    className="object-cover w-10 h-10 rounded-full cursor-pointer mx-auto"
                    onClick={() => setValueLstCumRap(index)}
                />
            </div>
        ))
    }

    return (
        <div>
            <h2> Responsive </h2>
            <div className="container px-12 py-12 mx-auto">
                <Slider {...settings}>
                    {renderArrTheater()}
                </Slider>
                <div className="overflow-y-auto h-96">
                    <Scrollbars>
                        {lstCumRap?.map((station, index) => {
                            return (
                                <Disclosure>
                                    {({ open }) => (
                                        <Fragment>
                                            <Disclosure.Button
                                                className={`cursor-pointer flex justify-between flex-nowrap p-1 w-full
                                            ${open ? 'opacity-100' : 'opacity-50'}`} key={index}
                                                onClick={() => setValueDsPhim(index)}
                                            >
                                                {/* Cần fix lại chỗ này vì api trả về ko có hình ảnh cụm rạp */}
                                                <div className="flex justify-between">
                                                    <img src={rapChieu}
                                                        alt={index} className="mr-5 object-cover w-10 h-10" />

                                                    <div className="text-left">
                                                        <h6 className="text-md text-white font-semibold 
                                                    hover:text-green-500 transition duration-150 ease-in-out ">
                                                            {station.tenCumRap}
                                                        </h6>
                                                        <p className=" text-sm text-yellow-300">
                                                            {station.diaChi.substr(0, 30)}...
                                                        </p>

                                                    </div>
                                                </div>
                                                <ChevronUpIcon
                                                    className={`${open ? 'transform rotate-180' : ''
                                                        } w-5 h-5 text-purple-500`}
                                                />
                                            </Disclosure.Button>
                                            {station.danhSachPhim.map((movie, index) => {
                                                return (
                                                    <Transition
                                                        enter="transition duration-100 ease-out"
                                                        enterFrom="transform scale-95 opacity-0"
                                                        enterTo="transform scale-100 opacity-100"
                                                        leave="transition duration-75 ease-out"
                                                        leaveFrom="transform scale-100 opacity-100"
                                                        leaveTo="transform scale-95 opacity-0"
                                                    >
                                                        <Disclosure.Panel key={index}>
                                                            <div className=" w-full p-2 ml-2 text-left">
                                                                <Disclosure>
                                                                    {({ open }) => (
                                                                        <Fragment>
                                                                            <Disclosure.Button>
                                                                                <div className="flex justify-between items-center">
                                                                                    <img
                                                                                        src={movie.hinhAnh} alt="hinh-movie"
                                                                                        onError={e => (e.target.src = "https://picsum.photos/64/80")}
                                                                                        className="object-cover w-12 h-12 mr-2"
                                                                                    />
                                                                                    <h1 className="text-white text-lg cursor-pointer hover:text-green-500 transition duration-150 ease-in-out">
                                                                                        {movie.tenPhim}
                                                                                    </h1>
                                                                                </div>
                                                                            </Disclosure.Button>
                                                                            <Transition
                                                                                enter="transition duration-100 ease-out"
                                                                                enterFrom="transform scale-95 opacity-0"
                                                                                enterTo="transform scale-100 opacity-100"
                                                                                leave="transition duration-75 ease-out"
                                                                                leaveFrom="transform scale-100 opacity-100"
                                                                                leaveTo="transform scale-95 opacity-0"
                                                                            >
                                                                                <Disclosure.Panel>
                                                                                    <LstLichChieu lstLichChieuTheoPhim={movie.lstLichChieuTheoPhim} />
                                                                                </Disclosure.Panel>
                                                                            </Transition>
                                                                        </Fragment>

                                                                    )}
                                                                </Disclosure>

                                                            </div>

                                                        </Disclosure.Panel>
                                                    </Transition>
                                                )
                                            })}
                                        </Fragment>
                                    )}
                                </Disclosure>
                            )
                        })}
                    </Scrollbars>
                </div>

            </div>
        </div>
    );
};

export default HomeMenuTabsMobileView;