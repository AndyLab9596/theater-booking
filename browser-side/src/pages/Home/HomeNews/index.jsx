import React from 'react';
import { Tabs } from 'antd';
import MovieNews from './MovieNews';
const { TabPane } = Tabs;

const HomeNews = () => {
    return (
        <section id="news" className="py-8 bg-bgColorMain">
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
                        <TabPane tab={"MOVIE NEWS"} key="1">
                            <MovieNews />
                        </TabPane>

                        <TabPane tab="REVIEW" key="2">
                            <MovieNews />
                        </TabPane>

                        <TabPane tab="DISCOUNT" key="3">
                            <MovieNews />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default HomeNews;