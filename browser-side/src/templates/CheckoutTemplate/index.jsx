import { Fragment } from "react";
import { Redirect, Route } from "react-router";
import { TOKEN } from "../../utils/config";

export const CheckoutTemplate = (props) => {

    const { Component, redirectPath, ...restProps } = props;


    return (
        <Route {...restProps} render={(propsRoute) => {
            if (localStorage.getItem(TOKEN)) {
                return (
                    <Fragment>
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