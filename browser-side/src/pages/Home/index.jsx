import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArrMovies, getArrMoviesPagination } from '../../store/actions/ManageMovieAction';
import { getShowScheduleTheaterLocation } from '../../store/actions/ManageTheaterAction';
import './home.scss';
import HomeCarousel from './HomeCarousel';
import HomeMenuTabs from './HomeMenuTabs';
import HomeMovieTab from './HomeMovieTab';
import MovieList from '../../components/MovieList'
import HomeNews from './HomeNews';
import HomeApp from './HomeApp';
import { useHistory, useLocation } from 'react-router-dom';
import { useParams } from 'react-router';

const HomePage = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation()
    console.log('history', history)
    console.log('location', location)


    const arrMoviesPagination = useSelector(state => state.MovieReducer.arrMoviesPagination);
    const arrMovies = useSelector(state => state.MovieReducer.arrMovies)
    const arrMoviesOnShowing = useSelector(state => state.MovieReducer.arrMovies.filter(movie => movie.dangChieu === true));
    const arrMoviesUpComing = useSelector(state => state.MovieReducer.arrMovies.filter(movie => movie.sapChieu === true));
    const arrTheater = useSelector(state => state.TheaterReducer.arrTheater);

    // Pagination
    const { items, totalCount } = arrMoviesPagination || {}
    const pageParam = useParams();
    const page = pageParam.number;


    const onChange = (page) => {
        history.push({ pathname: `/page/${page}` })
    }
    function itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <a>
                <DoubleLeftOutlined style={{ color: "#5560ff", position: 'relative', transform: "translateY(-4px)", marginRight: "5px" }} />
                <span className="text-base text-indigo-500">Prev</span>
            </a>;
        }
        if (type === 'next') {
            return <a>
                <span className="text-base text-indigo-500">Next</span>
                <DoubleRightOutlined style={{ color: "#5560ff", position: 'relative', transform: "translateY(-4px)", marginLeft: "5px" }} />
            </a>
        }

        return originalElement;
    }


    const fetchArrMoviesPagination = useCallback((page) => {
        page ? dispatch(getArrMoviesPagination(page)) : dispatch(getArrMoviesPagination(1))
    }, [dispatch, page])

    const fetchArrMovies = useCallback(() => {
        dispatch(getArrMovies())
    }, [dispatch])

    const fetchScheduleTheater = useCallback(() => {
        dispatch(getShowScheduleTheaterLocation())
    }, [dispatch])

    useEffect(() => {
        fetchArrMoviesPagination(page)
        fetchArrMovies()
        fetchScheduleTheater()

    }, [fetchArrMoviesPagination, page, fetchArrMovies, fetchScheduleTheater])

    return (
        <div>
            <HomeCarousel arrMovies={arrMovies} />

            <section id="movie" className="pt-64 pb-8 bg-bgColorMain">
                <div className="container mx-auto w-full px-1">
                    <div className="px-10 py-8">
                        <div className="">
                            <div className="list__header text-center">
                                <h2 className="text-5xl text-greenText leading-10 uppercase mb-5">movies list</h2>
                                <p className="text-base text-white leading-7">Be sure not to miss these Movies today</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <MovieList arrMovies={items} />
                        <Pagination
                            onChange={onChange}
                            defaultCurrent={page}
                            total={totalCount}
                            itemRender={itemRender}
                            showSizeChanger={false}
                            showTotal={total => {
                                return (
                                    <span className="text-white text-sm">
                                        {`Total ${total} movies`}
                                    </span>
                                )
                            }}
                            className="homepage__pagination"
                        />
                    </div>
                </div>
            </section>

            <HomeMovieTab
                arrMovies={arrMovies}
                arrMoviesOnShowing={arrMoviesOnShowing}
                arrMoviesUpComing={arrMoviesUpComing} />

            <HomeMenuTabs arrTheater={arrTheater} />
            <HomeNews />
            <HomeApp />

        </div>
    );
};

export default memo(HomePage);