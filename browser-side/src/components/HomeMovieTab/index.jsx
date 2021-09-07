import React from 'react';
import MovieSlider from '../../components/MovieSlider';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

const HomeMovieTab = ({ arrMovies, arrMoviesOnShowing, arrMoviesUpComing }) => {
    function callback(key) {
        console.log(key);
    }
    return (
        <section className="py-14 bg-bgColorMain">
            <div className="container mx-auto w-full px-1">

                <div className="px-10">
                    <Tabs defaultActiveKey="1" onChange={callback}  >
                        <TabPane tab={
                            <h2 className="text-2xl text-white leading-10 uppercase mb-5">
                                All
                            </h2>
                        } key="1">
                            <MovieSlider movieArr={arrMovies} />
                        </TabPane>
                        <TabPane tab={
                            <h2 className="text-2xl text-white leading-10 uppercase mb-5">
                                On Showing
                            </h2>
                        } key="2">
                            <MovieSlider movieArr={arrMoviesOnShowing} />
                        </TabPane>
                        <TabPane tab={
                            <h2 className="text-2xl text-white leading-10 uppercase mb-5">
                                Up Coming
                            </h2>
                        } key="3">
                            <MovieSlider movieArr={arrMoviesUpComing} />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default HomeMovieTab;