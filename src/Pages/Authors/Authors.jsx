import "./Authors.css"
import Section from "../../Components/Common/Section";
import PageHero from "../../Components/Common/PageHero";
import SponsorsBar from "../../Components/Common/SponsorsBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import {
    faBrain,
    faRobot,
    faHeartbeat,
    faComments,
    faLightbulb,
    faExclamationTriangle,
    faCalendarAlt,
    faEnvelope,
    faGlobe,
    faFileAlt,
    faUserPlus,
    faClipboardCheck,
    faCloudUploadAlt,
    faSearchPlus,
    faShieldAlt,
    faQuestionCircle,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function Authors() {
    return (
        <div className='authors-page'>
            <PageHero
                title="Author's Area"
                subtitle="Submit Your Research & Join the Global Dialogue"
                backgroundImage="/header/2.jpg"
            />
            <div className="page">
                <div className="homeContent">

                    {/* Congratulations Banner */}
                    {/* <div className="congrats-banner">
                        <div className="congrats-icon">🎉</div>
                        <div>
                            <h2>Congratulations on the acceptance of your paper to AIDL – HCSY 2027!</h2>
                            <p>These instructions are critical to ensuring your paper is included in the AIDL – HCSY 2027 Proceedings and submitted for indexing in the <strong>IEEE Xplore Digital Library</strong> (subject to IEEE approval). Please read this entire document carefully before submission.</p>
                        </div>
                    </div> */}
                    
                    {/* Call for Papers */}
                    <Section title="Call for Papers" variant="block">
                        <p>The International Conference on Artificial Intelligence and Deep Learning Methods for Human-Centric Systems (AIDL-HCSY 2027) invites high-quality original research contributions that address the role of AI and deep learning in enhancing human-centered design, societal impact, and ethical deployment. Authors are encouraged to submit unpublished, original research papers that explore theoretical advancements, methodological innovations, and real-world applications across a diverse range of AI domains. All submissions will undergo a peer-reviewed process to ensure quality, relevance, and scientific rigor.</p>
                        <p>We welcome submissions from academia, industry, and policy research communities to foster a rich, interdisciplinary dialogue.</p>

                        <p>
                            <strong>Topics of interest include, but are not limited to:</strong>
                        </p>
                        <br />
                        <ul className="themes">
                            <li>
                                Foundations of Artificial Intelligence and Knowledge-Driven Systems
                                <span><FontAwesomeIcon icon={faBrain} /></span>
                            </li>
                            <li>
                                Computer Vision and Image Intelligence for Human-Centric Applications
                                <span><FontAwesomeIcon icon={faEye} /></span>
                            </li>
                            <li>
                                Natural Language Processing and Human-Machine Interaction
                                <span><FontAwesomeIcon icon={faComments} /></span>
                            </li>
                            <li>
                                AI-Enabled Healthcare and Disease Diagnosis
                                <span><FontAwesomeIcon icon={faHeartbeat} /></span>
                            </li>
                            <li>
                                Intelligent Control, Robotics, and Autonomous Systems
                                <span><FontAwesomeIcon icon={faRobot} /></span>
                            </li>
                            <li>
                                Innovation, Entrepreneurship, and Human-Centric System Design
                                <span><FontAwesomeIcon icon={faLightbulb} /></span>
                            </li>
                        </ul>
                    </Section>

                    {/* Important Policy Notice */}
                    <div className="policy-notice">
                        <div className="policy-notice-header">
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            <h3>Important Policy Notice</h3>
                        </div>
                        <ul>
                            <li>The conference reserves the right to <strong>exclude a paper from distribution</strong> after the conference (including removal from IEEE Xplore) if the paper is not presented at the conference.</li>
                            <li>At least <strong>one author must register</strong> with a full registration and <strong>present the paper</strong>.</li>
                        </ul>
                    </div>

                    {/* Important Dates */}
                    <Section title="Important Dates" variant="block">
                        <div className="dates-grid">
                            <div className="date-card highlight">
                                <FontAwesomeIcon icon={faCalendarAlt} className="date-card-icon" />
                                <div>
                                    <span className="date-label">Final Paper Submission Deadline</span>
                                    <span className="date-value">30 August 2026</span>
                                    <span className="date-note">All PDFs must be approved and copyright forms completed by this date</span>
                                </div>
                            </div>
                            <div className="date-card">
                                <FontAwesomeIcon icon={faCalendarAlt} className="date-card-icon" />
                                <div>
                                    <span className="date-label">Conference Dates</span>
                                    <span className="date-value">18 – 20 January 2027</span>
                                </div>
                            </div>
                            <div className="date-card">
                                <FontAwesomeIcon icon={faCalendarAlt} className="date-card-icon" />
                                <div>
                                    <span className="date-label">Venue</span>
                                    <span className="date-value">Thapar Institute of Engineering and Technology, Patiala, India</span>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* Contact Information */}
                    <Section title="Contact Information" variant="block">
                        <div className="contact-grid">
                            <div className="contact-card">
                                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                                <div>
                                    <span className="contact-label">Paper Submission, Technical Queries & Registration Queries</span>
                                    <a href="mailto:queries.aidl2027@thapar.edu" className="contact-link">queries.aidl2027@thapar.edu</a>
                                </div>
                            </div>
                            <div className="contact-card">
                                <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
                                <div>
                                    <span className="contact-label">Conference Website</span>
                                    <a href="https://aidlhcsy.thapar.edu/" target="_blank" rel="noopener noreferrer" className="contact-link">aidlhcsy.thapar.edu</a>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* Final Paper Submission Guidelines Overview */}
                    <Section title="Final Paper Submission Guidelines" variant="block">
                        <p>Final paper submission consists of the following steps:</p>
                        <div className="steps-overview">
                            {[
                                { num: 1, label: "Manuscript Preparation", icon: faFileAlt },
                                { num: 2, label: "Create/Access Submission Account", icon: faUserPlus },
                                { num: 3, label: "Finalize Metadata", icon: faClipboardCheck },
                                { num: 4, label: "Upload Your Final Submission", icon: faCloudUploadAlt },
                                { num: 5, label: "Review and Approve PDF", icon: faSearchPlus },
                                { num: 6, label: "Copyright Submission", icon: faShieldAlt },
                            ].map((step) => (
                                <div className="step-chip" key={step.num}>
                                    <span className="step-num">{step.num}</span>
                                    <FontAwesomeIcon icon={step.icon} className="step-icon" />
                                    <span>{step.label}</span>
                                </div>
                            ))}
                        </div>
                        <p className="steps-note"><FontAwesomeIcon icon={faExclamationTriangle} /> All steps must be completed before the submission deadline.</p>
                    </Section>

                    {/* Step 1: Manuscript Preparation */}
                    <Section title="1. Manuscript Preparation" variant="block">
                        <p>If you have not finalized your manuscript, please ensure it complies with the following requirements:</p>

                        <div className="manuscript-grid">
                            <div className="manuscript-card">
                                <h4>Applications</h4>
                                <p>Use <strong>Microsoft Word</strong> or <strong>LaTeX</strong> to prepare your manuscript.</p>
                            </div>
                            <div className="manuscript-card">
                                <h4>Templates</h4>
                                <p>Authors must use the <strong>official conference template</strong> (IEEE conference format).</p>
                            </div>
                            <div className="manuscript-card">
                                <h4>Page Limit</h4>
                                <ul>
                                    <li>Maximum: <strong>6 pages</strong></li>
                                    <li>One additional page allowed with payment of extra page charges during registration.</li>
                                </ul>
                            </div>
                            <div className="manuscript-card">
                                <h4>Headers, Footers, Page Numbers</h4>
                                <p><strong>No headers, footers, or page numbers</strong> should appear in the manuscript.</p>
                            </div>
                        </div>

                        <div className="graphics-guidelines">
                            <h4><FontAwesomeIcon icon={faEye} /> Graphics and Images</h4>
                            <ul>
                                <li>Prefer vector graphics (<code>.eps</code>) over bitmap images (<code>.bmp</code>).</li>
                                <li>For LaTeX submissions, include all images in <code>.eps</code> format.</li>
                                <li>Resolution: <strong>150–300 dpi</strong>.</li>
                                <li>Labels inside graphics must be at least <strong>4pt</strong>.</li>
                                <li>Ensure graphics are clearly visible in <strong>black-and-white print</strong>.</li>
                                <li>Avoid "Smooth Graphics" options that create oversized files.</li>
                            </ul>
                        </div>
                    </Section>

                    {/* Step 2: Create / Access Submission Account */}
                    <Section title="2. Create / Access Submission Account" variant="block">
                        <p>Authors must create or access their conference submission account via the official submission portal (details available on the conference website).</p>
                        <div className="numbered-steps">
                            <div className="numbered-step">
                                <span className="step-number">1</span>
                                <p>Visit the conference website.</p>
                            </div>
                            <div className="numbered-step">
                                <span className="step-number">2</span>
                                <p>Select the <strong>"Final Paper Submission"</strong> link.</p>
                            </div>
                            <div className="numbered-step">
                                <span className="step-number">3</span>
                                <p>Create a new account or log in.</p>
                            </div>
                            <div className="numbered-step">
                                <span className="step-number">4</span>
                                <p>Enter all required metadata carefully.</p>
                            </div>
                        </div>
                        <p className="info-note">Returning users may log in using their existing credentials.</p>
                    </Section>

                    {/* Step 3: Finalize Metadata */}
                    <Section title="3. Finalize Metadata (Critical Step)" variant="block">
                        <div className="critical-badge">
                            <FontAwesomeIcon icon={faExclamationTriangle} /> CRITICAL — This is your last opportunity to ensure accuracy
                        </div>
                        <p>Ensure the following information is accurate:</p>
                        <ul className="metadata-checklist">
                            <li><FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> Paper Title</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> Author Names</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> Affiliations</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> Country Details</li>
                        </ul>

                        <h4>Instructions:</h4>
                        <ul className="instruction-list">
                            <li>Open your source document.</li>
                            <li>Copy and paste the <strong>exact title</strong>.</li>
                            <li>Carefully enter each author's <strong>full name, affiliation, and country</strong>.</li>
                            <li>Double-check spelling and order.</li>
                            <li>Confirm that all information is correct before proceeding.</li>
                        </ul>

                        <div className="warning-box">
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            <p><strong>Metadata cannot be modified after final submission</strong> and will be used for indexing exactly as entered.</p>
                        </div>
                    </Section>

                    {/* Step 4: Upload Your Final Submission */}
                    <Section title="4. Upload Your Final Submission" variant="block">
                        <p>You may submit:</p>
                        <div className="upload-options">
                            <div className="upload-option">
                                <strong>Option A</strong>
                                <p>Source files for PDF conversion</p>
                            </div>
                            <div className="upload-divider">OR</div>
                            <div className="upload-option">
                                <strong>Option B</strong>
                                <p>A PDF file for compliance verification</p>
                            </div>
                        </div>

                        <div className="latex-note">
                            <h4>For LaTeX Submissions:</h4>
                            <ul>
                                <li>Compress all source files into a single archive (<code>.zip</code>, <code>.gz</code>, etc.)</li>
                                <li>Include all required image files.</li>
                            </ul>
                        </div>

                        <h4>Steps:</h4>
                        <div className="numbered-steps">
                            <div className="numbered-step">
                                <span className="step-number">1</span>
                                <p>Log in to your submission account.</p>
                            </div>
                            <div className="numbered-step">
                                <span className="step-number">2</span>
                                <p>Select <strong>"Submit New Title."</strong></p>
                            </div>
                            <div className="numbered-step">
                                <span className="step-number">3</span>
                                <p>Enter metadata.</p>
                            </div>
                            <div className="numbered-step">
                                <span className="step-number">4</span>
                                <p>Upload your manuscript.</p>
                            </div>
                            <div className="numbered-step">
                                <span className="step-number">5</span>
                                <p>Confirm submission.</p>
                            </div>
                        </div>

                        <div className="confirmation-info">
                            <h4>You will receive:</h4>
                            <ul>
                                <li>An <strong>email confirmation</strong> of upload.</li>
                                <li>A <strong>second email</strong> regarding PDF compliance.</li>
                            </ul>
                        </div>
                    </Section>

                    {/* Step 5: Review and Approve PDF */}
                    <Section title="5. Review and Approve PDF" variant="block">
                        <div className="review-grid">
                            <div className="review-card success">
                                <h4><FontAwesomeIcon icon={faCheckCircle} /> If conversion is successful:</h4>
                                <ul>
                                    <li>Download and review the generated PDF carefully.</li>
                                    <li>Check formatting, equations, figures, and fonts.</li>
                                    <li>If correct, click <strong>"Approve."</strong></li>
                                </ul>
                            </div>
                            <div className="review-card warning">
                                <h4><FontAwesomeIcon icon={faExclamationTriangle} /> If incorrect:</h4>
                                <ul>
                                    <li>Select <strong>"Revise"</strong> and upload a corrected file.</li>
                                    <li>Repeat until compliant.</li>
                                </ul>
                            </div>
                        </div>
                        <p className="steps-note"><FontAwesomeIcon icon={faExclamationTriangle} /> All PDFs must be approved before the deadline.</p>
                    </Section>

                    {/* Step 6: Copyright Submission */}
                    <Section title="6. Copyright Submission" variant="block">
                        <div className="copyright-deadline">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            <span>Deadline: <strong>15 November 2026</strong></span>
                        </div>

                        <p>After PDF approval:</p>
                        <div className="numbered-steps">
                            <div className="numbered-step">
                                <span className="step-number">1</span>
                                <p>Select the <strong>"Submit Copyright"</strong> option.</p>
                            </div>
                            <div className="numbered-step">
                                <span className="step-number">2</span>
                                <p>Verify metadata carefully.</p>
                            </div>
                            <div className="numbered-step">
                                <span className="step-number">3</span>
                                <p>Confirm correctness.</p>
                            </div>
                            <div className="numbered-step">
                                <span className="step-number">4</span>
                                <p>Complete the electronic copyright form.</p>
                            </div>
                        </div>

                        <p className="info-note">You will receive a PDF copy of the completed form for your records.</p>

                        <div className="warning-box">
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            <p><strong>Failure to submit copyright will result in exclusion from publication.</strong></p>
                        </div>
                    </Section>

                    {/* Additional Notes */}
                    <Section title="Additional Notes" variant="block">
                        <ul className="additional-notes">
                            <li><FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> A <strong>full registration</strong> is required to upload final papers (up to 3 papers per full registration).</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> At least <strong>one author must attend</strong> and present the paper.</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> Papers not presented will <strong>not be included</strong> in the final proceedings.</li>
                        </ul>
                    </Section>



                    {/* FAQ */}
                    <Section title="Frequently Asked Questions" variant="block">
                        <div className="faq-box">
                            <FontAwesomeIcon icon={faQuestionCircle} className="faq-icon" />
                            <div>
                                <p>Please visit the conference website for detailed FAQs and submission support:</p>
                                <a href="https://conference-livid-xi.vercel.app" target="_blank" rel="noopener noreferrer" className="faq-link">conference-livid-xi.vercel.app</a>
                                <p>For additional assistance, contact the conference secretariat at <a href="mailto:queries.aidl2027@thapar.edu">queries.aidl2027@thapar.edu</a></p>
                            </div>
                        </div>
                    </Section>

                    {/* Welcome message */}
                    <div className="welcome-footer">
                        <p>We look forward to welcoming you to <strong>AIDL – HCSY 2027</strong> at <strong>Thapar Institute of Engineering and Technology, Patiala, India</strong>, from <strong>18th – 20th January 2027</strong>.</p>
                    </div>

                </div>
            </div>
            <SponsorsBar />
        </div>
    )
}
