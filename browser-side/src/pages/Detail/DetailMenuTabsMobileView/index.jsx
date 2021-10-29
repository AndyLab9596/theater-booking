import React, { Fragment, useRef, useState } from 'react';
import { Tabs, Radio } from 'antd';
import { Disclosure } from '@headlessui/react';
import ButtonCheckout from '../../../components/ButtonCheckout';
import { ChevronUpIcon } from '@heroicons/react/solid';
import { Listbox } from '@headlessui/react'
import moment from 'moment';
import Slider from "react-slick";
import rapChieu from '../../../assets/img/rapchieu.jpg';
import LstLichChieu from '../../Home/HomeMenuTabs/lstLichChieu';
import LstLichChieuDetailMobile from './LstLichChieuDetailMobile';
import { useDispatch } from 'react-redux';
import createAction from '../../../store/actions/createAction';
import { actionTypes } from '../../../store/actions/Types';
import { CalendarFilled, ClockCircleFilled } from '@ant-design/icons';


export function NextArrow(props) {
    const { onClick } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute top-3 right-0  z-10 cursor-pointer 
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
            class="h-5 w-5 absolute top-3 left-0 z-10 cursor-pointer 
                transition duration-300
                text-red-500 hover:text-yellow-500"
            onClick={onClick}
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
    );
}

const { TabPane } = Tabs;

