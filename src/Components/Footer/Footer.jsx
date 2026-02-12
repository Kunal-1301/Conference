import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountdownTimer from "./CountdownTimer";
import "./Footer.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { conferenceInfo } from "../../data/conferenceData";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footerTop" aria-label="Conference Countdown">
        <h2>{conferenceInfo.name} WILL BEGIN IN</h2>
        <CountdownTimer targetDate={conferenceInfo.countdownTarget} />
      </section>

      <section className="footerBottom">
        <div className="col">
          <nav className="icons" aria-label="Social Media Links">
            <a href="mailto:contact@example.com" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </nav>
        </div>

        <div className="col">
          © Copyright {new Date().getFullYear()} - All Rights Reserved
          <br />
          {conferenceInfo.venue}
        </div>
      </section>
    </footer>
  );
}

