import React, { useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import LstLichChieu from '../lstLichChieu';
import rapChieu from '../../../../assets/img/rapchieu.jpg';


const HomeMenuTabsDeskView = ({ arrTheater }) => {

    const [valueLstCumRap, setValueLstCumRap] = useState(0);
    const [valueDsPhim, setValueDsPhim] = useState(0);

    const { logo, lstCumRap, maHeThongRap, mahom, tenHeThongRap } = arrTheater?.[valueLstCumRap] || {};
    const { danhSachPhim, diaChi, hinhAnh, maCumRap, tenCumRap } = lstCumRap?.[valueDsPhim] || {};

    return (
        <div className="grid grid-cols-12 ">

            <div className="col-start-2 py-5 ">
                {arrTheater?.map((theater, index) => (
                    <div className={`flex justify-center flex-wrap p-2 transition duration-150 ease-in-out opacity-30
                            ${index === valueLstCumRap && `opacity-100`}`}>
                        <img src={theater?.logo} alt="logo"
                            className="object-cover w-12 h-12 rounded-full cursor-pointer"
                            onClick={() => setValueLstCumRap(index)}
                        />
                    </div>
                ))}
            </div>

            <div className="col-start-3 col-span-4 ml-5 overflow-y-auto h-96">
                <Scrollbars>
                    {lstCumRap?.map((station, index) => {
                        return (

                            <div className={`cursor-pointer flex flex-nowrap p-1 opacity-50 
                        ${index === valueDsPhim && 'opacity-100'}`} key={index}
                                onClick={() => setValueDsPhim(index)}
                            >
                                {/* Cần fix lại chỗ này vì api trả về ko có hình ảnh cụm rạp */}
                                <img src={rapChieu}
                                    alt={index} className="mr-5 object-cover w-12 h-12" />

                                <div className="text-left">
                                    <h6 className="text-md text-white font-semibold 
                                hover:text-green-500 transition duration-150 ease-in-out ">
                                        {station.tenCumRap}
                                    </h6>
                                    <p className=" text-sm text-yellow-300">
                                        {station.diaChi.substr(0, 40)}...
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </Scrollbars>
            </div>

            <div className="col-span-5 ml-5 overflow-y-auto h-96" >
                <Scrollbars>
                    {danhSachPhim?.map((movie, index) => {
                        return (
                            <div key={index} className="grid grid-cols-4" >
                                <div className="col-span-1 my-1 mx-auto">
                                    <img
                                        src={movie.hinhAnh} alt="hinh-movie"
                                        onError={e => (e.target.src = "https://picsum.photos/64/80")}
                                        className="object-cover w-16 h-20 mr-5"
                                    />
                                </div>
                                <div className="text-left col-span-3">
                                    <h1 className="text-white text-2xl cursor-pointer
                                            hover:text-green-500 transition duration-150 ease-in-out">
                                        {movie.tenPhim}
                                    </h1>
                                    <LstLichChieu lstLichChieuTheoPhim={movie.lstLichChieuTheoPhim} />
                                </div>
                            </div>
                        )
                    })}
                </Scrollbars>
            </div>
        </div>
    );
};

export default HomeMenuTabsDeskView;