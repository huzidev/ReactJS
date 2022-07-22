import React from 'react';
import { Carousel } from 'antd';
import { Button } from 'antd';
import { FireOutlined } from '@ant-design/icons';
import { HeroWrapper } from './styled-components/Hero.styled';

export default function Hero() {

    const items = [{
        title: "Slide-1",
        content: "nice web slider carousel Ant-design"
    },
    {
        title: "Slide-2",
        content: "nice web slider carousel Ant-design"
    },
    {
        title: "Slide-3",
        content: "nice web slider carousel Ant-design"
    }]

    return (
        <>
            <Carousel>
                {items.map((data, index) => {
                    return (
                        <HeroWrapper key={index+1}>
                            <h3>
                                {data.title}
                            </h3>
                            <p>
                                {data.content}
                            </p>
                            <div>
                                <Button type='primary' size='large'>
                                    Test Button
                                </Button>
                                <Button size='large'>
                                    <FireOutlined />
                                    Test Button 2
                                </Button>
                            </div>
                        </HeroWrapper>
                    )
                })}
                <h3 className="contentStyle">1</h3>
            </Carousel>
        </>
    )
}
