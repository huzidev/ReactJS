import React from 'react';
import { Carousel } from 'antd';
import { HeroWrapper } from './styled-components/Hero.styled';

export default function Hero() {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };

    return (
        <>
            <Carousel afterChange={onChange}>
                <HeroWrapper>
                    <h3 className="contentStyle">1</h3>
                </HeroWrapper>
                <HeroWrapper>
                    <h3 className="contentStyle">2</h3>
                </HeroWrapper>
                <HeroWrapper>
                    <h3 className="contentStyle">3</h3>
                </HeroWrapper>
                <HeroWrapper>
                    <h3 className="contentStyle">4</h3>
                </HeroWrapper>
            </Carousel>
        </>
    )
}
