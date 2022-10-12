import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Navigation, Pagination, Scrollbar, A11y , Grid } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';
import Col from 'react-bootstrap/Col';
import { SliderCards } from './RoadSliderCards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import './RoadSlider.css';

function RoadSlider() {
  return (
    <Container fluid className='roadSlider-container'>
        <Row className='roadSlider-row'>
        <Swiper className='roadmap-swiper pc'
        modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
        spaceBetween={30}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        > 
            {SliderCards.map((card,index)=>{
                return(
                <SwiperSlide key={index} className='slider-list-item'>
                    <Col className='slider-list-item1'>
                        <div className='slider-list-item-container'>
                            <h5 className='slider-list-item-phase'>{card.phase}</h5>
                            <div className='slider-list-item-sub-container'>
                                <h5 className='slider-list-item-date'>{card.date}</h5>
                                <h5 className='slider-list-item-title'>{card.title}</h5>
                                <p className='slider-description'>{card.description}</p>
                            </div> 
                        </div>
                    </Col>
                </SwiperSlide>
                )
            })}  
        </Swiper>
        <Swiper className='roadmap-swiper tablet'
        modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
        spaceBetween={30}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        > 
            {SliderCards.map((card,index)=>{
                return(
                <SwiperSlide key={index} className='slider-list-item'>
                    <Col className='slider-list-item1'>
                        <div className='slider-list-item-container'>
                            <h5 className='slider-list-item-phase'>{card.phase}</h5>
                            <div className='slider-list-item-sub-container'>
                                <h5 className='slider-list-item-date'>{card.date}</h5>
                                <h5 className='slider-list-item-title'>{card.title}</h5>
                                <p className='slider-description'>{card.description}</p>
                            </div> 
                        </div>
                    </Col>
                </SwiperSlide>
                )
            })}  
        </Swiper>
        <Swiper className='roadmap-swiper phone'
        modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        > 
            {SliderCards.map((card,index)=>{
                return(
                <SwiperSlide key={index} className='slider-list-item'>
                    <Col className='slider-list-item1'>
                        <div className='slider-list-item-container'>
                            <h5 className='slider-list-item-phase'>{card.phase}</h5>
                            <div className='slider-list-item-sub-container'>
                                <h5 className='slider-list-item-date'>{card.date}</h5>
                                <h5 className='slider-list-item-title'>{card.title}</h5>
                                <p className='slider-description'>{card.description}</p>
                            </div> 
                        </div>
                    </Col>
                </SwiperSlide>
                )
            })}  
        </Swiper>
        </Row>
    </Container>
  )
}

export default RoadSlider