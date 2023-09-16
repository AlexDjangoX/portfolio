'use client';

import { useState, useEffect } from 'react';

const useCarousel = (itemsLength: number) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(true);

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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return {
    activeIndex,
    show,
    nextSlide,
    prevSlide,
  };
};

export default useCarousel;
