import React, { useEffect, useState } from 'react';
import HomeCarousel from '../../components/HomeCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { getArrMoviesPagination } from '../../store/actions/ManageMovieAction';
import MovieList from '../../components/MovieList';

const HomePage = () => {

    const dispatch = useDispatch();
    const arrMoviesPagination = useSelector(state => state.MovieReducer.arrMoviesPagination);

    const [page, setPage] = useState(1);


    const fetchArrMoviesPagination = () => {
        dispatch(getArrMoviesPagination())
    }

    useEffect(() => {

    }, [])

    return (
        <div>
            <HomeCarousel />

            <section className="py-28 bg-bgColorMain">
                <div className="container mx-auto w-full px-1">
                    <div>
                        <div className="flex justify-between align-middle">
                            <div className="list__header text-left">
                                <h2 className="text-5xl text-white leading-10 uppercase mb-5  ">movies</h2>
                                <p className="text-base text-white leading-7">Be sure not to miss these Movies today</p>
                            </div>
                            <div className="space-x-5">
                                <button className="button--action">NOW SHOWING</button>
                                <button className="button--transparent">UP COMING</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <MovieList />

                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;