import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router';
import { getArrMovies, getArrMoviesPagination } from '../../store/actions/ManageMovieAction';
import { getShowScheduleTheaterLocation } from '../../store/actions/ManageTheaterAction';
import './home.scss';
import HomeApp from './HomeApp';
import HomeCarousel from './HomeCarousel';
import HomeMenuTabs from './HomeMenuTabs';
import HomeMovieList from './HomeMovieList';
import HomeMovieTab from './HomeMovieTab';
import HomeNews from './HomeNews';

const HomePage = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' })


    const dispatch = useDispatch();

    const arrMoviesPagination = useSelector(state => state.MovieReducer.arrMoviesPagination);
    const arrMovies = useSelector(state => state.MovieReducer.arrMovies)

    // const arrMoviesOnShowing = useSelector(state => state.MovieReducer.arrMovies.filter(movie => movie.dangChieu === true));
    // const arrMoviesUpComing = useSelector(state => state.MovieReducer.arrMovies.filter(movie => movie.sapChieu === true));
    const arrMoviesOnShowing = useSelector(state => state.MovieReducer.arrMovies.slice(-(arrMovies.length / 2)))
    const arrMoviesUpComing = useSelector(state => state.MovieReducer.arrMovies.slice((arrMovies.length / 2)))
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
            {isMobile ?
                <HomeMovieList arrMovies={arrMovies} page={page} items={items} totalCount={totalCount} />
                : <HomeMovieTab
                    arrMovies={arrMovies}
                    arrMoviesOnShowing={arrMoviesOnShowing}
                    arrMoviesUpComing={arrMoviesUpComing} />
            }


            <HomeMenuTabs arrTheater={arrTheater} />
            <HomeNews />
            <HomeApp />
        </div>
    );
};

export default memo(HomePage);