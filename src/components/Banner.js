import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay, Navigation, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "../assets/styles.module.css";
import "./banner.css";
import { keyframes } from "styled-components";

const bannerData = [
  {
    id: 1,
    url: "/images/main_img1.jpg",
    alt: "bannerimg1",
    title: "WE ARE CREATIVE",
  },
  {
    id: 2,
    url: "/images/main_img2.jpg",
    alt: "bannerimg2",
    title: "자연에 가치를 더하다",
  },
  {
    id: 3,
    url: "/images/main_img3.jpg",
    alt: "bannerimg3",
    title: "기술과 경험의 융합, 미래를 위한 변화",
  },
];

function Banner({ path }) {
const [page,setPage] = useState(false);

const repeat = ()=>{
  const untill = setTimeout(() => {
    setPage(!page)
  }, 1000);
 return()=>{
  clearTimeout(untill)
  setPage(false)
  
 }
}
  return (
    <div className="banner">
      <Swiper
        effect={"fade"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        speed={600}
        parallax={true}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay, EffectFade]}
        className="mySwiper"
        autoplay={{
          delay: 4000,
        }}
       onSlideChange={repeat}
      >
        {bannerData.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              style={{
                width: `100%`,
                height: `650px`,
                background: `url(${path+item.url})no-repeat 50%/cover`
              }}
              className={page?'on':''}
            >
              <div className="bannertxt">
                <div className="title" >{item.title}</div>
                <div className="subtitle" >
                  <span>
                    당신과 함께하는 좋은 파트너가 되고 싶습니다. 최고의 전문성과
                  </span>
                  <span> 신뢰를 바탕으로 함께 성장해 나가겠습니다.</span>
                </div>
                <div className="text">
                  <a href="#">바로가기</a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Banner;
