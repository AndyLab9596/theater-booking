import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import { TOKEN } from '../../utils/config';
import './style.scss'

const AuthTemplate = (props) => {

    const { Component, redirectPath, ...restProps } = props


    return (

        <Route {...restProps} render={(propsRoute) => {
            if (!localStorage.getItem(TOKEN)) {
                return (
                    <div className="backgroundSign">
                        <section className="md:container mx-auto flex justify-center align-middle" >
                            <main className="pt-14 w-full max-w-xl">
                                <Component {...propsRoute} />
                            </main>
                        </section>
                    </div>
                )
            } else {
                return <Redirect to={redirectPath} />
            }
        }} />
    );
};

export default AuthTemplate;