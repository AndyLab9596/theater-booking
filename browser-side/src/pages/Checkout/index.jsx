import React from 'react';

const CheckoutPage = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-8">

            </div>
            <div className="col-span-4 divide-y-2 divide-yellow-500 divide-dashed">
                <h3 className="text-green-500 text-center text-2xl">BOOKING SUMMERY</h3>

                <div>
                    <h5>Avenger</h5>
                    <p>Rạp</p>
                    <p>Ngày tháng năm</p>
                </div>
                <div>
                    Ghế
                </div>
                <div>
                    <p>Email</p>
                </div>
                <div>
                    <p>Phone</p>
                </div>
                <div>
                    <h3 className="text-green-500 text-center text-2xl">0DD</h3>
                </div>
                <button className="mb-0 h-screen">
                    BOOKING
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;