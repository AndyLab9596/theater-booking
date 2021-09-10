import moment from 'moment';
import React, { Fragment, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { NavLink } from 'react-router-dom';

const DetailMenuTabs = ({ arrTheater }) => {

    const [valueLstCumRap, setValueLstCumRap] = useState(0);
    const [valueDsPhim, setValueDsPhim] = useState(0);

    const { logo, cumRapChieu, maHeThongRap, tenHeThongRap } = arrTheater?.[valueLstCumRap] || {};
    const { lichChieuPhim, diaChi, hinhAnh, maCumRap, tenCumRap } = cumRapChieu?.[valueDsPhim] || {};


    return (
        <section className="py-14 bg-bgColorMain" >

            <div className="container mx-auto w-full px-1">
                <div className="px-10 mb-5">
                    <div className="flex justify-center align-middle">
                        <div className="list__header text-left">
                            <h2 className="text-4xl text-white leading-10 uppercase mb-5">SCHEDULE LIST</h2>
                            <p className="text-base text-white leading-7">Be sure not to miss these Movies today</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 ">

                    <div className="col-start-4 py-5 ">
                        {arrTheater?.map((theater, index) => (
                            <div className={`flex justify-center flex-wrap p-2 transition duration-150 ease-in-out 
                            ${index === valueLstCumRap && `border-r-2 border-green-500`}`}>
                                <img src={theater?.logo} alt="logo"
                                    className="object-cover w-12 h-12 rounded-full cursor-pointer"
                                    onClick={() => setValueLstCumRap(index)}
                                />
                            </div>

                        ))}
                    </div>

                    <div className="col-start-5 col-span-4 ml-5 overflow-y-auto h-96">
                        <Scrollbars>
                            {cumRapChieu?.map((station, index) => {
                                console.log(cumRapChieu)
                                return (

                                    <div className={`cursor-pointer flex flex-nowrap p-1 opacity-50 ${index === valueDsPhim && 'opacity-100'}`} key={index}
                                        onClick={() => setValueDsPhim(index)}
                                    >
                                        <img src={station.hinhAnh} alt={index} className="mr-5 object-cover w-12 h-12" />

                                        <div className="text-left">
                                            <h6 className="text-md text-white font-semibold 
                                            hover:text-green-500 transition duration-150 ease-in-out ">
                                                {station.tenCumRap}
                                            </h6>
                                            <p className=" text-sm text-yellow-300">
                                                {station.diaChi}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </Scrollbars>
                    </div>

                    <div className="col-span-2 ml-5 overflow-y-auto h-96" >
                        <Scrollbars>
                            {lichChieuPhim?.slice(0, 5).map((movie, index) => {
                                return (
                                    <div className="flex flex-nowrap">
                                        <NavLink to="/" className="text-md font-semibold text-indigo-300 m-1 
                                    hover:text-purple-800 bg-gray-600 p-1 rounded-lg hover:bg-green-500 transition duration-150 ease-in-out">
                                            {moment(movie.ngayChieuGioChieu).format('hh:mm')} ~ {moment(movie.ngayChieuGioChieu).add(120, 'm').format('hh:mm')}
                                        </NavLink>

                                    </div>
                                )
                            })}
                        </Scrollbars>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default DetailMenuTabs;