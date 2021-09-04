import React, { Fragment } from 'react';
import { Route } from 'react-router';
import Header from './Header';

const HomeTemplate = (props) => {

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

export default HomeTemplate;