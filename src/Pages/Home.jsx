import { useMemo } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBrain,
    faRobot,
    faHeartbeat,
    faComments,
    faLightbulb,
    faEye,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

import Section from "../Components/Common/Section";
import MemberCard from "../Components/Common/MemberCard";
import HeaderSlideshow from "../Components/Header/HeaderSlideShow";
import Floater from "./Floater";
import { conferenceInfo, conferenceThemes, sponsors, keynotes } from "../data/conferenceData";

// Icon mapping for dynamic rendering
const iconMap = {
    faBrain,
    faRobot,
    faHeartbeat,
    faComments,
    faLightbulb,
    faEye,
};

export default function Home() {
    // Memoize theme items to prevent unnecessary re-renders
    const themeItems = useMemo(() =>
        conferenceThemes.map((theme) => (
            <li key={theme.id}>
                {theme.title}
                <span>
                    <FontAwesomeIcon icon={iconMap[theme.icon]} />
                </span>
            </li>
        )),
        []
    );

    const sponsorLogos = useMemo(() =>
        sponsors.map((sponsor) => (
            <a
                key={sponsor.id}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sponsor.name}
            >
                <img src={sponsor.logo} alt={sponsor.name} />
            </a>
        )),
        []
    );

    return (
        <main className="home-page">
            {/* Full-height Hero Slideshow */}
            <div className="homeHero">
                <HeaderSlideshow type="full" />
                <a href="#home" className="scrollIndicator" aria-label="Scroll down">
                    <FontAwesomeIcon icon={faChevronDown} />
                </a>
            </div>

            {/* Main Content with Sidebar Layout */}
            <div className="homeLayout page" id="home">
                {/* Main Content Column */}
                <article className="homeContent">
                    <header>
                        <h2>Welcome to {conferenceInfo.name}</h2>
                    </header>

                    <section>
                        <p>
                            The {conferenceInfo.fullName}, to be held from {conferenceInfo.dates} at the {conferenceInfo.venue}, {conferenceInfo.location}, marks a significant milestone in the ongoing global conversation on responsible and transformative AI. This conference is a dedicated platform for exploring the intersection of artificial intelligence, deep learning, and the design of systems that prioritize human well-being, societal impact, and ethical alignment.
                        </p>

                        <p>
                            At the heart of {conferenceInfo.name} lies a compelling vision: to harness the power of intelligent technologies not merely for automation or performance, but to reimagine how AI can serve as a catalyst for positive change across domains. From healthcare to governance, education to cybersecurity, the conference invites researchers, practitioners, and policymakers to engage in rich dialogues and share innovations that are not only technically sound but also deeply rooted in human values.
                        </p>

                        <p>
                            This international gathering draws strength from a strong academic foundation. {conferenceInfo.venue}, ranked among India's top institutions, brings to the table a vibrant research ecosystem, advanced infrastructure, and a legacy of academic excellence. With over 700 active faculty researchers and 200+ doctoral candidates focused on AI and emerging technologies, the institute provides a fertile ground for collaborative exploration and impactful outcomes.
                        </p>

                        <p>
                            While {conferenceInfo.year + 1} marks the inaugural edition of {conferenceInfo.name} in its full-fledged conference format, the event is built upon the success of an established workshop series. Since 2018, the AIDL-HCSY workshops have been held annually in conjunction with the International Congress on Ultra Modern Telecommunications and Control Systems. These workshops have served as incubators for scholarly exchange and interdisciplinary collaboration, bringing together global voices to examine the role of AI in enhancing human experience. They addressed critical themes such as human-computer interaction, AI ethics, mental health, and smart urban systems laying the groundwork for this grander, more expansive version.
                        </p>
                    </section>

                    <Section title="Conference Themes" variant="block">
                        <ul className="themes" role="list">
                            {themeItems}
                        </ul>
                    </Section>

                    <Section title="Keynote Speakers" variant="block">
                        <div className="keynotesFull">
                            {keynotes.map((speaker) => (
                                <MemberCard
                                    key={speaker.id}
                                    isKeynote={true}
                                    name={speaker.name}
                                    img={speaker.image}
                                    position={speaker.position}
                                    affiliation={speaker.affiliation}
                                >
                                    <p className="speakerBio">{speaker.bio}</p>
                                    <div className="speakerdtv">
                                        <div>{speaker.sessionDate}</div>
                                        <div>{speaker.sessionTime}</div>
                                        <div>{speaker.sessionMode}</div>
                                    </div>
                                </MemberCard>
                            ))}
                        </div>
                    </Section>

                    <Section title="Our Sponsors" variant="block">
                        <div className="sponsorGrid" role="list">
                            {sponsorLogos}
                        </div>
                    </Section>
                </article>

                {/* Sidebar with Important Dates */}
                <Floater />
            </div>
        </main>
    );
}
