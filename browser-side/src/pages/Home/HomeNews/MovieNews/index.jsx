import React from 'react';
import './movieNews.scss'
const MovieNews = () => {
    return (
        <div className="max-w-screen-xl p-5 mx-auto bg-coolGray-100 text-coolGray-800">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group bg-coolGray-500" style={{ backgroundImage: 'url(https://source.unsplash.com/random/245x320)' }}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-coolGray-900 to-coolGray-900" />
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline text-coolGray-100 bg-violet-600">Art</a>
                        <div className="flex flex-col justify-start text-center text-coolGray-100">
                            <span className="text-3xl font-semibold leading-none tracking-wide">31</span>
                            <span className="leading-none uppercase">Jul</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a href="#" className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold text-coolGray-100">Fuga ea ullam earum assumenda, beatae labore eligendi.</a>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-coolGray-500" style={{ backgroundImage: 'url("https://source.unsplash.com/random/240x320")' }}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-coolGray-900 to-coolGray-900" />
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline text-coolGray-100 bg-violet-600">Politics</a>
                        <div className="flex flex-col justify-start text-center text-coolGray-100">
                            <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                            <span className="leading-none uppercase">Aug</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a href="#" className="font-medium text-md group-hover:underline text-coolGray-100"> Autem sunt tempora mollitia magnam non voluptates</a>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-coolGray-500" style={{ backgroundImage: 'url("https://source.unsplash.com/random/241x320")' }}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-coolGray-900 to-coolGray-900" />
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline text-coolGray-100 bg-violet-600">Health</a>
                        <div className="flex flex-col justify-start text-center text-coolGray-100">
                            <span className="text-3xl font-semibold leading-none tracking-wide">01</span>
                            <span className="leading-none uppercase">Aug</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a href="#" className="font-medium text-md group-hover:underline text-coolGray-100">Inventore reiciendis aliquam excepturi</a>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-coolGray-500" style={{ backgroundImage: 'url("https://source.unsplash.com/random/242x320")' }}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-coolGray-900 to-coolGray-900" />
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline text-coolGray-100 bg-violet-600">Science</a>
                        <div className="flex flex-col justify-start text-center text-coolGray-100">
                            <span className="text-3xl font-semibold leading-none tracking-wide">28</span>
                            <span className="leading-none uppercase">Jul</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a href="#" className="font-medium text-md group-hover:underline text-coolGray-100">Officiis mollitia dignissimos commodi optio vero animi</a>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-coolGray-500" style={{ backgroundImage: 'url("https://source.unsplash.com/random/243x320")' }}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-coolGray-900 to-coolGray-900" />
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline text-coolGray-100 bg-violet-600">Sports</a>
                        <div className="flex flex-col justify-start text-center text-coolGray-100">
                            <span className="text-3xl font-semibold leading-none tracking-wide">19</span>
                            <span className="leading-none uppercase">Jul</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a href="#" className="font-medium text-md group-hover:underline text-coolGray-100">Doloribus sit illo necessitatibus architecto exercitationem enim</a>
                    </h2>
                </div>{/**/}
            </div>
        </div>


    );
};

export default MovieNews;