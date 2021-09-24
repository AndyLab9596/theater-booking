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
import HomeMovieList from './HomeMovieList';

const HomePage = () => {

    const dispatch = useDispatch();

    const arrMoviesPagination = useSelector(state => state.MovieReducer.arrMoviesPagination);
    const arrMovies = useSelector(state => state.MovieReducer.arrMovies)
    console.log(arrMovies)
    console.log(arrMoviesPagination)
    // const arrMoviesOnShowing = useSelector(state => state.MovieReducer.arrMovies.filter(movie => movie.dangChieu === true));
    // const arrMoviesUpComing = useSelector(state => state.MovieReducer.arrMovies.filter(movie => movie.sapChieu === true));
    const arrMoviesOnShowing = useSelector(state => state.MovieReducer.arrMovies.slice(-15))
    const arrMoviesUpComing = useSelector(state => state.MovieReducer.arrMovies.slice(15))
    const arrTheater = useSelector(state => state.TheaterReducer.arrTheater);

    // Pagination
    const { items, totalCount } = arrMoviesPagination || {}
    const pageParam = useParams();
    const page = pageParam.number;

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
            <HomeMovieList arrMovies={arrMovies} page={page} items={items} totalCount={totalCount} />
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