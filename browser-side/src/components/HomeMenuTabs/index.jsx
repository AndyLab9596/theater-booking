import { Tabs } from 'antd';
import moment from 'moment';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;
const HomeMenuTabs = ({ arrTheater }) => {

    console.log('arrTheater', arrTheater)

    return (
        <section className="py-14 bg-bgColorMain">
            <div className="container mx-auto w-full px-1">
                <div className="px-10">
                    <div className="flex justify-between align-middle">
                        <div className="list__header text-left">
                            <h2 className="text-5xl text-white leading-10 uppercase mb-5">theater list</h2>
                            <p className="text-base text-white leading-7">Choose your destination</p>
                        </div>
                    </div>
                </div>
                <div className="px-10">
                    <Tabs tabPosition={'left'}  >
                        {arrTheater.map((theater, index) => {
                            return (
                                <TabPane tab={<img src={theater.logo} alt={index} className="object-cover w-12 h-12" />} key={index}

                                >
                                    <Tabs tabPosition={'left'} key={index} className="overflow-auto" style={{ height: "500px" }} >
                                        {theater.lstCumRap?.map((station, index) => {
                                            return (

                                                <TabPane key={index}

                                                    tab={
                                                        <div className="w-80 flex" >
                                                            <img src={theater.logo} alt={index} width="50px" className="rounded-full object-cover" />
                                                            <div className="text-right px-3">
                                                                {station.tenCumRap}
                                                                <p className="text-sm text-red-300 text-left">Chi tiết</p>
                                                            </div>
                                                        </div>
                                                    }>
                                                    <div className="overflow-auto" style={{ height: "550px" }}>
                                                        {station.danhSachPhim.slice(0, 5).map((movie, index) => {
                                                            return (
                                                                <Fragment key={index} >
                                                                    <div className="my-2">
                                                                        <div className="flex">
                                                                            <img style={{ width: "95px", minHeight: "100px", maxHeight: "100%" }}
                                                                                src={movie.hinhAnh} alt="hinh-movie"
                                                                                onError={e => (e.target.src = "https://picsum.photos/75/75")}
                                                                                className="object-cover object-center "
                                                                            />
                                                                            <div className="ml-2">
                                                                                <h1 className="text-indigo-500 text-lg">{movie.tenPhim}</h1>
                                                                                <p className="text-pink-400">{station.diaChi}</p>
                                                                                <div className="grid grid-cols-6 gap-6">
                                                                                    {movie.lstLichChieuTheoPhim?.slice(0, 12).map((schedule, index) => {
                                                                                        return <NavLink to="/" className="text-md text-yellow-500">
                                                                                            {moment(schedule.ngayChieuGioChieu).format('hh:mm A')}
                                                                                        </NavLink>
                                                                                    })}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Fragment>
                                                            )
                                                        })}

                                                    </div>

                                                </TabPane>
                                            )
                                        })}
                                    </Tabs>
                                </TabPane>
                            )
                        })}
                    </Tabs>

                    {/* <Tabs tabPosition={'left'}>
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab 3
                        </TabPane>
                    </Tabs> */}


                </div>

            </div>
        </section>
    );
};

export default HomeMenuTabs;