import React from 'react';
import './MemberCard.css';

const MemberCard = ({ name, img, position, affiliation, isKeynote = false, variant = 'default', children }) => {
    // Simple variant for committee pages (no image, just name + position with left border)
    if (variant === 'simple') {
        return (
            <div className="member-card-simple">
                <div className="member-card-simple-content">
                    <h4 className="member-name">{name}</h4>
                    {position && <p className="member-position">{position}</p>}
                    {affiliation && <p className="member-affiliation">{affiliation}</p>}
                </div>
            </div>
        );
    }

    // Default variant with image
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
