import React from 'react';
import Section from '../Components/Common/Section';
import PageHero from '../Components/Common/PageHero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faUniversity, faAward, faGlobeAsia, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const StatCard = ({ icon, number, label }) => (
    <div className="statCard">
        <div className="statIcon">
            <FontAwesomeIcon icon={icon} />
        </div>
        <div className="statContent">
            <h3>{number}</h3>
            <p>{label}</p>
        </div>
    </div>
);

const MissionCard = ({ text }) => (
    <div className="missionCard">
        <div className="missionBullet"></div>
        <p>{text}</p>
    </div>
);

const AboutThapar = () => {
    const stats = [
        { icon: faUniversity, number: "1956", label: "Year Established" },
        { icon: faGlobeAsia, number: "250+", label: "Acres Campus" },
        { icon: faAward, number: "A++", label: "NAAC Grade" },
        { icon: faUserGraduate, number: "Top", label: "Ranked Institute" }
    ];

    const missions = [
        "To redefine and revolutionize Indian engineering education by unlocking the beauty of engineering and applied sciences for the current and future generation.",
        "To instill excitement of engineering in young minds.",
        "To make Patiala, Punjab and India proud of being the most sustainable region of the world through creating, disseminating and applying actionable engineering knowledge."
    ];

    return (
        <div className="aboutPage">
            <PageHero
                title="About Thapar Institute"
                subtitle="A Legacy of Engineering Excellence Since 1956"
                backgroundImage="/thapar1.jpg"
            />
            <div className="page">
                <Section id="overview" className="overviewSection" variant="full">
                    <div className="overviewContainer">
                        <div className="overviewContent">
                            <h2 className="sectionHeading">OVERVIEW</h2>
                            <div className="overviewText">
                                <p className="lead">
                                    The Thapar Institute of Engineering and Technology (TIET) is one of India's oldest and finest educational institutions, providing a steady source of highly skilled talent to the nation and overseas.
                                </p>
                                <p>
                                    Founded in 1956 with a campus spread across a sprawling 250 acres, Thapar Institute of Engineering & Technology, located in Patiala, has been a pioneer in engineering education, research, and innovation. Our community involves ingenious minds and problem solvers who are eager to make the world a better place to live in with their innovative techniques and discoveries.
                                </p>
                                <p>
                                    Rated amongst the top-ranked innovation-driven private universities and technical institutes in the country, Thapar Institute of Engineering & Technology has been accredited with an 'A++' grade by the National Assessment and Accreditation Council (NAAC). We constantly evolve our teaching methods to provide quality education to our students, whom we see as unique individuals with different interests and aspirations.
                                </p>
                            </div>
                        </div>
                        <div className="overviewStats">
                            {stats.map((stat, index) => (
                                <StatCard key={index} {...stat} />
                            ))}
                        </div>
                    </div>
                </Section>

                <Section id="mission" className="missionSection" variant="full">
                    <div className="missionContainer">
                        <div className="missionContent">
                            <h2 className="missionHeading">
                                <span className="missionIcon">
                                    <FontAwesomeIcon icon={faBullseye} />
                                </span>
                                Our Mission
                            </h2>
                            <p className="missionIntro">
                                We are driven by a commitment to excellence and a vision to shape the future of engineering.
                            </p>
                            <div className="missionGrid">
                                {missions.map((mission, index) => (
                                    <MissionCard key={index} text={mission} />
                                ))}
                            </div>
                        </div>
                        <div className="missionVisual">
                            <div className="imageWrapper">
                                <img src="/thapar2.jpg" alt="Thapar students collaboration" />
                                <div className="imageOverlay"></div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default AboutThapar;
