import React from 'react';

const Footer = () => {

    const icons = [
        { ref: "https://www.cgv.vn/", iconImg: "https://tix.vn/app/assets/img/icons/cgv.png" },
        { ref: "https://www.bhdstar.vn/", iconImg: "https://tix.vn/app/assets/img/icons/bhd.png" },
        { ref: "https://www.galaxycine.vn/", iconImg: "https://tix.vn/app/assets/img/icons/galaxycine.png" },
        { ref: "http://cinestar.com.vn/", iconImg: "https://tix.vn/app/assets/img/icons/cinestar.png" },
        { ref: "https://lottecinemavn.com/LCHS/index.aspx", iconImg: "https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" },
        { ref: "https://www.megagscinemas.vn/", iconImg: "https://tix.vn/app/assets/img/icons/megags.png" },
        { ref: "https://www.betacinemas.vn/home.htm", iconImg: "https://tix.vn/app/assets/img/icons/bt.jpg" },
        { ref: "http://ddcinema.vn/", iconImg: "https://tix.vn/app/assets/img/icons/dongdacinema.png" },
        { ref: "http://ddcinema.vn/", iconImg: "https://tix.vn/app/assets/img/icons/dongdacinema.png" },
        { ref: "https://touchcinema.com/", iconImg: "https://tix.vn/app/assets/img/icons/TOUCH.png" },
        { ref: "https://cinemaxvn.com/", iconImg: "https://tix.vn/app/assets/img/icons/cnx.jpg" },
        { ref: "http://starlight.vn/", iconImg: "https://tix.vn/app/assets/img/icons/STARLIGHT.png" },
        { ref: "https://zalopay.vn/", iconImg: "https://tix.vn/app/assets/img/icons/zalopay_icon.png" },
        { ref: "https://www.payoo.vn/", iconImg: "https://tix.vn/app/assets/img/icons/payoo.jpg" },
        { ref: "https://portal.vietcombank.com.vn/Pages/Home.aspx", iconImg: "https://tix.vn/app/assets/img/icons/VCB.png" },
        { ref: "https://www.agribank.com.vn/", iconImg: "https://tix.vn/app/assets/img/icons/AGRIBANK.png" },
        { ref: "https://www.vietinbank.vn/", iconImg: "https://tix.vn/app/assets/img/icons/VIETTINBANK.png" },
        { ref: "https://www.indovinabank.com.vn/", iconImg: "https://tix.vn/app/assets/img/icons/IVB.png" },
        { ref: "https://webv3.123go.vn/", iconImg: "https://tix.vn/app/assets/img/icons/123go.png" },
        { ref: "https://laban.vn/", iconImg: "https://tix.vn/app/assets/img/icons/laban.png" },
    ]



    return (
        <footer className="py-6 bg-bgColorDetail">
            <div className="container">
                <div className="grid grid-cols-12">

                    <div className="col-start-3">
                        <img src="http://pixner.net/boleto/demo/assets/images/logo/logo.png" alt="logo"
                            className="h-10 object-cover object-scale-down" />
                        <ul className="text-xs leading-8 text-white text-left">
                            <li>Agreements</li>
                            <li>Policies</li>
                        </ul>
                        <ul className="text-xs leading-4 text-white text-left">
                            <li>BOLETO</li>
                            <li>FAQ</li>
                            <li>Brand</li>
                            <li>Guidelines</li>
                        </ul>
                    </div>
                    <div className="col-start-5 col-span-3">
                        <h6 className="text-left text-sm leading-8 text-white">Partners</h6>
                        <div className="grid grid-flow-col grid-cols-5 grid-rows-4 gap-3">
                            {icons.map((icon, index) => (
                                <a href={icon.ref} key={index} target="_blank" rel="noreferrer">
                                    <img src={icon.iconImg} alt="cgv"
                                        className="w-8 h-8 rounded-full flex items-center justify-center bg-white object-cover" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="col-start-8 col-span-3 flex justify-around">
                        <div>
                            <h6 className="text-white">Mobile Apps</h6>
                            <div className="flex justify-between items-center space-x-5 p-1">
                                <a href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                                    target="_blank" rel="noreferrer"
                                >
                                    <img src="https://tix.vn/app/assets/img/icons/apple-logo.png" alt="apple" className="h-8 w-auto object-cover" />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                                    target="_blank" rel="noreferrer"
                                >
                                    <img src="https://tix.vn/app/assets/img/icons/android-logo.png" alt="gg play" className="h-8 w-auto object-cover" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h6 className="text-white">Social</h6>
                            <div className="flex justify-between items-center space-x-5 p-1">
                                <a href="https://www.facebook.com/tix.vn/"
                                    target="_blank" rel="noreferrer"
                                >
                                    <img src="https://tix.vn/app/assets/img/icons/facebook-logo.png" alt="fb" className="h-8 w-auto object-cover" />
                                </a>
                                <a href="https://zalo.me/tixdatve"
                                    target="_blank" rel="noreferrer"
                                >
                                    <img src="https://tix.vn/app/assets/img/icons/zalo-logo.png" alt="zalo" className="h-8 w-auto object-cover" />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </footer>

    );
};

export default Footer;