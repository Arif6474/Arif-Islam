import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const ProjectDetail = () => {
  const { projectId } = useParams();
  const [detail, setDetail] = useState({});
  console.log(detail);
  useEffect(() => {
    const url = `http://localhost:5000/project/${projectId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [projectId]);

  return (
    <div>
      <div className=" lg:max-w-4xl mx-auto mt-4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="2000"
              src={detail.picture}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={detail.picture} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={detail.picture} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={detail.picture} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={detail.picture} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={detail.picture} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={detail.picture} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={detail.picture} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="hero text-white mb-14">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 
            data-aos="zoom-in"  
            data-aos-easing="linear"
            data-aos-duration="2000" class="text-3xl font-bold ">{detail.name}</h1>
            <p
            data-aos="fade-left"  
            data-aos-easing="linear"
            data-aos-duration="2000" class="py-6 text-left font-semibold text-slate-300">
             Features: {detail.features}
            </p>
            <p
            data-aos="fade-right"  
            data-aos-easing="linear"
            data-aos-duration="2000" class="py-2 font-semibold text-slate-300">
             Used Technology: {detail.technology}
            </p>
         <div data-aos="fade-up"  
            data-aos-easing="linear"
            data-aos-duration="2000">
         <a href={detail.live} class="detail-btn text-decoration-none m-2">Live</a>
         <a href={detail.client} class="detail-btn text-decoration-none m-2">Client</a>
         <a href={detail.server} class="detail-btn text-decoration-none m-2">Server</a>
         
         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
