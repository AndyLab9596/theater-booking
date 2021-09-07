import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import { getArrMovies } from '../../store/actions/ManageMovieAction';

const Testing = () => {
    const settings = {
        className: "center",
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 4,

    };

    const dispatch = useDispatch();

    const fetchArrMovies = useCallback(() => {
        dispatch(getArrMovies())
    }, [dispatch])

    const arrMovies = useSelector(state => state.MovieReducer.arrMovies);
    console.log(arrMovies)

    const renderArrMovies = () => {
        return arrMovies.map((movie, index) => {
            const { hinhAnh, tenPhim, moTa, maPhim, danhGia } = movie
            return (
                <div className="cards px-2 py-3 w-full rounded-lg overflow-hidden" >
                    <NavLink to="/" className="card-thumbnail block relative h-96 rounded overflow-hidden">
                        <img
                            className="thumbnail-img object-cover object-center w-full h-full "
                            src={hinhAnh}
                            onError={e => (e.target.src = "https://picsum.photos/264/370/")}
                            alt="movie" />
                    </NavLink>
                    <div className="px-5 bg-bgColorDetail" >
                        <h5 className="cards__title py-6 uppercase text-2xl border-b-2 border-dashed border-yellow-500 text-white font-semibold text-left
                                    align-middle
                                    "
                            style={{ minHeight: "120px" }}
                        >
                            {tenPhim}
                        </h5>
                        <div className="py-5 flex align-middle justify-start">
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
            )
        })
    }

    useEffect(() => {
        fetchArrMovies()

    }, [fetchArrMovies])


    return (
        <div className="container px-5 py-24 mx-auto">
            <Slider {...settings} >
                {renderArrMovies()}
            </Slider>
        </div>

    );
};

export default Testing;