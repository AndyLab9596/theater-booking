import React from 'react';
import { Cascader } from 'antd';

const options = [
    {
        value: 'John Wick',
        label: 'John Wick',
        children: [
            {
                value: 'BHD Star Cineplex',
                label: 'BHD Star Cineplex',
                children: [
                    {
                        value: 'Thứ ba 2019-01-01',
                        label: 'Thứ ba 2019-01-01',
                        children: [
                            {
                                value: '10: 10',
                                label: '10: 10'
                            }

                        ]
                    },
                ],
            },
        ],
    },

];

function onChange(value) {
    console.log(value);
}


const SearchBarCascader = ({ arrTheater, arrMovies }) => {
    // console.log(arrMovies)

    const Array = [];

    const Obj = arrMovies.map((movies) => {
        return {
            movieName: movies.tenPhim,
            movieId: movies.maPhim
        }
    })

    const arrayOption = arrTheater.map((theater) => {
        return theater.lstCumRap.map(movieList => {
            return movieList.danhSachPhim.map((lstLichChieu) => {
                return lstLichChieu.lstLichChieuTheoPhim.map((info) => {
                    return {
                        value: lstLichChieu.tenPhim,
                        label: lstLichChieu.tenPhim,
                        children: [
                            {
                                value: movieList.tenCumRap,
                                label: movieList.tenCumRap,
                                children: [
                                    {
                                        value: info.ngayChieuGioChieu,
                                        label: info.ngayChieuGioChieu
                                    }
                                ]
                            }
                        ]
                    }
                })
            })
        })
    })


    const movies = arrMovies.map((movie) => {
        return {
            value: movie.maPhim,
            label: movie.tenPhim
        }
    })


    return (
        <div className="max-w-4xl h-24 mx-auto">
            <Cascader options={arrayOption} onChange={onChange} placeholder="Please select" />,

        </div>
    );
};

export default SearchBarCascader;