import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import p1 from "./assets/Content.png"
import p2 from "./assets/Content2.png"
import p3 from "./assets/OIP.jpg"
import { Autoplay } from "swiper/modules"
const images = [p1, p3, p2]

const ImageSlider = () => {
  return (
    <div className="w-[70rem] object-contain mx-auto">
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
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageSlider
