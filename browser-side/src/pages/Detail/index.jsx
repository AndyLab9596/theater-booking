import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSingleMovie } from '../../store/actions/ManageMovieAction';
import { getSingleMovieWithSchedule } from '../../store/actions/ManageTheaterAction';
import './detail.scss'

const DetailPage = () => {

    const detailId = useParams();
    const singleMovieWithSchedule = useSelector(state => state.TheaterReducer.singleMovieWithSchedule);
    console.log(singleMovieWithSchedule)
    const { biDanh, dangChieu, danhGia, hinhAnh, hot, maNhom, maPhim, moTa, ngayKhoiChieu, sapChieu, tenPhim, trailer, heThongRapChieu } = singleMovieWithSchedule || {};

    const dispatch = useDispatch();
    const fetchSingleMovie = useCallback(() => {
        dispatch(getSingleMovieWithSchedule(detailId.id))
    }, [detailId.id, dispatch])

    useEffect(() => {
        fetchSingleMovie()
    }, [fetchSingleMovie])


    return (
        <div className="detail" style={{ backgroundImage: `url(${hinhAnh})` }}>
            This is detail Page
        </div>
    );
};

export default DetailPage;