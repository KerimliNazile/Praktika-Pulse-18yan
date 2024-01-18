

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss'


import { Pagination } from 'swiper/modules';

export default function Header() {
    return (
        <>
            <Swiper pagination={true}
                slidesPerView={1}
                spaceBetween={0}
                modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="HeaderArea">
                        <div className="Img">
                            <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg.webp" alt="" />
                        </div>
                        <div className="Text">
                            <h1>Special Dish. </h1>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="HeaderArea">
                        <div className="Img">
                            <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg.webp" alt="" />
                        </div>
                        <div className="Text">
                            <h1>Hygienic Food.
                            </h1>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="HeaderArea">
                        <div className="Img">
                            <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg.webp" alt="" />
                        </div>
                        <div className="Text">
                            <h1>Food and more.
                            </h1>

                        </div>

                    </div>

                </SwiperSlide>

            </Swiper>
        </>
    );
}
