import React, { memo, useCallback, useEffect, useState } from 'react';
import HomeCarousel from '../../components/HomeCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { getArrMoviesPagination } from '../../store/actions/ManageMovieAction';
import MovieList from '../../components/MovieList';
import { Pagination } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import './home.scss'

const HomePage = () => {

    const dispatch = useDispatch();
    const arrMoviesPagination = useSelector(state => state.MovieReducer.arrMoviesPagination);
    console.log(arrMoviesPagination)
    const { items, totalCount } = arrMoviesPagination || {}

    const [page, setPage] = useState(1);
    const onChange = (page) => {
        setPage(page)
        console.log(page)
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
        dispatch(getArrMoviesPagination(page))
    }, [dispatch])

    useEffect(() => {
        fetchArrMoviesPagination(page)

    }, [fetchArrMoviesPagination, page])

    return (
        <div>
            <HomeCarousel />

            <section className="py-28 bg-bgColorMain">
                <div className="container mx-auto w-full px-1">
                    <div className="px-10">
                        <div className="flex justify-between align-middle">
                            <div className="list__header text-left">
                                <h2 className="text-5xl text-white leading-10 uppercase mb-5">movies</h2>
                                <p className="text-base text-white leading-7">Be sure not to miss these Movies today</p>
                            </div>
                            <div className="space-x-5">
                                <button className="button--action">NOW SHOWING</button>
                                <button className="button--transparent">UP COMING</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <MovieList arrMovies={items} />
                        <Pagination
                            onChange={onChange}
                            current={page}
                            defaultCurrent={1}
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
        </div>
    );
};

export default memo(HomePage);