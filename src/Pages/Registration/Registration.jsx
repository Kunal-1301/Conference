import { useState } from "react";
import "./Registration.css";
import PageHero from "../../Components/Common/PageHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileAlt,
    faPlane,
    faPaperPlane,
    faCircleInfo,
    faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const initialForm = {
    // Personal
    fullName: "",
    email: "",
    affiliation: "",
    country: "",
    category: "",
    ieeeMember: false,
    ieeeId: "",

    // Paper
    paperTitle: "",
    paperId: "",
    coAuthors: "",

    // Travel
    arrivalDate: "",
    departureDate: "",
    modeOfTravel: "",
    accommodation: "",
    dietaryRequirements: "",
    specialRequests: "",
};

export default function Registration() {
    const [form, setForm] = useState(initialForm);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just log and show success — backend integration later
        console.log("Registration Data:", form);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="registration-page">
            <PageHero
                title="Registration"
                subtitle="Submit Your Paper & Travel Details"
                backgroundImage="/header/2.jpg"
            />

            <div className="page">
                <div className="registration-form">
                    {submitted ? (
                        /* ─── Success State ─── */
                        <div className="success-message">
                            <div className="success-icon">
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </div>
                            <h2>Registration Submitted!</h2>
                            <p>
                                Thank you, <strong>{form.fullName}</strong>. Your
                                registration and paper details have been received.
                                You will receive a confirmation email at{" "}
                                <strong>{form.email}</strong> shortly.
                            </p>
                            <Link to="/" className="btn dark">
                                Back to Home
                            </Link>
                        </div>
                    ) : (
                        /* ─── Registration Form ─── */
                        <>
                            <h2>Conference Registration</h2>
                            <p className="form-subtitle">
                                Fill out the form below to register for AIDL-HCSY
                                2027. All fields marked with{" "}
                                <span style={{ color: "#e53e3e" }}>*</span> are
                                required.
                            </p>

                            <div className="registration-info">
                                <FontAwesomeIcon
                                    icon={faCircleInfo}
                                    className="info-icon"
                                />
                                <p>
                                    Please ensure all details are accurate. Your
                                    paper submission ID can be found in the
                                    confirmation email from the submission portal.
                                    Travel details help us arrange logistics and
                                    accommodation.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                {/* ═══ Personal Details ═══ */}
                                <div className="form-section">
                                    <div className="form-section-title">
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faFileAlt} />
                                        </span>
                                        Personal &amp; Paper Details
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="reg-fullName">
                                                Full Name{" "}
                                                <span className="required">*</span>
                                            </label>
                                            <input
                                                id="reg-fullName"
                                                type="text"
                                                name="fullName"
                                                value={form.fullName}
                                                onChange={handleChange}
                                                placeholder="Dr. Jane Doe"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="reg-email">
                                                Email{" "}
                                                <span className="required">*</span>
                                            </label>
                                            <input
                                                id="reg-email"
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="jane.doe@university.edu"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="reg-affiliation">
                                                Affiliation / Institution{" "}
                                                <span className="required">*</span>
                                            </label>
                                            <input
                                                id="reg-affiliation"
                                                type="text"
                                                name="affiliation"
                                                value={form.affiliation}
                                                onChange={handleChange}
                                                placeholder="University / Organization"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="reg-country">
                                                Country{" "}
                                                <span className="required">*</span>
                                            </label>
                                            <input
                                                id="reg-country"
                                                type="text"
                                                name="country"
                                                value={form.country}
                                                onChange={handleChange}
                                                placeholder="India"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="reg-category">
                                                Registration Category{" "}
                                                <span className="required">*</span>
                                            </label>
                                            <select
                                                id="reg-category"
                                                name="category"
                                                value={form.category}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">
                                                    Select category
                                                </option>
                                                <option value="academician">
                                                    Regular Author — Academician
                                                </option>
                                                <option value="industry">
                                                    Regular Author — Industry
                                                </option>
                                                <option value="student">
                                                    Regular Author — Student
                                                </option>
                                                <option value="attendee">
                                                    Only Attending / Accompanying
                                                </option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="reg-ieeeId">
                                                IEEE Membership ID{" "}
                                                <span
                                                    style={{
                                                        color: "var(--text-muted)",
                                                        fontWeight: 400,
                                                        fontSize: "0.8rem",
                                                    }}
                                                >
                                                    (if applicable)
                                                </span>
                                            </label>
                                            <input
                                                id="reg-ieeeId"
                                                type="text"
                                                name="ieeeId"
                                                value={form.ieeeId}
                                                onChange={handleChange}
                                                placeholder="e.g. 12345678"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="reg-paperTitle">
                                                Paper Title{" "}
                                                <span className="required">*</span>
                                            </label>
                                            <input
                                                id="reg-paperTitle"
                                                type="text"
                                                name="paperTitle"
                                                value={form.paperTitle}
                                                onChange={handleChange}
                                                placeholder="Title of your accepted paper"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="reg-paperId">
                                                Paper / Submission ID{" "}
                                                <span className="required">*</span>
                                            </label>
                                            <input
                                                id="reg-paperId"
                                                type="text"
                                                name="paperId"
                                                value={form.paperId}
                                                onChange={handleChange}
                                                placeholder="e.g. AIDL-2027-0042"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row single">
                                        <div className="form-group">
                                            <label htmlFor="reg-coAuthors">
                                                Co-Author(s)
                                            </label>
                                            <input
                                                id="reg-coAuthors"
                                                type="text"
                                                name="coAuthors"
                                                value={form.coAuthors}
                                                onChange={handleChange}
                                                placeholder="Comma separated names (optional)"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* ═══ Travel Details ═══ */}
                                <div className="form-section">
                                    <div className="form-section-title">
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faPlane} />
                                        </span>
                                        Travel Details
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="reg-arrivalDate">
                                                Arrival Date{" "}
                                                <span className="required">*</span>
                                            </label>
                                            <input
                                                id="reg-arrivalDate"
                                                type="date"
                                                name="arrivalDate"
                                                value={form.arrivalDate}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="reg-departureDate">
                                                Departure Date{" "}
                                                <span className="required">*</span>
                                            </label>
                                            <input
                                                id="reg-departureDate"
                                                type="date"
                                                name="departureDate"
                                                value={form.departureDate}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="reg-modeOfTravel">
                                                Mode of Travel
                                            </label>
                                            <select
                                                id="reg-modeOfTravel"
                                                name="modeOfTravel"
                                                value={form.modeOfTravel}
                                                onChange={handleChange}
                                            >
                                                <option value="">
                                                    Select mode
                                                </option>
                                                <option value="flight">
                                                    Flight
                                                </option>
                                                <option value="train">Train</option>
                                                <option value="bus">Bus</option>
                                                <option value="car">
                                                    Personal Vehicle
                                                </option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="reg-accommodation">
                                                Accommodation Preference
                                            </label>
                                            <select
                                                id="reg-accommodation"
                                                name="accommodation"
                                                value={form.accommodation}
                                                onChange={handleChange}
                                            >
                                                <option value="">
                                                    Select preference
                                                </option>
                                                <option value="university">
                                                    University Guest House
                                                </option>
                                                <option value="hotel">
                                                    Nearby Hotel
                                                </option>
                                                <option value="self">
                                                    Self-arranged
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="reg-dietaryRequirements">
                                                Dietary Requirements
                                            </label>
                                            <select
                                                id="reg-dietaryRequirements"
                                                name="dietaryRequirements"
                                                value={form.dietaryRequirements}
                                                onChange={handleChange}
                                            >
                                                <option value="">No preference</option>
                                                <option value="vegetarian">
                                                    Vegetarian
                                                </option>
                                                <option value="vegan">Vegan</option>
                                                <option value="halal">Halal</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="reg-specialRequests">
                                                Special Requests
                                            </label>
                                            <textarea
                                                id="reg-specialRequests"
                                                name="specialRequests"
                                                value={form.specialRequests}
                                                onChange={handleChange}
                                                placeholder="Any additional requests or accessibility needs..."
                                                rows={3}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                {/* ═══ Submit ═══ */}
                                <button type="submit" className="submit-btn">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                    Submit Registration
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
