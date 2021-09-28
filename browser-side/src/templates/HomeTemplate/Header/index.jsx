import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import iconLogo from '../../../assets/img/iconlogo.png';
import createAction from '../../../store/actions/createAction';
import { actionTypes } from '../../../store/actions/Types';
import { TOKEN } from '../../../utils/config';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'HOME', id: 'home' },
    { name: 'MOVIE', id: 'movie' },
    { name: 'THEATER', id: 'theater' },
    // { name: 'NEWS', id: 'news' },
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

        <Disclosure as="nav" className={`py-1 w-full fixed z-20 bg-bgColorDetail
         ${scroll ? 'sm:bg-bgColorDetail' : 'sm:bg-transparent'}`}>
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16 ">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center 
                                justify-center p-2 rounded-md text-gray-400 
                                hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                                                        class="h-8 w-8 sm:h-10 sm:w-10  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full"
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
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg p-3
                                                bg-bgColorMain ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <span
                                                                className={classNames(active ? 'bg-gray-500' : '',
                                                                    'cursor-pointer block px-4 py-1 my-2 text-sm text-greenText ')}
                                                            >
                                                                {currentUser?.hoTen}
                                                            </span>
                                                        )}
                                                    </Menu.Item>

                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <span
                                                                onClick={() => handleLogOut()}
                                                                className={classNames(active ? 'bg-gray-500' : '',
                                                                    'cursor-pointer block px-4 py-1 my-2 text-sm font-semibold text-red-500')}
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
                                        hover:bg-bgColorMain hover:text-greenText cursor-pointer"
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