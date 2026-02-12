import React from 'react';
import './Section.css';

const Section = ({ title, children, className = '', variant = 'grid' }) => {
    return (
        <section className={`common-section ${className}`}>
            {title && <h3 className="section-title">{title}</h3>}
            <div className={`section-content ${variant === 'block' ? 'block' : ''}`}>
                {children}
            </div>
        </section>
    );
};

export default Section;
