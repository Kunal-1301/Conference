import React from 'react';
import './MemberCard.css';

const MemberCard = ({ name, img, position, affiliation, isKeynote = false, children }) => {
    // Basic cleanup for image path if needed (e.g. if generic './dummy.jpg' needs absolute)
    // Assuming data cleanup happened elsewhere, but defensive coding here:
    // const displayImg = img && img.startsWith('.') ? img.replace('.', '') : img; 
    // Actually, let's trust the props for now, standard React behavior.

    return (
        <div className={`member-card ${isKeynote ? 'keynote' : ''}`}>
            <div className="member-image-container">
                <img
                    src={img || '/dummy.jpg'}
                    alt={name}
                    className="member-image"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/dummy.jpg' }}
                />
            </div>
            <div className="member-details">
                <h4 className="member-name">{name}</h4>
                {position && <p className="member-position">{position}</p>}
                {affiliation && <p className="member-affiliation">{affiliation}</p>}
                {children}
            </div>
        </div>
    );
};

export default MemberCard;
