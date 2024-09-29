import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import p1 from "./assets/Content.png"
import p2 from "./assets/Content2.png"
import p3 from "./assets/OIP.jpg"
import { Autoplay } from "swiper/modules"
const images = [p1, p3, p2]

const ImageSlider = () => {
  return (
    <div className=" xl:w-[70rem] lg:w-[50rem] w-96 object-contain mx-auto md:w-[40rem]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover  xl:w-[70rem] lg:w-[50rem]  md:w-[40rem]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageSlider
