import "./Authors.css"
import Section from "../../Components/Common/Section";
import PageHero from "../../Components/Common/PageHero";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import {
    faBrain,
    faRobot,
    faHeartbeat,
    faComments,
    faLightbulb,
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
                    <h2>Welcome to the Author's Area of AIDL-HCSY 2026</h2>
                    <div>
                        <p>The International Conference on Artificial Intelligence and Deep Learning Methods for Human-Centric Systems, hosted by Thapar Institute of Engineering and Technology. We invite researchers, practitioners, and innovators from academia, industry, and policy sectors to contribute original and high-quality research that aligns with the conference's mission: leveraging AI and deep learning to build inclusive, ethical, and impactful human-centered systems.</p>
                        <br />
                        <br />
                        <p>Whether you're exploring the frontiers of explainable AI, designing creative neural models, or deploying intelligent systems in healthcare, governance, or education — this is your platform to share, collaborate, and shape the future.</p>
                        <br />
                        <br />
                        <p>Explore the submission guidelines below and become a part of this global dialogue on responsible AI innovation.</p>
                    </div>

                    <Section title="Call for Papers" variant="block">
                        <p>The International Conference on Artificial Intelligence and Deep Learning Methods for Human-Centric Systems (AIDL-HCSY 2026) invites high-quality original research contributions that address the role of AI and deep learning in enhancing human-centered design, societal impact, and ethical deployment. Authors are encouraged to submit unpublished, original research papers that explore theoretical advancements, methodological innovations, and real-world applications across a diverse range of AI domains. All submissions will undergo a peer-reviewed process to ensure quality, relevance, and scientific rigor.</p>
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

                    <Section title="General Guidelines" variant="block">
                        <ul className="guides">
                            <li><span>Paper Templates</span> IEEE conference templates (Word & LaTeX)</li>
                            <li><span>Language</span> English</li>
                            <li><span>Review Process</span> Double-blind peer review</li>
                            <li><span>Publication</span> Selected papers will be published in IEEE Xplore <br /> <i> *subject to quality and approval </i></li>
                        </ul>
                    </Section>

                    <Section title="Evaluation Criteria" variant="block">
                        <ul className="guides">
                            <li><span>Technical Soundness</span> Correctness, validity, and robust methodology.</li>
                            <li><span>Novelty</span> Originality, new insights, or significant contribution.</li>
                            <li><span>Effective Communication</span> Clarity, organization, and clear presentation.</li>
                        </ul>
                    </Section>

                    <Section title="Registration Fees" variant="block">
                        <table className="feeTable" border={2}>
                            <thead>
                                <tr>
                                    <th>Registration Category</th>
                                    <th>Membership</th>
                                    <th>Registration Fees (INR) </th>
                                    <th>Registration Fees (USD)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>Regular Author Academician</td>
                                    <td>IEEE</td>
                                    <td>7000</td>
                                    <td>240</td>
                                </tr>
                                <tr>
                                    <td>Non-IEEE</td>
                                    <td>8750</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Regular Author from Industry</td>
                                    <td>IEEE</td>
                                    <td>8000</td>
                                    <td>240</td>
                                </tr>
                                <tr>
                                    <td>Non-IEEE</td>
                                    <td>10000</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Regular Author Student</td>
                                    <td>IEEE</td>
                                    <td>6000</td>
                                    <td>160</td>
                                </tr>
                                <tr>
                                    <td>Non-IEEE</td>
                                    <td>7500</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>Only Attending or Accompanying</td>
                                    <td>NA</td>
                                    <td>3000</td>
                                    <td>100</td>
                                </tr>
                            </tbody>
                        </table>
                    </Section>
                </div>
            </div>
        </div>
    )
}
