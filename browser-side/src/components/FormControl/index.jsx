import React from 'react';

const Login = () => {
    return (
        <div className="flex flex-col w-full py-16 px-14  rounded-md sm:p-10 shadow-2xl ">
            <div className="mb-2 text-center">
                <p className="text-2xl text-green-500 font-semibold uppercase mb-3">Hello</p>
                <h1 className="text-white text-4xl uppercase">Welcome back</h1>
            </div>
            <form noValidate action className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-3 text-base uppercase leading-7 text-white text-left">
                            Email
                            <span className="text-red-500">*</span>
                        </label>
                        <input type="email" name="email" id="email" placeholder="Enter your email"
                            className="text-white text-lg w-full h-11 bg-transparent border-b-2 border-gray-600 focus:border-b-2 focus:border-red-500 focus:outline-none	" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-3 text-base uppercase leading-7 text-white text-left">
                            Password
                            <span className="text-red-500">*</span>
                        </label>
                        <input type="email" name="email" id="email" placeholder="Enter your password"
                            className="text-white text-lg w-full h-11 bg-transparent border-b-2 border-gray-600 focus:border-b-2 focus:border-red-500 focus:outline-none	" />
                    </div>
                </div>
                <div className="space-y-2">
                    <button type="submit" className="authBtn
                    ">
                        SIGN IN
                    </button>
                </div>
            </form>
        </div>

    );
};

export default Login;