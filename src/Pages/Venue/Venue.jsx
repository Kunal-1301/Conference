import "./Venue.css"
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../../Components/Common/Section";

export default function Venue() {

    // const navigate = useNavigate() // Unused

    // const defaultProps = { ... } // Unused

    return (
        <div className="page venue">

            <div className="venueGrid">
                <div className="venueMainSection">
                    <img src="./3.jpeg" alt="" />
                    <img className="accentImage" src="./ThaparVector.png" alt="" />
                    <div>
                        <h2>About The Venue</h2>
                        <p>Thapar Institute of Engineering and Technology, Patiala</p>
                        <hr />
                        <p>
                            Thapar Institute of Engineering and Technology, established in 1956, stands as a beacon of academic excellence and innovation in India. With a legacy of producing industry leaders, pioneering research, and fostering holistic development, it continues to empower future engineers and technologists to shape a smarter, sustainable, and inclusive world
                        </p>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <a href="https://thapar.edu/" target="_blank"><button className="dark">Visit Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </button></a>
                            {/* <a ><button className="dark">Photo Gallery <FontAwesomeIcon icon={faCameraRetro} /> </button></a> */}
                        </div>
                    </div>
                </div>

                <div className="venueMainSection">
                    <div>
                        <h2>Patiala</h2>
                        <p>The Royal Heritage of Punjab</p>
                        <hr />
                        <p>Patiala, founded in 1763 by Baba Ala Singh, is a princely city in Punjab known for its regal heritage and vibrant culture. Once the capital of the Patiala State, it flourished under Maharaja Bhupinder Singh. Famous for its architecture, traditional attire, and classical music, Patiala remains a proud emblem of Punjabi royalty and tradition.</p>
                        <a href="https://patiala.nic.in/tourist-places/" target="_blank"><button className="dark">Visit Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </button></a>
                    </div>
                    <img src="./patiala.jpeg" alt="" />
                </div>
            </div>

            <Section title="How to Reach" variant="block">
                <div className="mapCont">
                    <img src="./London.png" alt="" />
                    <div className="map">
                        <MapContainer center={[30.354438, 76.37270]} zoom={15} scrollWheelZoom={true}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </MapContainer>
                    </div>
                </div>

                <p style={{ marginTop: '20px' }}>
                    Reaching Patiala from Delhi is convenient and offers multiple travel options:
                </p>

                <ul className="transport">
                    <li><strong>By Train:</strong> Patiala is well-connected to Delhi via direct trains like Shatabdi and Express services. The journey takes around 5–6 hours.</li>
                    <li><strong>By Road:</strong> You can drive or hire a cab via NH44 and NH7. The drive spans about 250 km and takes approximately 4.5-5.5 hours.</li>
                    <li><strong>By Bus:</strong> Regular Volvo and deluxe buses run from ISBT Kashmere Gate to Patiala.</li>
                    <li><strong>By Air:</strong> The nearest airport is in IXC Chandigarh (70 km away); from there, taxis or buses can take you to Patiala in under 2 hours.</li>
                </ul>
            </Section>


        </div>
    )
}