const DetailMenuTabsMobileViews = ({ singleMovieWithSchedule }) => {
    const { biDanh, dangChieu, danhGia, hinhAnh, hot, maNhom, maPhim, moTa, ngayKhoiChieu, sapChieu, tenPhim, trailer, heThongRapChieu } = singleMovieWithSchedule || {};
    const dispatch = useDispatch()
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
    console.log('heThongRapChieu', heThongRapChieu)

    // input heThongRapChieu

    // Output là 1 mảng tập hợp các element là các ngày chiếu, trong ngày chiếu có heThongRap là 1 array
    // heThongRap [cumRapChieu[lichChieuPhim[giave, logo, maLichChieu, maRap, ngayChieuGioChieu, tenCumRap, tenHeThongRap, tenRap, thoiLuong], maLichChieu, tenCumRap], logo, tenHeThongRap]
    // Output: [{ date: ' ', heThongRap: } ]



    // Bước 1: tạo mảng chưa tất cả maLichChieu, thêm 1 số property sử dụng cho việc hiển thị dữ liệu


    const arrayAllLichChieuPhimAddProp = heThongRapChieu?.reduce(
        (colect1, heThongRapChieuItem) => {
            return [...colect1,
            ...heThongRapChieuItem.cumRapChieu?.reduce((colect2, cumRapChieuItem) => {
                return [...colect2,
                ...cumRapChieuItem.lichChieuPhim?.reduce((colect3, lichChieuPhimItem) => {
                    return [...colect3, {
                        ...lichChieuPhimItem,
                        tenHeThongRap: heThongRapChieuItem.tenHeThongRap,
                        tenCumRap: cumRapChieuItem.tenCumRap,
                        logo: heThongRapChieuItem.logo
                    }]
                }, [])
                ]
            }, [])
            ]
        }, [])
    // {giaVe: , logo: , maLichChieu: , maRap: , ngayChieuGioChieu: , tenCumRap: , tenHeThongRap: , tenRap: , thoiLuong: , } = arrayAllLichChieuPhimAddProp

    console.log('arrayAllLichChieuPhimAddProp', arrayAllLichChieuPhimAddProp)

    // Bước 2: Tạo mảng ngày

    const arrayDay = [...new Set(arrayAllLichChieuPhimAddProp?.map(item => item.ngayChieuGioChieu?.slice(0, 10)))].sort()

    // console.log('arrayDay', arrayDay)
    // ta sẽ có 1 mảng giống như vậy arrayDay = ['2021-08-06', '2021-08-12', '2021-08-13'] 


    // Bước 3: Dựa vào mảng ngày, tạo ra mảng dữ liệu chính thức bằng cách lọc ra item theo ngày 
    // -> sau đó return về arrayHeThongRapChieuFilterByDay để render

    const arrayHeThongRapChieuFilterByDay = arrayDay.map((date) => {

        const arrayLichChieuPhimFilterByDay = arrayAllLichChieuPhimAddProp.filter(item =>
            item.ngayChieuGioChieu.slice(0, 10) === date);

        // Gom element trùng ngày chiếu
        // console.log('arrayLichChieuPhimFilterByDay', arrayLichChieuPhimFilterByDay)

        // Chú ý: những hàm như map, filtery trả về là 3 đối số element, index, array

        const arrayCumRapChieuRemoveDuplicate = arrayLichChieuPhimFilterByDay?.filter((itemIncrease, indexIncrease, arr) => indexIncrease === arr.findIndex((t) => t.tenCumRap === itemIncrease.tenCumRap)

        );

        // console.log('arrayCumRapChieuRemoveDuplicate', arrayCumRapChieuRemoveDuplicate)

        const arrayHeThongRapItem = arrayCumRapChieuRemoveDuplicate.map(heThongRapItem => {

            const arrayLichChieuPhimFilterByHeThongRap = arrayLichChieuPhimFilterByDay?.filter(
                (item) => item.tenHeThongRap === heThongRapItem.tenHeThongRap
            )

            const arrayCumRapChieuRemoveDuplicate = arrayLichChieuPhimFilterByHeThongRap?.filter(
                (itemIncrease, indexIncrease, arr) => indexIncrease === arr.findIndex((t) => t.tenCumRap === itemIncrease.tenCumRap)
            )

            const cumRapChieu = arrayCumRapChieuRemoveDuplicate.map(cumRapChieu => {
                const lichChieuPhim = arrayLichChieuPhimFilterByHeThongRap.filter(
                    lichChieuPhim => lichChieuPhim.tenCumRap === cumRapChieu.tenCumRap
                )
                return {
                    tenCumRap: cumRapChieu.tenCumRap,
                    maLichChieu: cumRapChieu.maLichChieu,
                    lichChieuPhim
                }
            })

            return { tenHeThongRap: heThongRapItem.tenHeThongRap, logo: heThongRapItem.logo, cumRapChieu }

        })

        return { date, heThongRap: arrayHeThongRapItem }

    })

    console.log('arrayHeThongRapChieuFilterByDay', arrayHeThongRapChieuFilterByDay)

    const [indexDate, setIndexDate] = useState(0)
    console.log('indexDate', indexDate)

    const renderTabList = () => {
        return arrayHeThongRapChieuFilterByDay.map((arrayDate, index) => (
            <div className={`font-semibold group cursor-pointer ${indexDate === index ? 'text-greenText font-semibold' : 'text-red-300'}`}
                onClick={() => setIndexDate(index)}>
                <p className={`mb-0 group-hover:text-yellow-700 transition duration-300`}>
                    {arrayDate.date}
                </p>
                <span className="group-hover:text-yellow-700 transition duration-300">{moment(arrayDate.date).format('dddd')}</span>
            </div>

        ))
    }


    return (
        <Fragment>
            <section className="bg-cover bg-no-repeat bg-center h-104 backdrop-filter backdrop-blur-lg flex justify-center items-center relative"
                style={{ backgroundImage: `url(${hinhAnh}), url(${`https://picsum.photos/255/367/`})` }}>
                <div className="group cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        onClick={() => dispatch(createAction(actionTypes.PLAY_MODAL,
                            { isOpen: true, trailer: trailer }))}
                        className="h-16 w-16  text-green-100 opacity-25
                                transition duration-300 cursor-pointer
                                group-hover:text-green-500 group-hover:opacity-100"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="absolute bottom-0 p-2">
                    <h3 className=" text-green-500 text-xl font-bold">
                        {tenPhim}
                    </h3>
                    <p className="text-sm text-white font-semibold text-left">
                        {moTa}
                    </p>
                    <div className="flex text-greenText">
                        <p className="mr-10 text-sm">
                            <CalendarFilled className="transform -translate-y-1 mr-2" />
                            {moment(ngayKhoiChieu).format("MMM Do YY")}
                        </p>
                        <p className="mr-10 text-sm">
                            <ClockCircleFilled className="transform -translate-y-1 mr-2" />
                            120mn
                        </p>
                    </div>
                </div>
            </section>
            <div className="bg-bgColorDetail py-8">
                <div className="container mx-auto">
                    <Slider {...settings}>
                        {renderTabList()}
                    </Slider>
                    <div className="w-full">
                        {arrayHeThongRapChieuFilterByDay[indexDate]?.heThongRap.map((heThongRap, index) => {
                            return (
                                <Disclosure>
                                    {({ open }) => (
                                        <Fragment>
                                            <Disclosure.Button className={`flex  flex-col m-5 ${open ? 'opacity-100' : 'opacity-50'}`}>
                                                <div className="flex justify-between items-center space-x-5">
                                                    <div className="flex justify-start items-center space-x-2 w-80">
                                                        <img src={heThongRap.logo} alt={heThongRap.tenHeThongRap}
                                                            className="w-10 h-10 object-cover block"
                                                        />
                                                        <h6 className={`text-white uppercase text-lg hover:text-greenText transition duration-300`}>
                                                            {heThongRap.tenHeThongRap}
                                                        </h6>
                                                    </div>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'transform rotate-180' : ''
                                                            } w-5 h-5 mr-5 text-purple-500`}
                                                    />
                                                </div>
                                            </Disclosure.Button>
                                            {heThongRap.cumRapChieu.map((cumRap, index) => {
                                                console.log(cumRap)
                                                return (
                                                    <Disclosure.Panel>
                                                        <div className=" w-full p-2 ml-2 text-left">
                                                            <Disclosure>
                                                                {({ open }) => (
                                                                    <Fragment>
                                                                        <Disclosure.Button>
                                                                            <div className={`flex justify-between items-center  group
                                                                        ${open ? 'opacity-100' : 'opacity-50'}`}>
                                                                                <div className="flex flex-start space-x-5">
                                                                                    <img src={rapChieu} alt="rapChieu"
                                                                                        className="h-10 w-10 object-cover block ml-8" />
                                                                                    <h6 className="text-white group-hover:text-yellow-300 transition duration-300">
                                                                                        {cumRap.tenCumRap}
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </Disclosure.Button>

                                                                        <Disclosure.Panel>
                                                                            <LstLichChieuDetailMobile lstLichChieuTheoPhim={cumRap.lichChieuPhim} />
                                                                        </Disclosure.Panel>
                                                                    </Fragment>
                                                                )}
                                                            </Disclosure>
                                                        </div>

                                                    </Disclosure.Panel>
                                                )
                                            })}
                                        </Fragment>
                                    )}

                                </Disclosure>
                            )
                        })}

                    </div>
                </div>
            </div>
        </Fragment>




    );
};

export default DetailMenuTabsMobileViews;