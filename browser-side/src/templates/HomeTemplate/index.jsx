import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router';
import { TOKEN } from '../../utils/config';
import Header from './Header';

export const PublicHomeTemplate = (props) => {

    const { Component, redirectPath, ...restProps } = props;


    return (
        <Route {...restProps} render={(propsRoute) => {
            return (
                <Fragment>
                    <Header {...propsRoute} />
                    <Component {...propsRoute} />
                </Fragment>
            )
        }}>

        </Route>
    );
};

export const PrivateHomeTemplate = (props) => {

    const { Component, redirectPath, ...restProps } = props;


    return (
        <Route {...restProps} render={(propsRoute) => {
            if (localStorage.getItem(TOKEN)) {
                return (
                    <Fragment>
                        <Header {...propsRoute} />
                        <Component {...propsRoute} />
                    </Fragment>
                )
            } else {
                return <Redirect to={redirectPath} />
            }
        }}>

        </Route>
    );
};





