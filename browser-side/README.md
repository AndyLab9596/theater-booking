{danhSachPhim?.map((movie, index) => {
return (
// <Disclosure.Panel key={index} className="flex justify-between items-center">
// <div className="col-span-1 my-1 mx-auto">
// <img
// src={movie.hinhAnh} alt="hinh-movie"
// onError={e => (e.target.src = "https://picsum.photos/64/80")}
// className="object-cover w-16 h-20 mr-5"
// />
// </div>
// <div className="text-left col-span-3">
// <h1 className="text-white text-2xl cursor-pointer
                                            // hover:text-green-500 transition duration-150 ease-in-out">
// {movie.tenPhim}
// </h1>

                                            //     </div>
                                            // </Disclosure.Panel>



                                            <Disclosure.Panel key={index} className="flex justify-between items-center">
                                                <Disclosure className="">
                                                    {({ open }) => (
                                                        <Fragment>
                                                            <Disclosure.Button>
                                                                <div className="flex justify-between items-center space-x-2 my-5 ml-5">
                                                                    <div className="flex justify-start items-center">
                                                                        <img
                                                                            src={movie.hinhAnh} alt="hinh-movie"
                                                                            onError={e => (e.target.src = "https://picsum.photos/64/80")}
                                                                            className="object-cover w-12 h-12 mr-5"
                                                                        />
                                                                        <h1 className="text-white text-xl cursor-pointer
                                            hover:text-green-500 transition duration-150 ease-in-out">
                                                                            {movie.tenPhim}
                                                                        </h1>
                                                                    </div>
                                                                    <div>
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                            className={`${open ? 'transform rotate-180' : ''
                                                                                } w-5 h-5 text-purple-500`} viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </Disclosure.Button>
                                                            {/* <Disclosure.Panel>
                                                                <LstLichChieu lstLichChieuTheoPhim={movie.lstLichChieuTheoPhim} />
                                                            </Disclosure.Panel> */}
                                                        </Fragment>
                                                    )}
                                                </Disclosure>
                                            </Disclosure.Panel>
                                        )
                                    })}



                                    {lstCumRap?.map((station, index) => {
                    return (
                        <Disclosure>
                            {({ open }) => (
                                <Fragment>
                                    <Disclosure.Button
                                        className={`cursor-pointer flex justify-between flex-nowrap p-1 opacity-50 w-full
                                            ${index === valueDsPhim && 'opacity-100'}`} key={index}
                                        onClick={() => setValueDsPhim(index)}
                                    >
                                        {/* Cần fix lại chỗ này vì api trả về ko có hình ảnh cụm rạp */}
                                        <div>
                                            <img src={rapChieu}
                                                alt={index} className="mr-5 object-cover w-12 h-12" />

                                            <div className="text-left">
                                                <h6 className="text-md text-white font-semibold
                                                    hover:text-green-500 transition duration-150 ease-in-out ">
                                                    {station.tenCumRap}
                                                </h6>
                                                <p className=" text-sm text-yellow-300">
                                                    {station.diaChi.substr(0, 30)}...
                                                </p>

                                            </div>
                                        </div>
                                        <ChevronUpIcon
                                            className={`${open ? 'transform rotate-180' : ''
                                                } w-5 h-5 text-purple-500`}
                                        />

                                    </Disclosure.Button>


                                </Fragment>
                            )}
                        </Disclosure>
                    )
                })}
