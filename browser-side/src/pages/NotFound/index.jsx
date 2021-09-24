import React from 'react';
import { useHistory } from 'react-router';
import NotFound404 from '../../assets/img/404.png';

const NotFound = () => {
    const history = useHistory()
    return (
        <section className="bg-bgColorMain w-screen h-screen flex flex-col space-y-8 justify-center items-center">
            <div className="w-6/12 mx-auto">
                <img src={NotFound404} alt="404" className="object-cover h-auto" />
            </div>
            <div>
                <button className="button--action" onClick={() => history.push('/')}>
                    Back To Home
                </button>
            </div>
        </section>
    );
};

export default NotFound;