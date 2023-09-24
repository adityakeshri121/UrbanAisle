import React, { useState } from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import './Slider.css'
const Slider = () => {
    const [currSlider, setCurrSlider] = useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const nextSlide = () => {
        setCurrSlider(currSlider === 2 ? 0 : (prev) => prev + 1);
    }

    const prevSlide = () => {
        setCurrSlider(currSlider === 0 ? 2 : (prev) => prev - 1);
    }

    return (
        <div className="h-[calc(100vh-80px)] w-[100vw] relative">
            <div className="contain w-[300vw] flex h-[100%] -translate-x-[0vw]" style={{ transform: `translateX(-${currSlider * 100}vw)` }}>
                <img className="slider-fit" src={data[0]} alt="" />
                <img className="slider-fit" src={data[1]} alt="" />
                <img className="slider-fit" src={data[2]} alt="" />
            </div>

            <div className="flex absolute left-0 right-0 m-auto w-[fit-content] bottom-[100px] gap-2">
                <div className="border-2 cursor-pointer" onClick={prevSlide}><WestOutlinedIcon /></div>
                <div className="border-2 cursor-pointer" onClick={nextSlide}><EastOutlinedIcon /></div>
            </div>
        </div>
    )
}

export default Slider