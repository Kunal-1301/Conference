import React from 'react';
import Section from '../Components/Common/Section';
import PageHero from '../Components/Common/PageHero';
import './About.css';

const AboutPatiala = () => {
    return (
        <div className="aboutPage">
            <PageHero
                title="About Patiala"
                subtitle="The Royal City of Punjab"
                backgroundImage="./patiala.jpeg"
            />
            <div className="page">
                <Section title="About Patiala - The Royal City">
                    <div className="aboutContent">
                        <div className="aboutText">
                            <p>
                                Patiala, often referred to as the 'Royal City', is a historic city in the state of Punjab, India. It was the capital of the erstwhile Patiala State and is renowned for its rich cultural heritage, majestic palaces, and vibrant traditions.
                            </p>
                            <p>
                                The city is famous for its 'Qila Mubarak' (the Fortunate Castle), a stunning example of Sikh architecture. Other prominent landmarks include the Sheesh Mahal, Moti Bagh Palace, and the Baradari Gardens.
                            </p>
                            <p>
                                Patiala is also known for its unique contributions to Indian culture, including the 'Patiala Gharana' of classical music, the 'Patiala Pag' (a style of turban), and the famous 'Patiala Salwar'.
                            </p>
                            <p>
                                As a major educational hub, Patiala houses several prestigious institutions, including Thapar Institute of Engineering and Technology and Punjabi University. The city offers a perfect blend of historical grandeur and modern development.
                            </p>
                        </div>
                        <div className="aboutImages">
                            <img src="/patiala1.jpg" alt="Patiala Heritage" className="aboutImg" />
                            <img src="/patiala2.jpg" alt="Qila Mubarak" className="aboutImg" />
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default AboutPatiala;
