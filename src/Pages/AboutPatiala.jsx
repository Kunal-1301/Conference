import React from 'react';
import Section from '../Components/Common/Section';
import PageHero from '../Components/Common/PageHero';
import SponsorsBar from '../Components/Common/SponsorsBar';
import './About.css';

const galleryImages = [
    { src: "/p1.jpg", alt: "Patiala Heritage" },
    { src: "/p2.png", alt: "Royal Architecture" },
    { src: "/p3.png", alt: "Cultural Landmark" },
    { src: "/p4.png", alt: "Historic Monument" },
    { src: "/p5.png", alt: "City Views" },
    { src: "/p6.png", alt: "Architectural Detail" },
    { src: "/p7.webp", alt: "Garden Scenery" },
    { src: "/p8.avif", alt: "Night View" },
    { src: "/p9.jpeg", alt: "Educational Hub" },
    { src: "/p11.jpg", alt: "Scenic Beauty" },
    { src: "/p12.jpg", alt: "City Landscape" }
];

const AboutPatiala = () => {
    return (
        <div className="aboutPage">
            <PageHero
                title="About Patiala"
                subtitle="The Royal City of Punjab"
                backgroundImage="/p1.jpg"
            />
            <div className="page">
                {/* Introduction Section */}
                <Section className="intro-section" variant="full">
                    <div className="container-narrow">
                        <h2 className="sectionHeading text-center">Journey Through the Royal City</h2>
                        <p className="lead-text text-center">
                            Patiala, a city where history breathes through its majestic architecture and vibrant culture.
                            Known as the 'Royal City', it offers a perfect blend of historical grandeur and modern development.
                        </p>
                    </div>
                </Section>

                {/* Content & Image Mix */}
                <Section className="heritage-section">
                    <div className="heritage-grid">
                        <div className="heritage-text">
                            <h3>A Legacy of Kings</h3>
                            <p>
                                Founded in 1763, Patiala was the capital of the erstwhile princely state of Patiala.
                                The city is renowned for its <strong>'Qila Mubarak'</strong> (the Fortunate Castle), a stunning example of Sikh architecture that stands as a testament to the city's glorious past. The fort complex houses the dazzling Sheesh Mahal (Palace of Mirrors), famous for its intricate glasswork and frescoes.
                            </p>
                            <p>
                                Beyond monuments, Patiala is the cradle of the <strong>'Patiala Gharana'</strong> of classical music, a tradition that has produced some of India's finest musicians. The city's cultural footprint extends to fashion with the iconic 'Patiala Salwar' and the 'Patiala Pag' (turban), symbols of Punjabi identity worn with pride across the globe.
                            </p>
                        </div>
                        <div className="heritage-image-wrapper">
                            <img src="/p8.avif" alt="Culture of Patiala" />
                            <div className="heritage-overlay">
                                <span>Cultural Heritage</span>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section className="modern-section" variant="bg-light">
                    <div className="heritage-grid reverse">
                        <div className="heritage-text">
                            <h3>Education & Modernity</h3>
                            <p>
                                Today, Patiala stands as a major educational hub in Northern India. It is home to prestigious institutions like the <strong>Thapar Institute of Engineering and Technology</strong> and <strong>Punjabi University</strong>, attracting students and scholars from all over the country.
                            </p>
                            <p>
                                The city's landscape is adorned with lush green spaces like the <strong>Baradari Gardens</strong>, surrounding the Baradari Palace. This harmonious coexistence of heritage structures with modern academic and urban infrastructure makes Patiala a unique destination for visitors and a proud home for its residents.
                            </p>
                        </div>
                        <div className="heritage-image-wrapper">
                            <img src="/edu.jpg" alt="Educational Hub" />
                            <div className="heritage-overlay">
                                <span>Modern Patiala</span>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Masonry Gallery */}
                <Section title="Glimpses of Patiala" className="gallery-section" variant="full">
                    <div className="masonry-gallery">
                        {galleryImages.map((img, index) => (
                            <div className="gallery-item" key={index}>
                                <img src={img.src} alt={img.alt} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span>{img.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            </div>
            <SponsorsBar />
        </div>
    );
};

export default AboutPatiala;
