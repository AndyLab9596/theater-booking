import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import InputField from '../../components/InputField';
import * as yup from 'yup';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import createAction from '../../store/actions/createAction';
import { actionTypes } from '../../store/actions/Types';
import { registerUser } from '../../store/actions/ManageUserAction';
import { notification } from 'antd';

const schema = yup.object().shape({
    taiKhoan: yup.string()
        .required('username is required !').max(15, 'Must be 15 character or less !'),
    // .test('Should has at least two words', 'Please enter at least two words', (value) => {
    //     return value.split(' ').length > 2
    // }),
    matKhau: yup.string().required('password is required !').min(8, 'Please enter at least 8 characters !'),
    email: yup.string().required('Please enter your email !').email('Please enter valid email !'),
    soDt: yup.number().required('Please enter your phone !'),
    maNhom: yup.string().required('Please enter your group id'),
    hoTen: yup.string().required('Please enter your full name')
})

const SignUpPage = () => {
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

    return (
        <Formik
            initialValues={{
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "",
                hoTen: "",
            }}
            validationSchema={schema}
            onSubmit={(values) => {
                dispatch(registerUser(values,
                    () => { history.push('/signin') },
                    (desc) => { openNotification(desc) }
                ))
            }}
        >
            {Formik => (
                <div div className="flex flex-col w-full py-12 px-14  rounded-md sm:p-10 shadow-2xl ">
                    <div className="mb-2 text-center">
                        <p className="text-2xl text-green-500 font-semibold uppercase mb-3">Welcome to</p>
                        <h1 className="text-white text-4xl uppercase">My Theater App</h1>
                    </div>
                    <Form className="space-y-12 ng-untouched ng-pristine ng-valid" autocomplete="off">
                        <div className="grid grid-cols-2 gap-4">
                            <InputField type="text" name="taiKhoan" label="USERNAME" />
                            <InputField type="password" name="matKhau" label="PASSWORD" />
                            <InputField type="text" name="email" label="EMAIL" />
                            <InputField type="text" name="soDt" label="PHONE" />
                            <InputField type="text" name="maNhom" label="GROUP ID" />
                            <InputField type="text" name="hoTen" label="FULL NAME" />
                        </div>
                        <div className="space-y-2 space-x-4">
                            <button type="submit" className="btn--medium">
                                SIGN UP
                            </button>
                            <NavLink to="/">
                                <button type="button" className="btn--medium-transparent" >
                                    HOME
                                </button>
                            </NavLink>
                        </div>
                    </Form>
                    <p className="text-base text-white mt-6">
                        Already have an account?
                        <span className="pl-1.5">
                            <NavLink to="/signin">
                                Sign in now
                            </NavLink>
                        </span>
                    </p>
                </div>
            )}
        </Formik >
    );
};

export default SignUpPage;