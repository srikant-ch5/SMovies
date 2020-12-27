import React, { Component } from 'react';
import generateData from '../api/scrolldata'
import Swiper from 'react-id-swiper';
import { Box } from "@react-yuki/ui";
import Slider from "./slider";

const SliderComp = () => {
    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
    return (

      <Box>
        <Slider items={generateData()} />
      </Box>
    )
  };

export default SliderComp;