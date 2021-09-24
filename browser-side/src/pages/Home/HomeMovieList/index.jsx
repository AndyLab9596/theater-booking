import React from 'react';
import MovieList from '../../../components/MovieList'
import { Pagination } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';


const HomeMovieList = ({ arrMovies, page, items, totalCount }) => {

    const history = useHistory()

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

    const onChange = (page) => {
        history.push({ pathname: `/page/${page}` })
    }
    return (
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
    );
};

export default HomeMovieList;