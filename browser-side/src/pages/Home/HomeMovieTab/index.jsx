import React from 'react';
import MovieSlider from './MovieSlider/index';
import './homeMovieTab.scss'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const HomeMovieTab = ({ arrMovies, arrMoviesOnShowing, arrMoviesUpComing }) => {

    return (
        <section className="pt-64 bg-bgColorMain">
            <div className="container mx-auto w-full px-1 ">

                <div className="px-10 ">
                    <Tabs defaultActiveKey="1"
                        className="homeMovieCustomTab"
                        centered
                        tabBarStyle={{
                            color: '#fff',
                            fontWeight: 'bold',
                            padding: "8px",
                            height: '10vh',
                        }}
                    >
                        {/* <TabPane tab={
                            <h2 className="text-2xl text-white leading-10 uppercase px-1 mb-1">
                                All MOVIES
                            </h2>
                        } key="1">
                            <MovieSlider movieArr={arrMovies} />
                        </TabPane> */}
                        <TabPane tab="On Showing" key="2">
                            <MovieSlider movieArr={arrMoviesOnShowing} />
                        </TabPane>
                        <TabPane tab="Up Coming" key="3">
                            <MovieSlider movieArr={arrMoviesUpComing} />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default HomeMovieTab;