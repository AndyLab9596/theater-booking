import React, { Fragment, useEffect, useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { TOKEN } from '../../../utils/config'
import { UserOutlined, LoginOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import createAction from '../../../store/actions/createAction';
import { actionTypes } from '../../../store/actions/Types';
import { scroller } from 'react-scroll';
import iconLogo from '../../../assets/img/iconlogo.png'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'HOME', id: 'home' },
    { name: 'MOVIE', id: 'movie' },
    { name: 'THEATER', id: 'theater' },
    { name: 'NEWS', id: 'news' },
    { name: 'APPLICATION', id: 'app' },
]

const Header = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.UserReducer.currentUser);
    const { userLoading, arrMovieLoading, arrTheaterLoading } = useSelector(state => state.LoadingReducer)
    const HomepageLoading = userLoading || arrMovieLoading || arrTheaterLoading;

    const handleLogOut = () => {
        dispatch(createAction(actionTypes.LOGOUT_USER));
        history.push('/');
        // window.location.reload();
    }

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 250)
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [scroll])

    const handleClickNav = (id) => {
        if (location.pathname === "/") {
            scroller.scrollTo(id, {
                duration: 800,
                smooth: 'easeInOutQuint'
            })
        } else {
            setTimeout(() => {
                history.push("/", id)
            }, 50)
        }
    }

    useEffect(() => {
        if (!HomepageLoading) {
            setTimeout(() => {
                scroller.scrollTo(location.state, {
                    duration: 800,
                    smooth: 'easeInOutQuart'
                })
            }, 500)
        }
    }, [HomepageLoading])


    return (
        // <header className={`py-5 w-full fixed z-10 
        // ${scroll ? 'bg-bgColorDetail' : 'bg-transparent'}`}>
        //     <div className="container flex justify-between items-center align-middle h-16 mx-auto">
        //         <NavLink to="/" className="flex items-center">
        //             <img src={iconLogo} alt="logo" className="h-10 object-cover" />
        //         </NavLink>
        //         <ul className="items-center hidden space-x-3 lg:flex align-middle x">
        //             <li className="flex px-3 text-xl font-bold cursor-pointer">
        //                 <p className="flex items-center text-white my-auto"
        //                     activeClassName="border-b-2 border-green-500"
        //                     onClick={() => handleClickNav("home")}
        //                 >
        //                     HOME
        //                 </p>
        //             </li>
        //             <li className="flex px-3 text-xl font-bold cursor-pointer">
        //                 <p className="flex items-center text-white my-auto"
        //                     onClick={() => handleClickNav("movie")}
        //                     activeClassName="border-b-2 border-green-500">
        //                     MOVIE
        //                 </p>
        //             </li>
        //             <li className="flex px-3 text-xl font-bold cursor-pointer">
        //                 <p className="flex items-center text-white my-auto"
        //                     onClick={() => handleClickNav("theater")}
        //                     activeClassName="border-b-2 border-green-500">
        //                     THEATER
        //                 </p>
        //             </li>
        //             <li className="flex px-3 text-xl font-bold cursor-pointer">
        //                 <p className="flex items-center text-white my-auto"
        //                     onClick={() => handleClickNav("news")}
        //                     activeClassName="border-b-2 border-green-500">
        //                     NEWS
        //                 </p>
        //             </li>
        //             <li className="flex px-3 text-xl font-bold cursor-pointer">
        //                 <p className="flex items-center text-white my-auto"
        //                     onClick={() => handleClickNav("app")}
        //                     activeClassName="border-b-2 border-green-500">
        //                     APPLICATION
        //                 </p>
        //             </li>
        //         </ul>

        // {!localStorage.getItem(TOKEN) && (
        //     <div className="items-center flex-shrink-0 hidden lg:flex" onClick={() => history.push('/signin')}>
        //         <button className="authBtn">JOIN US</button>
        //     </div>
        // )
        // }

        // {
        //     localStorage.getItem(TOKEN) && (
        //         <div className="items-center flex-shrink-0 hidden lg:flex  align-middle" >
        //             <div className="flex align-middle">
        // <UserOutlined
        //     className="py-1.5 mr-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full h-8 w-8 leading-8"
        //     style={{ fontSize: "20px", color: "white", fontWeight: 500 }}
        // />
        // <p className="text-pink-200 text-lg font-bold flex items-center border-r-2 border-indigo-500 pr-5">
        //     {currentUser?.taiKhoan}
        // </p>

        // <LoginOutlined style={{ fontSize: "20px", color: "white", fontWeight: 500 }}
        //     className="ml-5 py-1.5 "
        //     onClick={handleLogOut}
        // />
        //             </div>
        //         </div>
        //     )
        // }

        //         <button className="p-4 lg:hidden">
        //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
        //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        //             </svg>
        //         </button>
        //     </div>
        // </header>

        <Disclosure as="nav" className={`py-1 w-full fixed z-10 bg-bgColorDetail
         ${scroll ? 'sm:bg-bgColorDetail' : 'sm:bg-transparent'}`}>
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16 ">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-5 sm:h-8 w-auto"
                                        src={iconLogo}
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-5 sm:h-8 w-auto"
                                        src={iconLogo}
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden sm:flex sm:items-center sm:ml-6">
                                    <div className="flex justify-center items-center">
                                        {navigation.map((item) => (
                                            <p
                                                onClick={() => handleClickNav(item.id)}
                                                key={item.name}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white'
                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'mb-0 px-3 py-2 rounded-md text-sm sm:text-lg font-semibold cursor-pointer'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex space-x-2 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {!localStorage.getItem(TOKEN) && (
                                    <button className="btn--small" onClick={() => history.push('/signin')}>JOIN US</button>
                                )}
                                {localStorage.getItem(TOKEN) && (
                                    <>
                                        <Menu as="div" className="relative">
                                            <div>
                                                <Menu.Button className="flex text-sm rounded-full 
                                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="h-6 w-6  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full"
                                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg px-1 py-1 
                                                bg-bgColorMain ring-1 ring-black ring-opacity-5 focus:outline-none divide-y-2">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <span
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-1 text-sm text-white')}
                                                            >
                                                                {currentUser?.taiKhoan} ABC
                                                            </span>
                                                        )}
                                                    </Menu.Item>

                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <span
                                                                onClick={() => handleLogOut()}
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-1 text-sm text-red-500')}
                                                            >
                                                                Sign out
                                                            </span>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <Transition
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-y-full "
                        enterTo="translate-y-0 "
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-y-0 "
                        leaveTo="-translate-y-full "
                    >
                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <p
                                        key={item.name}
                                        className="block px-3 py-2 rounded-md text-gray-300 text-base font-semibold 
                                        hover:bg-bgColorMain hover:text-greenText"
                                        onClick={() => handleClickNav(item.id)}
                                    >
                                        {item.name}
                                    </p>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </Transition>

                </>
            )}
        </Disclosure>
    );
};

export default Header;