{NotDuplicateArrayShowDay.slice(0, 10).map((date => {
return <div>

<div className="flex">
{[...new Set(date)].map(day => (
<h1>{moment(day).format('dddd - MMM Do YY')}</h1>
))}
</div>
<div className="flex flex-wrap">
{movie.lstLichChieuTheoPhim?.slice(0, 10).map((schedule, index) => {
return (

                                                                    <div className="m-1">
                                                                        {/* <p className="text-white">
                                                                {moment(schedule.ngayChieuGioChieu).format('MMM Do YY')}
                                                            </p> */}
                                                                        <NavLink to={`/checkout/${schedule.maLichChieu}`} className="text-md font-semibold text-indigo-300 m-1
                                                            hover:text-purple-800 bg-gray-600 p-1 rounded-lg hover:bg-green-500 transition duration-150 ease-in-out">
                                                                            {moment(schedule.ngayChieuGioChieu).format('hh:mm')} ~ {moment(schedule.ngayChieuGioChieu).add(120, 'm').format('hh:mm')}
                                                                        </NavLink>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                }))}

<div>
                                                        <div className="flex">
                                                            {[...new Set(date)].map(day => (
                                                                <h1>{moment(day).format('dddd - MMM Do YY')}</h1>
                                                            ))}
                                                        </div>
                                                        <div className="flex flex-wrap">
                                                            {movie.lstLichChieuTheoPhim?.slice(0, 10).map((schedule, index) => {
                                                                return (

                                                                    <div className="m-1">
                                                                        {/* <p className="text-white">
                                                                {moment(schedule.ngayChieuGioChieu).format('MMM Do YY')}
                                                            </p> */}
                                                                        <NavLink to={`/checkout/${schedule.maLichChieu}`} className="text-md font-semibold text-indigo-300 m-1
                                                            hover:text-purple-800 bg-gray-600 p-1 rounded-lg hover:bg-green-500 transition duration-150 ease-in-out">
                                                                            {moment(schedule.ngayChieuGioChieu).format('hh:mm')} ~ {moment(schedule.ngayChieuGioChieu).add(120, 'm').format('hh:mm')}
                                                                        </NavLink>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
