import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import InputField from '../../components/InputField';
import * as yup from 'yup';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/ManageUserAction';
import { notification } from 'antd';
import { useSelector } from 'react-redux';

const schema = yup.object().shape({
    taiKhoan: yup.string()
        .required('username is required !').max(15, 'Must be 15 character or less'),
    // .test('Should has at least two words', 'Please enter at least two words', (value) => {
    //     return value.split(' ').length > 2
    // }),
    matKhau: yup.string().required('password is required !').min(8, 'Please enter at least 8 characters')
})

const SignInPage = () => {
    // const currentUser = useSelector(state => state.UserReducer.currentUser);
    const location = useLocation();
    console.log('location', location)
    const dispatch = useDispatch();
    const history = useHistory();
    const openNotification = (desc) => {
        notification.open({
            message: 'Something went wrong !!!',
            description: desc,
            style: {
                backgroundColor: "#F87171",
                color: "#fff"
            }
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    return (
        <Formik
            initialValues={{
                taiKhoan: "",
                matKhau: "",
            }}
            validationSchema={schema}
            onSubmit={(values) => {
                dispatch(loginUser(values,
                    () => { history.goBack() },
                    (desc) => { openNotification(desc) }
                ))
            }}
        >
            {Formik => (
                <div div className="flex flex-col w-full py-12 px-14  rounded-md sm:p-10 shadow-2xl ">
                    <div className="mb-2 text-center">
                        <p className="text-2xl text-green-500 font-semibold uppercase mb-3">Hello</p>
                        <h1 className="text-white text-4xl uppercase">Welcome back</h1>
                    </div>
                    <Form className="space-y-12 ng-untouched ng-pristine ng-valid" autocomplete="off">
                        <div className="space-y-4">
                            <InputField type="text" name="taiKhoan" label="USERNAME" />
                            <InputField type="password" name="matKhau" label="PASSWORD" />
                        </div>
                        <div className="space-y-2 space-x-4">
                            <button type="submit" className="authBtn">
                                SIGN IN
                            </button>
                            <NavLink to="/">
                                <button type="button" className="authBtn" >
                                    HOME
                                </button>
                            </NavLink>
                        </div>
                    </Form>
                    <p className="text-base text-white mt-6">
                        Don't have an account?
                        <span className="pl-1.5">
                            <NavLink to="/signup">
                                Sign up here
                            </NavLink>
                        </span>
                    </p>
                </div>
            )}
        </Formik >
    );
};

export default SignInPage;