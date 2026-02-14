import React, { useState, useEffect } from 'react';
import "./Venue.css"
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { faArrowUpRightFromSquare, faMapMarkerAlt, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../../Components/Common/Section";
import PageHero from "../../Components/Common/PageHero";

const carouselImages = [
    "./3.jpeg",
    "./patiala.jpeg",
    "/thapar1.jpg",
    "/thapar2.jpg"
];

export default function Venue() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

    return (
        <div className="venue-page">
            <PageHero
                title="Conference Venue"
                subtitle="Thapar Institute of Engineering and Technology, Patiala"
                backgroundImage="/thapar2.jpg"
            />
            <div className="page venue">
                <div className="venueHero">
                    <div className="carouselContainer">
                        {carouselImages.map((img, index) => (
                            <div
                                key={index}
                                className={`carouselSlide ${index === currentImage ? 'active' : ''}`}
                                style={{ backgroundImage: `url(${img})` }}
                            />
                        ))}
                        <button className="carouselBtn prev" onClick={prevImage}><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <button className="carouselBtn next" onClick={nextImage}><FontAwesomeIcon icon={faChevronRight} /></button>
                    </div>

                    <div className="venueAddressCard">
                        <div className="addressBadge">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span>Conference Venue</span>
                        </div>
                        <h2>Thapar Institute of Engineering and Technology</h2>
                        <p className="addressText">
                            Bhadson Rd, Adarsh Nagar, Prem Nagar,<br />
                            Patiala, Punjab 147004, India
                        </p>
                        <div className="addressLinks">
                            <a href="https://thapar.edu/" target="_blank" rel="noreferrer">
                                <button className="dark">Visit Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                            </a>
                        </div>
                    </div>
                </div>

                <Section title="How to Reach" variant="block">
                    <div className="mapContainer">
                        <div className="mapWrapper mainMap">
                            <MapContainer center={[30.354438, 76.37270]} zoom={15} scrollWheelZoom={true}>
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            </MapContainer>
                        </div>
                        <div className="mapWrapper worldMap">
                            <img src="./London.png" alt="World Map Location" />
                            <p className="worldMapHint">Patiala, India</p>
                        </div>
                    </div>

                    <div className="transportGrid">
                        <div className="transportItem">
                            <strong>By Train:</strong>
                            <p>Patiala is well-connected to Delhi via direct trains like Shatabdi and Express services. Journey time: 5–6 hours.</p>
                        </div>
                        <div className="transportItem">
                            <strong>By Road:</strong>
                            <p>Approximately 250 km from Delhi via NH44 and NH7. Drive time: 4.5-5.5 hours.</p>
                        </div>
                        <div className="transportItem">
                            <strong>By Bus:</strong>
                            <p>Regular Volvo and deluxe buses run from ISBT Kashmere Gate to Patiala.</p>
                        </div>
                        <div className="transportItem">
                            <strong>By Air:</strong>
                            <p>Nearest airport is Chandigarh (IXC), 70 km away. Taxis take under 2 hours.</p>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
}
