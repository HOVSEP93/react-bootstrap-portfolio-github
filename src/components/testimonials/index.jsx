import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'

import './testimonials.css'

import { data } from './data'

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core'

SwiperCore.use([EffectCoverflow, Pagination])

const Testimonials = () => {
  return (
    <section id='testimonials' className='main-testimonials-wrapper'>
      <h1
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          color: '#4ab',
          fontWeight: '900',
        }}
      >
        my happy clients
      </h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        // pagination={true}
      >
        {data.map((item, key) => (
          <SwiperSlide>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.testimony}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
