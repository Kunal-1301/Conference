import React from 'react';
import Section from '../Components/Common/Section';
import PageHero from '../Components/Common/PageHero';
import './About.css';

const AboutThapar = () => {
    return (
        <div className="aboutPage">
            <PageHero
                title="About Thapar Institute"
                subtitle="A Legacy of Engineering Excellence Since 1956"
                backgroundImage="/thapar1.jpg"
            />
            <div className="page">
                <Section title="About Thapar Institute of Engineering and Technology">
                    <div className="aboutContent">
                        <div className="aboutText">
                            <p>
                                Thapar Institute of Engineering and Technology (TIET), Patiala, is one of India's oldest and finest self-funded engineering institutions. Established in 1956, it has been a pioneer in engineering education, research, and innovation.
                            </p>
                            <p>
                                The institute is accredited with an 'A+' grade by NAAC and consistently ranks among the top engineering institutions in India. It offers a wide range of undergraduate, postgraduate, and doctoral programs in engineering, technology, management, and sciences.
                            </p>
                            <p>
                                TIET's 250-acre lush green campus provides a vibrant environment for learning and growth. The institute is known for its strong industry-academia linkages, world-class infrastructure, and a distinguished galaxy of alumni who have made significant contributions globally.
                            </p>
                            <p>
                                The Thapar School of Liberal Arts and Sciences (TSLAS) is a unique initiative of TIET that aims to provide a holistic and interdisciplinary education, blending science and technology with social sciences, humanities, and arts.
                            </p>
                        </div>
                        <div className="aboutImages">
                            <img src="/thapar1.jpg" alt="Thapar University Campus" className="aboutImg" />
                            <img src="/thapar2.jpg" alt="Thapar University Iconic Building" className="aboutImg" />
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default AboutThapar;
