import _ from 'lodash';
import moment from 'moment';
import React from 'react';

const BookingHistory = ({ currentUserInfo }) => {
    const renderTicketItem = () => {
        return currentUserInfo.thongTinDatVe.map((ticket, index) => {
            return (
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="movie" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src={ticket.hinhAnh}
                            onError={e => (e.target.src = "https://picsum.photos/64/64/")}
                        />
                        <div className="flex-grow">
                            <h2 className="text-white title-font font-medium">{ticket.tenPhim}</h2>
                            <p className="text-white">Booking day: {moment(ticket.ngayDat).format('hh:mm A / DD-MM-YYYY')}</p>
                            <p className="text-white">Address: {_.first(ticket.danhSachGhe).tenHeThongRap} - {_.first(ticket.danhSachGhe).tenCumRap}</p>
                            <p className="text-white">Seats: {ticket.danhSachGhe.slice(-5).map(seat => {
                                return <span className="mx-1">{seat.tenGhe}</span>
                            })}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-14 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">MY BOOKING HISTORY</h1>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {renderTicketItem()}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookingHistory;