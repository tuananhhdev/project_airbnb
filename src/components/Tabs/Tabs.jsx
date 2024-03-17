import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Tabs.css";
const Tabs = () => {
  return (
    <div>
      <div className="h-14"></div>
      <div className="box container mx-auto sticky top-32">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={false}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper text-center">
          <SwiperSlide className="one">
            <img
              className="interesting"
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              width={30}
              height={30}
            />
            <span className="interesting_title font-semibold">
              Thật ấn tượng
            </span>
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              className="two"
              src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
              width="30"
              height="30"
            />
            <span className="font-semibold">Công viên quốc gia</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="three"
              src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
              width={30}
              height={30}
            />

            <span className="font-semibold">Hồ bơi tuyệt vời</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="four"
              src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
              width={30}
              height={30}
            />

            <span className="font-semibold">Đảo</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="five"
              src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
              width={30}
              height={30}
            />

            <span className="font-semibold">Bãi biển</span>
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="eight"
              src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
              width={30}
              height={30}
            />

            <span className="font-semibold">Thiết kế</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="nine"
              src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"
              width={30}
              height={30}
            />

            <span className="font-semibold">Bắc cực</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="ten"
              src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
              width={30}
              height={30}
            />

            <span className="font-semibold">Cabin</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="eleven"
              src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
              width={30}
              height={30}
            />

            <span className="font-semibold">Ven hồ</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="muoi_hai"
              src="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg"
              width={30}
              height={30}
            />

            <span className="font-semibold">Chơi golf</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="muoi_ba"
              src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
              width={30}
              height={30}
            />

            <span className="font-semibold">Khung cảnh tuyệt vời</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="muoi_bon"
              src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"
              width={30}
              height={30}
            />

            <span className="font-semibold">Hang động</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="muoi_lam"
              src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
              width={30}
              height={30}
            />

            <span className="font-semibold">Lướt sóng</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="muoi_sau"
              src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"
              width={30}
              height={30}
            />

            <span className="font-semibold">Khung nhà chữ A</span>
          </SwiperSlide>
          <SwiperSlide className="muoi_bay">
            <img
              src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
              width={30}
              height={30}
            />

            <span className="font-semibold">Nhà dưới lòng đất</span>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Tabs;
