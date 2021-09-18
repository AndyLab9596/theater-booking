import moment from 'moment';
import React, { Fragment } from 'react';
import ButtonCheckout from '../../../../components/ButtonCheckout';

const LstLichChieu = ({ lstLichChieuTheoPhim }) => {

    const mangChiChuaNgay = lstLichChieuTheoPhim.map(item => {
        return item.ngayChieuGioChieu.slice(0, 10);
    })
    const MangNgayKhongTrungLap = [...new Set(mangChiChuaNgay)]
    const filterByDay = (date) => {
        const gioChieuRenDer = lstLichChieuTheoPhim.filter(item => {
            if (item.ngayChieuGioChieu.slice(0, 10) === date) {
                return true
            }
            return false
        })
        return gioChieuRenDer;
    }


    return (
        <div>
            {MangNgayKhongTrungLap.map(date => {
                return <Fragment key={date}>
                    <p className="text-lg text-pink-500 mb-0">
                        {moment(date).format('dddd - MMM Do YY')}
                    </p>
                    <div className="flex flex-wrap">
                        {filterByDay(date).map(schedule => {
                            return <Fragment key={schedule.maLichChieu}>
                                <ButtonCheckout schedule={schedule} />
                            </Fragment>
                        })}
                    </div>
                </Fragment>
            })}
        </div>
    );
};

export default LstLichChieu;