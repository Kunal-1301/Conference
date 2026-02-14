import "./Header.css"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = location.pathname === "/";

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Detect scroll for navbar bg change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled || !isHome ? 'navbar-solid' : 'navbar-transparent'}`}>
      <div className="navbarInner">
        <Link to="/" className="navBrand">
          AIDL-HCSY 2027
        </Link>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} />
        </button>

        <ul className={`navLinks ${mobileOpen ? 'navOpen' : ''}`}>
          <li><Link to='/'>Home</Link></li>

          <li className="dropdown">
            <span>About Us <FontAwesomeIcon icon={faCaretDown} /></span>
            <ul className="dropdown-menu">
              <li><Link to="/about-thapar">About Thapar</Link></li>
              <li><Link to="/about-patiala">About Patiala</Link></li>
            </ul>
          </li>

          <li><Link to='/authors'>Author's Area</Link></li>

          <li className="dropdown">
            <span>Committee <FontAwesomeIcon icon={faCaretDown} /></span>
            <ul className="dropdown-menu">
              <li><Link to="/OrgCommittee">Organizing Committee</Link></li>
              <li><Link to="/SupCommittee">Supporting Committee</Link></li>
              <li><Link to="/tpc">Technical Program Committee</Link></li>
            </ul>
          </li>

          <li>Registration</li>
          <li><Link to='/venue'>Venue</Link></li>
        </ul>
      </div>
    </nav>
  );
}
