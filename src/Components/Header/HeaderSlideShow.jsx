import React, { useState, useEffect } from 'react';
import './HeaderSlideshow.css'; // Custom styles here

import { conferenceInfo } from '../../data/conferenceData';
const images = [
    '/header/1.jpg',
    '/header/2.jpg',
    '/header/3.jpg',
    '/header/4.jpg'
];

const HeaderSlideshow = ({ type = "full" }) => {
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

            <div className={`headerTopContent ${type === 'compact' ? 'compact' : ''}`}>
                <div className="heroLogos">
                    <img src="./tiet.png" alt="Thapar Institute" className="heroLogo" />
                    <img src="./tslas.png" alt="TSLAS" className="heroLogo" />
                    <img src="./IEEE.webp" alt="IEEE Delhi Section" className="heroLogo" />
                </div>
                <h1>AIDL - HCSY 2027</h1>
                <h3>
                    International Conference on <br />
                    Artificial Intelligence and Deep Learning Methods for Human-Centric Systems
                </h3>
                {type === 'full' && (
                    <>
                        <div className="dtv">
                            <h3>{conferenceInfo.dates} | TIET, Patiala, India</h3>
                        </div>
                        <div className="buttonGroup">
                            <a href='#home' className="btn dark">About Us</a>
                            <a href="#dates" className="btn light">Important Dates</a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default HeaderSlideshow;
