import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="w-full h-full md:rounded-lg">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        <SwiperSlide>
          <a href="/">
            <div className="w-full h-full">
              <img
                src="https://prod-cdn.pharmacity.io/e-com/images/banners/20240702070452-0-%28Slide%20banner_Desktop%29%20Enterogermina%20banner_1590x%20604.png"
                alt=""
                className="w-full h-full object-cover md:rounded-lg"
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <div className="w-full h-full">
              <img
                src="https://prod-cdn.pharmacity.io/e-com/images/banners/20240702070452-0-%28Slide%20banner_Desktop%29%20Enterogermina%20banner_1590x%20604.png"
                alt=""
                className="w-full h-full object-cover md:rounded-lg"
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <div className="w-full h-full">
              <img
                src="https://prod-cdn.pharmacity.io/e-com/images/banners/20240702070452-0-%28Slide%20banner_Desktop%29%20Enterogermina%20banner_1590x%20604.png"
                alt=""
                className="w-full h-full object-cover md:rounded-lg"
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <div className="w-full h-full">
              <img
                src="https://prod-cdn.pharmacity.io/e-com/images/banners/20240702070452-0-%28Slide%20banner_Desktop%29%20Enterogermina%20banner_1590x%20604.png"
                alt=""
                className="w-full h-full object-cover md:rounded-lg"
              />
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <div className="w-full h-full">
              <img
                src="https://prod-cdn.pharmacity.io/e-com/images/banners/20240702070452-0-%28Slide%20banner_Desktop%29%20Enterogermina%20banner_1590x%20604.png"
                alt=""
                className="w-full h-full object-cover md:rounded-lg"
              />
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
      <div
        ref={prevRef}
        className="swiper-button-prev custom-swiper-button absolute left-0 top-1/2 transform -translate-x-1/2 bg-white size-10 text-gray-500 p-2 rounded-full font-semibold text-xs md:text-2xl shadow transition-all"
      ></div>
      <div
        ref={nextRef}
        className="swiper-button-next custom-swiper-button absolute right-0 top-1/2 transform translate-x-1/2 bg-white size-10 text-gray-500 p-2 rounded-full font-semibold text-xs md:text-2xl shadow transition-all"
      ></div>
    </div>
  );
};

export default Slider;
