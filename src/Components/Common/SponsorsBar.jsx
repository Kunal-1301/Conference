import { sponsors } from "../../data/conferenceData";
import "./SponsorsBar.css";

export default function SponsorsBar() {
    return (
        <section className="sponsors-bar">
            <h3 className="sponsors-bar-title">Our Sponsors</h3>
            <div className="sponsors-bar-logos">
                {sponsors.map((sponsor) => (
                    <a
                        key={sponsor.id}
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={sponsor.name}
                        className={`sponsors-bar-link sponsor-${sponsor.id}`}
                    >
                        <img src={sponsor.logo} alt={sponsor.name} />
                    </a>
                ))}
            </div>
        </section>
    );
}
