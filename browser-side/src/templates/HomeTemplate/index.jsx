import React, { Fragment } from 'react';
import { Route } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const HomeTemplate = (props) => {

    const { Component, redirectPath, ...restProps } = props;


    return (
        <Route {...restProps} render={(propsRoute) => {
            return (
                <Fragment>
                    <Header {...propsRoute} />
                    <Component {...propsRoute} />
                    <Footer />
                </Fragment>
            )
        }}>

        </Route>
    );
};
export default HomeTemplate

// export const PrivateHomeTemplate = (props) => {

//     const { Component, redirectPath, ...restProps } = props;


//     return (
//         <Route {...restProps} render={(propsRoute) => {
//             if (localStorage.getItem(TOKEN)) {
//                 return (
//                     <Fragment>
//                         <Header {...propsRoute} />
//                         <Component {...propsRoute} />
//                     </Fragment>
//                 )
//             } else {
//                 return <Redirect to={redirectPath} />
//             }
//         }}>

//         </Route>
//     );
// };





