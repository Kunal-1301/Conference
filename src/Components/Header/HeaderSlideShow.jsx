import React, { useState, useEffect } from 'react';
import './HeaderSlideshow.css'; // Custom styles here

import dates from "../../info/Dates"

const images = [
    '/header/1.jpg',
    '/header/2.jpg',
    '/header/3.jpg',
    '/header/4.jpg'
];

const HeaderSlideshow = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000); // 5s per image
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshowContainer">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`slide ${index === current ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                ></div>
            ))}

            <div className="headerTopContent">
                <h1>AIDL - HCSY 2026</h1>
                <h3>
                    International Conference on <br />
                    Artificial Intelligence and Deep Learning Methods for Human-Centric Systems
                </h3>
                <div className="dtv">
                    <h3>{dates.ConferenceDates} | TIET, Patiala, India</h3>
                </div>
                <div className="buttonGroup">
                    <a href='#home' className="btn dark">About Us</a>
                    <a href="#dates" className="btn light">Important Dates</a>
                </div>
            </div>
        </div>
    );
};

export default HeaderSlideshow;
