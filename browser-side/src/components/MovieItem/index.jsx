import { PlayCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import createAction from '../../store/actions/createAction';
import { actionTypes } from '../../store/actions/Types';
import './movieItem.scss'

const MovieItem = ({ movie }) => {
    const dispatch = useDispatch()
    const { trailer, tenPhim, moTa, hinhAnh, danhGia, maPhim } = movie
    return (
        <div className="card px-2 w-full rounded-lg overflow-hidden" >
            <div className="relative card-thumbnail block  h-96 rounded overflow-hidden">
                <img
                    className=" card-thumbnail-img object-cover object-center w-full h-full"
                    src={hinhAnh}
                    onError={e => (e.target.src = "https://picsum.photos/264/370/")}
                    alt="movie" />
                <div className=" absolute bottom-2/4 left-2/4 z-10 transform -translate-x-2/4 translate-y-2/4">
                    <PlayCircleOutlined
                        style={{ fontSize: "50px", color: '#31d7a9' }}
                        className="card-icon"
                        onClick={() => dispatch(createAction(actionTypes.PLAY_MODAL,
                            { isOpen: true, trailer: trailer }))}
                    />
                </div>
            </div>
            <div className="card__content px-5 bg-bgColorDetail" >
                <h5 className="card__content__title py-6 uppercase text-2xl border-b-2 border-dashed border-yellow-500 text-white font-semibold text-left
                                    align-middle
                                    "
                    style={{ minHeight: "120px" }}
                >
                    {tenPhim}
                </h5>
                <div className="card__content__button py-8 flex align-middle justify-start">
                    <NavLink to={`/detail/${maPhim}`}>
                        <button className="button--action-sm">
                            BOOKING TICKET
                        </button>
                    </NavLink>
                </div>

                <div className="card__content__footer py-8 flex align-middle justify-start">
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
    );
};

export default MovieItem;