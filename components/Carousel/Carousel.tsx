"use client"

import './Carousel.css'
import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface CarouselProps {
  imgs: { src: string, alt: string, header?: string }[],
  gap?: number,
  visibleAtATime?: {
    lg: number,
    md: number,
    sm: number,
  },
  increment?: number,
  cycle?: boolean,
  navDots?: boolean,
  navButtons?: boolean,
}

function Carousel({ 
  gap = 0,
  imgs, 
  visibleAtATime = { lg: 4, md: 1, sm: 1}, 
  increment = 1,
  cycle = false,  
  navButtons = true,
  navDots = false, }: CarouselProps) 
  {
  const [imgIndex, setImg] = useState(0);
  const [actualVisible, setActualVisible] = useState(visibleAtATime.lg);

  const handleChange = () => {
    if (window.innerWidth < 640) {
      setActualVisible(visibleAtATime.sm)
    } else if (window.innerWidth < 768) {
      setActualVisible(visibleAtATime.md)
    } else {
      setActualVisible(visibleAtATime.lg)
    }
  };

  useEffect(() => {
    handleChange();
    window.addEventListener('resize', handleChange);
    return () => {
      window.removeEventListener('resize', handleChange);
    };
  }, [handleChange]);

  const prevImage = () => {
    if ((imgIndex - increment) <= -1 && !cycle) { return setImg(0) }
    setImg((prevImagem) => (prevImagem - increment + imgs.length) % imgs.length); // mover p trás ou ciclar
  }; 

  const nextImage = () => {
    if ((imgIndex + increment) >= (imgs.length - (actualVisible - 1)) && !cycle) { return setImg(imgs.length - actualVisible) }
    setImg((prevImagem) => (prevImagem + increment) % imgs.length); // mover p frente ou ciclar
  };

  const handleDotClick = (index: number) => {
    setImg(index);
  };

  return ( 
    <div className="Carousel__buttonContainer">
        <div className='Carousel__container md'>
          <div className='Carousel'
          style={{ gap: gap + 'px',
            transform: `translateX(calc(-${imgIndex * (100 / actualVisible)}% - ${imgIndex * Math.round(gap / actualVisible)}px))`,
           }}>
            {imgs.map((item: { src: string, alt: string}, i) => (
                <div key={i} className="Carousel__card self-center"
                style={{ flexBasis: `calc(${(100 / actualVisible)}% - ${actualVisible > 1 ? Math.round(gap * (actualVisible-1) / actualVisible) : 0}px)`}}>
                  <img className='Carousel__image' src={item.src} alt={item.alt} />
                </div>
              )
            )}
          </div>
        </div>

        {navButtons && (<>
          <button onClick={prevImage} className={"Carousel__navButton left-[11%] hidden lg:block " + (!cycle && (imgIndex == 0) ? 'inactive' : '')}><ChevronLeft /></button>
          <button onClick={nextImage} className={"Carousel__navButton right-[11%] hidden lg:block " + (!cycle && (imgIndex == imgs.length - actualVisible) ? 'inactive' : '')}><ChevronRight /></button>
        </>)}
 
        {navDots && (
          <div className="Carousel__navDots lg:hidden flex justify-center gap-[8px] absolute bottom-[0px] left-0 right-0">
              {imgs.map((_img, i) => (
                <button
                  key={i}
                  className={`Carousel__dot rounded-full p-[6px] ${i === imgIndex ? "bg-zinc-400" : "bg-zinc-600 hover:bg-zinc-400"}`}
                  onClick={() => handleDotClick(i)}
                ></button>
              ))}
          </div>
          )}
    </div>
   );
}

export { Carousel };