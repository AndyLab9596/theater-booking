import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import HomeMenuTabsDeskView from './HomeMenuTabsDeskView';
import HomeMenuTabsMobileView from './HomeMenuTabsMobileView';


const HomeMenuTabs = ({ arrTheater }) => {

    const [valueLstCumRap, setValueLstCumRap] = useState(0);
    const [valueDsPhim, setValueDsPhim] = useState(0);

    const { logo, lstCumRap, maHeThongRap, mahom, tenHeThongRap } = arrTheater?.[valueLstCumRap] || {};
    const { danhSachPhim, diaChi, hinhAnh, maCumRap, tenCumRap } = lstCumRap?.[valueDsPhim] || {};

    const isMobile = useMediaQuery({ query: '(max-width: 640px)' })

    return (
        <section id="theater" className=" bg-bgColorMain pb-8" >
            <div className="container mx-auto w-full px-1">
                <div className="px-10 mb-5">
                    <div className="flex justify-center align-middle">
                        <div className="list__header text-left">
                            <h2 className="text-4xl text-greenText leading-10 uppercase mb-5">THEATER LIST</h2>
                            <p className="text-base text-white leading-7">Find your destination here</p>
                        </div>
                    </div>
                </div>
                {isMobile ? <HomeMenuTabsMobileView arrTheater={arrTheater} />
                    : <HomeMenuTabsDeskView arrTheater={arrTheater} />}
            </div>
        </section>
    );
};

export default HomeMenuTabs;