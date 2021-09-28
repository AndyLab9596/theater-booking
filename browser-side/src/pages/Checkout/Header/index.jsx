import React from 'react';
import { ArrowRightOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
const { Step } = Steps;

const Header = ({ current, currentUser, handleBackToPrevPage }) => {
    const steps = [
        {
            title: 'First',
            content: 'Choosing',
        },
        {
            title: 'Second',
            content: 'Confirm',
        },
        {
            title: 'Last',
            content: 'Paying',
        },
    ];
    return (
        <header className={`py-5 w-full bg-bgColorDetail`}>
            <div className="container flex items-center align-middle h-16 mx-auto">

                <div className="flex-grow px-11 hidden sm:block">
                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title}
                                title={
                                    <span className="text-white text-lg font-semibold">
                                        {item.content}
                                    </span>} />
                        ))}
                    </Steps>
                </div>

                <div className="flex align-middle">
                    <UserOutlined
                        className="py-1.5 mr-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full h-8 w-8 leading-8"
                        style={{ fontSize: "20px", color: "white", fontWeight: 500 }}
                    />
                    <p className="text-pink-200 text-lg font-bold flex items-center border-r-2 border-indigo-500 pr-5 mb-0">
                        {currentUser?.hoTen}
                    </p>

                    <ArrowRightOutlined style={{ fontSize: "20px", color: "white", fontWeight: 500 }}
                        className="ml-1 py-1.5 "
                        onClick={() => handleBackToPrevPage()}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;