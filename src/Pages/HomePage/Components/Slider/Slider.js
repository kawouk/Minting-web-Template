import React from 'react'
import { nftCards } from './NFTcards';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow  } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';
import Conatiner from 'react-bootstrap/Container';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';

function Slider() {
  return (
    <Conatiner fluid className='home-slider-container'>
      <Swiper className="nft-slider mySwiper"
      
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          loop={true}
          spaceBetween={50}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          effect= {"coverflow"}
          coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
      > 
              {nftCards.map((card,index)=>{
                  return(
                  <SwiperSlide key={index} className='nft-list-item'>
                              <img src={card.src} alt={card.alt} />         
                  </SwiperSlide>
                  )
              })}  
      </Swiper>
      <Swiper className=" nft-slider-phone"
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView={1}
          effect= {"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
      > 
              {nftCards.map((card,index)=>{
                  return(
                  <SwiperSlide key={index} className='nft-list-item'>
                              <img src={card.src} alt={card.alt} />         
                  </SwiperSlide>
                  )
              })}  
      </Swiper>
    </Conatiner> 
  )
}

export default Slider