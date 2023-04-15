import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ExerciseCard from "../Exercises/ExerciseCard";

SwiperCore.use([Navigation]);

function Slider({ data }) {
    const [swiper, setSwiper] = React.useState(null);

    const handleNextSlide = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    const handlePrevSlide = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    return (
        <>
            <Swiper
                spaceBetween={50}
                onSlideChange={() => console.log('slide change')}
                onSwiper={setSwiper}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}

                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    940: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    }
                }}
            >
                {data?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ExerciseCard {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-buttons">
                <button className="swiper-button-prev" onClick={handlePrevSlide}><ArrowBackIosIcon/></button>
                <button className="swiper-button-next" onClick={handleNextSlide}><ArrowForwardIosIcon/></button>
            </div>
        </>
    );
}

export default Slider;
