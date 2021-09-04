import React from 'react';
import { Pagination } from 'antd';

const Testing = () => {

    const onChange = (current) => {
        console.log(current)
    }

    return (
        <div>
            <Pagination onChange={onChange} current defaultCurrent={1} total={50} />
        </div>
    );
};

export default Testing;