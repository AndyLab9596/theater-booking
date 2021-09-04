import { Form, Formik } from 'formik';
import React from 'react';
import InputField from '../../components/InputField';
import * as yup from 'yup';

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
    window.scroll(0, 0)
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
                console.log(values)
            }}
        >
            {Formik => (
                <div div className="flex flex-col w-full py-12 px-14  rounded-md sm:p-10 shadow-2xl ">
                    <div className="mb-2 text-center">
                        <p className="text-2xl text-green-500 font-semibold uppercase mb-3">Hello</p>
                        <h1 className="text-white text-4xl uppercase">Welcome back</h1>
                    </div>
                    {console.log(Formik.values)}
                    <Form className="space-y-12 ng-untouched ng-pristine ng-valid" autocomplete="off">
                        <div className="grid grid-cols-2 gap-4">
                            <InputField type="text" name="taiKhoan" label="USERNAME" />
                            <InputField type="password" name="matKhau" label="PASSWORD" />
                            <InputField type="text" name="email" label="EMAIL" edit="col-span-2" />
                            <InputField type="text" name="maNhom" label="GROUP ID" />
                            <InputField type="text" name="hoTen" label="FULL NAME" />
                        </div>
                        <div className="space-y-2 space-x-4">
                            <button type="submit" className="authBtn">
                                SIGN IN
                            </button>
                            <button type="reset" className="authBtn" >
                                RESET
                            </button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik >
    );
};

export default SignUpPage;