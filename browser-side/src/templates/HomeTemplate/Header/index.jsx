import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { TOKEN } from '../../../utils/config'
import { UserOutlined, LoginOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import createAction from '../../../store/actions/createAction';
import { actionTypes } from '../../../store/actions/Types';
import { scroller } from 'react-scroll';
import iconLogo from '../../../assets/img/iconlogo.png'

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
        window.location.reload();
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
        <header className={`py-5 w-full fixed z-10 ${scroll ? 'bg-bgColorDetail' : 'bg-transparent'}`}>
            <div className="container flex justify-between items-center align-middle h-16 mx-auto">
                <NavLink to="/" className="flex items-center">
                    <img src={iconLogo} alt="logo" className="h-10 object-cover" />
                </NavLink>
                <ul className="items-center hidden space-x-3 lg:flex align-middle x">
                    <li className="flex px-3 text-xl font-bold cursor-pointer">
                        <p className="flex items-center text-white my-auto"
                            activeClassName="border-b-2 border-green-500"
                            onClick={() => handleClickNav("home")}
                        >
                            HOME
                        </p>
                    </li>
                    <li className="flex px-3 text-xl font-bold cursor-pointer">
                        <p className="flex items-center text-white my-auto"
                            onClick={() => handleClickNav("movie")}
                            activeClassName="border-b-2 border-green-500">
                            MOVIE
                        </p>
                    </li>
                    <li className="flex px-3 text-xl font-bold cursor-pointer">
                        <p className="flex items-center text-white my-auto"
                            onClick={() => handleClickNav("theater")}
                            activeClassName="border-b-2 border-green-500">
                            THEATER
                        </p>
                    </li>
                    <li className="flex px-3 text-xl font-bold cursor-pointer">
                        <p className="flex items-center text-white my-auto"
                            onClick={() => handleClickNav("news")}
                            activeClassName="border-b-2 border-green-500">
                            NEWS
                        </p>
                    </li>
                    <li className="flex px-3 text-xl font-bold cursor-pointer">
                        <p className="flex items-center text-white my-auto"
                            onClick={() => handleClickNav("app")}
                            activeClassName="border-b-2 border-green-500">
                            APPLICATION
                        </p>
                    </li>
                </ul>

                {!localStorage.getItem(TOKEN) && (
                    <div className="items-center flex-shrink-0 hidden lg:flex" onClick={() => history.push('/signin')}>
                        <button className="authBtn">JOIN US</button>
                    </div>
                )}

                {
                    localStorage.getItem(TOKEN) && (
                        <div className="items-center flex-shrink-0 hidden lg:flex  align-middle" >
                            <div className="flex align-middle">
                                <UserOutlined
                                    className="py-1.5 mr-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full h-8 w-8 leading-8"
                                    style={{ fontSize: "20px", color: "white", fontWeight: 500 }}
                                />
                                <p className="text-pink-200 text-lg font-bold flex items-center border-r-2 border-indigo-500 pr-5">
                                    {currentUser?.taiKhoan}
                                </p>

                                <LoginOutlined style={{ fontSize: "20px", color: "white", fontWeight: 500 }}
                                    className="ml-5 py-1.5 "
                                    onClick={handleLogOut}
                                />
                            </div>
                        </div>
                    )
                }

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