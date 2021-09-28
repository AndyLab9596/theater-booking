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
import DetailMenuTabsMobileViews from './DetailMenuTabsMobileView';
import { useMediaQuery } from 'react-responsive';

const DetailPage = () => {

    const detailId = useParams();
    const singleMovieWithSchedule = useSelector(state => state.TheaterReducer.singleMovieWithSchedule);

    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' })


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

            {isMobile ? <DetailMenuTabsMobileViews
                singleMovieWithSchedule={singleMovieWithSchedule} />
                : <DetailMenuTabs singleMovieWithSchedule={singleMovieWithSchedule} />}

        </Fragment >


    );
};

export default memo(DetailPage);