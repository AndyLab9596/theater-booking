import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="py-5 w-full fixed border-b-2 border-gray-300 bg-indigo-500">
            <div className="container flex justify-between align-middle h-16 mx-auto">
                <NavLink to="/" className="flex items-center">
                    <img src="http://pixner.net/boleto/demo/assets/images/logo/logo.png" alt="logo" className="h-7" />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex align-middle x">
                    <li className="flex py-1.5 px-3 text-xl font-bold">
                        <NavLink to="/" className="flex items-center text-white" activeClassName="border-b-2 border-green-500">
                            Schedule
                        </NavLink>
                    </li>
                    <li className="flex py-1.5 px-3 text-xl font-bold" >
                        <NavLink to="/a" className="flex items-center text-white" activeClassName="border-b-2 border-green-500">
                            Movie stations
                        </NavLink>
                    </li>
                    <li className="flex py-1.5 px-3 text-xl font-bold">
                        <NavLink to="/b" className="flex items-center text-white" activeClassName="border-b-2 border-green-500">
                            News
                        </NavLink>
                    </li>
                    <li className="flex py-1.5 px-3 text-xl font-bold">
                        <NavLink to="/c" className="flex items-center text-white" activeClassName="border-b-2 border-green-500">
                            Application
                        </NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="authBtn">JOIN US</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    );
};

export default Header;