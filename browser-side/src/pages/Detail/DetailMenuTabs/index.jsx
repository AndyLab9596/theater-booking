import moment from 'moment';
import React, { Fragment, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import ButtonCheckout from '../../../components/ButtonCheckout';
import rapChieu from '../../../assets/img/rapchieu.jpg'

const DetailMenuTabs = ({ arrTheater }) => {

    const [valueLstCumRap, setValueLstCumRap] = useState(0);
    const [valueDsPhim, setValueDsPhim] = useState(0);

    const { logo, cumRapChieu, maHeThongRap, tenHeThongRap } = arrTheater?.[valueLstCumRap] || {};
    const { lichChieuPhim, diaChi, hinhAnh, maCumRap, tenCumRap } = cumRapChieu?.[valueDsPhim] || {};

    const showInfo = lichChieuPhim?.map((item) => {
        return item.ngayChieuGioChieu.slice(0, 10)
    })

    const notDuplicateShowInfo = [...new Set(showInfo)]


    const filterByDay = (date) => {
        const gioChieuRenDer = lichChieuPhim.filter(item => {
            if (item.ngayChieuGioChieu.slice(0, 10) === date) {
                return true
            }
            return false
        })
        return gioChieuRenDer;
    }

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

                    <div className="col-start-3 py-5 ">
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

                    <div className="col-start-4 col-span-4 ml-5 overflow-y-auto h-96">
                        <Scrollbars>
                            {cumRapChieu?.map((station, index) => {
                                return (

                                    <div className={`cursor-pointer flex flex-nowrap p-1 opacity-50 
                                    ${index === valueDsPhim && 'opacity-100'}`} key={index}
                                        onClick={() => setValueDsPhim(index)}
                                    >
                                        {/* <img src={station.hinhAnh} alt={index} className="mr-5 object-cover w-12 h-12" /> */}
                                        <img src={rapChieu} alt={index} className="mr-5 object-cover w-12 h-12" />

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

                    <div className="col-span-4 ml-5 overflow-y-auto h-96" >
                        <Scrollbars>
                            {notDuplicateShowInfo?.map((date) => {
                                return (
                                    <Fragment key={date}>
                                        <p className="text-lg text-left text-pink-500 mb-0">
                                            {moment(date).format('dddd - MMM Do YY')}
                                        </p>

                                        <div className="flex flex-wrap">
                                            {filterByDay(date).map(schedule => {
                                                return <Fragment key={schedule.maLichChieu}>
                                                    <ButtonCheckout schedule={schedule} />
                                                </Fragment>
                                            })}
                                        </div>
                                    </Fragment>
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

