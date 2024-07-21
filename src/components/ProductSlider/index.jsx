import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ProductCard from "../ProductCard";
import { useRef } from "react";

const ProductSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full h-full md:rounded-lg">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={6}
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
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        className="h-full"
      >
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <ProductCard></ProductCard>
            </SwiperSlide>
          ))}
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

export default ProductSlider;
