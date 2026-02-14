import React from 'react';
import './Section.css';

const Section = ({ title, children, className = '', variant = 'grid' }) => {
    // Determine the content class based on variant
    let contentClass = 'section-content';
    if (variant === 'block') {
        contentClass += ' block';
    } else if (variant === 'committee-grid') {
        contentClass += ' committee-grid';
    }

    return (
        <section className={`common-section ${className}`}>
            {title && <h3 className="section-title">{title}</h3>}
            <div className={contentClass}>
                {children}
            </div>
        </section>
    );
};

export default Section;
