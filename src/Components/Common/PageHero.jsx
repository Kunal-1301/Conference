import React from 'react';
import './PageHero.css';

const PageHero = ({ title, subtitle, backgroundImage = '/header/1.jpg' }) => {
    return (
        <div
            className="pageHero"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="pageHeroOverlay"></div>
            <div className="pageHeroContent">
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHero;
