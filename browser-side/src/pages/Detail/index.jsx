import { CustomCard } from '@tsamantanis/react-glassmorphism';
import '@tsamantanis/react-glassmorphism/dist/index.css';
import moment from 'moment';
import React, { Fragment, memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSingleMovieWithSchedule } from '../../store/actions/ManageTheaterAction';
import { CalendarFilled, ClockCircleFilled } from '@ant-design/icons';
import './detail.scss';
import DetailMenuTabs from './DetailMenuTabs';
import createAction from '../../store/actions/createAction';
import { actionTypes } from '../../store/actions/Types';

const DetailPage = () => {

    const detailId = useParams();
    const singleMovieWithSchedule = useSelector(state => state.TheaterReducer.singleMovieWithSchedule);
    const { biDanh, dangChieu, danhGia, hinhAnh, hot, maNhom, maPhim, moTa, ngayKhoiChieu, sapChieu, tenPhim, trailer, heThongRapChieu } = singleMovieWithSchedule || {};
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
            {/* <section className="bg-cover bg-no-repeat bg-center h-full backdrop-filter backdrop-blur-lg relative"
                style={{ backgroundImage: `url(${hinhAnh}), url(${`https://picsum.photos/255/367/`})` }}>
                <div className="fixed h-full w-full bg-bgColorDetail opacity-50 z-10"></div>

                <div className="detail__content container mx-auto w-full px-1 pt-40 z-50 relative sm:transform sm:-translate-y-3.5">
                    <div className="px-10 sm:flex sm:flex-nowrap flex-col ">
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
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="bg-cover bg-no-repeat bg-center h-104 backdrop-filter backdrop-blur-lg flex justify-center items-center "
                style={{ backgroundImage: `url(${hinhAnh}), url(${`https://picsum.photos/255/367/`})` }}>
                <div className="relative z-50">
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
                </div>
            </section>

            <DetailMenuTabs arrTheater={heThongRapChieu} />
        </Fragment >


    );
};

export default memo(DetailPage);