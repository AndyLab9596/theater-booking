import { CustomCard } from '@tsamantanis/react-glassmorphism';
import '@tsamantanis/react-glassmorphism/dist/index.css';
import moment from 'moment';
import React, { Fragment, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSingleMovieWithSchedule } from '../../store/actions/ManageTheaterAction';
import { CalendarFilled, ClockCircleFilled } from '@ant-design/icons';
import './detail.scss';
import DetailMenuTabs from './DetailMenuTabs';

const DetailPage = () => {

    const detailId = useParams();
    const singleMovieWithSchedule = useSelector(state => state.TheaterReducer.singleMovieWithSchedule);
    const { biDanh, dangChieu, danhGia, hinhAnh, hot, maNhom, maPhim, moTa, ngayKhoiChieu, sapChieu, tenPhim, trailer, heThongRapChieu } = singleMovieWithSchedule || {};
    console.log(heThongRapChieu)
    const dispatch = useDispatch();
    const fetchSingleMovie = useCallback(() => {
        dispatch(getSingleMovieWithSchedule(detailId.id))
    }, [detailId.id, dispatch])

    useEffect(() => {
        fetchSingleMovie()
    }, [fetchSingleMovie])

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <Fragment>
            <section className="detail" style={{ backgroundImage: `url(${hinhAnh}), url(${`https://picsum.photos/255/367/`})` }}>
                <div className="detail__overlay"></div>

                <div className="detail__content container mx-auto w-full px-1 pt-40 z-50 relative transform -translate-y-3.5">
                    <div className="px-10 flex flex-nowrap ">
                        <div className=" flex-shrink-0 mr-10">
                            <img src={hinhAnh}
                                alt="img"
                                onError={e => (e.target.src = "https://picsum.photos/255/367/")}
                                className="object-cover object-center w-64 h-80"
                            />
                        </div>
                        <div className=" text-left">
                            <h3 className="detail__title text-green-500 text-4xl font-bold">
                                {tenPhim}
                            </h3>
                            <p className="text-base text-white font-semibold">
                                {moTa}
                            </p>
                            <div className="flex text-greenText">
                                <p className="mr-10 text-base">
                                    <CalendarFilled className="transform -translate-y-1 mr-2" />
                                    {moment(ngayKhoiChieu).format("MMM Do YY")}
                                </p>
                                <p className="mr-10 text-base">
                                    <ClockCircleFilled className="transform -translate-y-1 mr-2" />
                                    120mn
                                </p>
                            </div>
                            <div className=" flex align-middle justify-start mb-5">
                                <div className="flex align-middle w-auto pr-5">
                                    <div className="align-baseline">
                                        <img className="object-cover w-full object-center leading-7 mt-1"
                                            src="http://pixner.net/boleto/demo/assets/images/movie/tomato.png"
                                            alt="tomato" />
                                    </div>
                                    <span className="pl-2 text-black font-bold text-lg self-center leading-7">{danhGia * 10}%</span>
                                </div>
                                <div className="flex align-middle w-auto pr-5">
                                    <div className="align-baseline">
                                        <img className="object-cover w-full object-center leading-7 mt-1"
                                            src="http://pixner.net/boleto/demo/assets/images/movie/cake.png" alt="tomato" />
                                    </div>
                                    <span className="pl-2 text-black font-bold text-lg self-center leading-7">{danhGia * 10}%</span>
                                </div>
                            </div>

                            <div className="items-center flex-shrink-0 hidden lg:flex">
                                <button className="button--action ">BOOKING TICKET</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <DetailMenuTabs arrTheater={heThongRapChieu} />
        </Fragment >


    );
};

export default DetailPage;