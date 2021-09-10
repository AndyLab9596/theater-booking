import React, { Fragment, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSingleMovie } from '../../store/actions/ManageMovieAction';
import { getSingleMovieWithSchedule } from '../../store/actions/ManageTheaterAction';
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import './detail.scss'
import moment from 'moment';

const DetailPage = () => {

    const detailId = useParams();
    const singleMovieWithSchedule = useSelector(state => state.TheaterReducer.singleMovieWithSchedule);
    const { biDanh, dangChieu, danhGia, hinhAnh, hot, maNhom, maPhim, moTa, ngayKhoiChieu, sapChieu, tenPhim, trailer, heThongRapChieu } = singleMovieWithSchedule || {};
    // console.log(singleMovieWithSchedule)
    const dispatch = useDispatch();
    const fetchSingleMovie = useCallback(() => {
        dispatch(getSingleMovieWithSchedule(detailId.id))
    }, [detailId.id, dispatch])

    useEffect(() => {
        fetchSingleMovie()
    }, [fetchSingleMovie])


    return (
        <Fragment>
            <section className="detail" style={{ backgroundImage: `url(${hinhAnh})` }}>
                <CustomCard
                    effectColor="#001232" // required
                    // color="#14AEFF" // default color is white
                    blur={10} // default blur value is 10px
                    borderRadius={0} // default border radius value is 10px
                    className="detail__customCard"
                >
                    <div className="container mx-auto w-full px-1 pt-60 ">
                        <div className="px-10 flex flex-nowrap">
                            <div className="detail__thumbnail flex-shrink-0">
                                <img src={hinhAnh}
                                    alt="img"
                                    onError={e => (e.target.src = "https://picsum.photos/255/367/")}
                                    className="object-cover object-center w-64 h-80"
                                />
                            </div>
                            <div className="detail__content text-left">
                                <h3 className="detail__title text-white text-3xl">
                                    {tenPhim}
                                </h3>
                                <p className="text-base text-indigo-500 font-semibold">
                                    {moTa}
                                </p>
                                <div className="flex">
                                    <p className="mr-10">
                                        Opening Day: {moment(ngayKhoiChieu).format("MMM Do YY")}
                                    </p>
                                    <p>
                                        120mn
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CustomCard>
                <div className="pl-96 py-8 bg-bgColorDetail">
                    <div className="container mx-auto w-full px-1">
                        <div className=" flex align-middle justify-start">
                            <div className="flex align-middle w-auto pr-5">
                                <div className="align-baseline">
                                    <img className="object-cover w-full object-center leading-7 mt-1"
                                        src="http://pixner.net/boleto/demo/assets/images/movie/tomato.png"
                                        alt="tomato" />
                                </div>
                                <span className="pl-2 text-white font-bold text-lg self-center leading-7">{danhGia * 10}%</span>
                            </div>
                            <div className="flex align-middle w-auto pr-5">
                                <div className="align-baseline">
                                    <img className="object-cover w-full object-center leading-7 mt-1"
                                        src="http://pixner.net/boleto/demo/assets/images/movie/cake.png" alt="tomato" />
                                </div>
                                <span className="pl-2 text-white font-bold text-lg self-center leading-7">{danhGia * 10}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" bg-bgColorMain">
                <div className="container mx-auto w-full px-1">

                </div>
            </section>
        </Fragment >

    );
};

export default DetailPage;