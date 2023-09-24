'use client';

import { useState, useEffect, useRef } from 'react';

const useCarousel = (itemsLength: number) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(true);
  const intervalRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => {
    setShow(false);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % itemsLength);
      setShow(true);
    }, 300);
  };

  const prevSlide = () => {
    setShow(false);
    setTimeout(() => {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + itemsLength) % itemsLength
      );
      setShow(true);
    }, 300);
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000) as number;
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;

    if (carouselElement) {
      carouselElement.addEventListener('mouseover', stopAutoPlay);
      carouselElement.addEventListener('mouseout', startAutoPlay);
    }

    startAutoPlay();

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('mouseover', stopAutoPlay);
        carouselElement.removeEventListener('mouseout', startAutoPlay);
      }
      stopAutoPlay();
    };
  }, []);

  return {
    activeIndex,
    show,
    nextSlide,
    prevSlide,
    carouselRef,
  };
};

export default useCarousel;
