import "./Registration.css";
import PageHero from "../../Components/Common/PageHero";
import SponsorsBar from "../../Components/Common/SponsorsBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faExclamationTriangle,
    faUniversity,
    faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

const registrationFees = [
    {
        category: "Regular Author Academician",
        rows: [
            { membership: "IEEE", inr: "INR 8,000 + 18% GST = INR 9,440", usd: "240" },
            { membership: "Non-IEEE", inr: "INR 9,000 + 18% GST = INR 10,620", usd: "300" },
        ],
    },
    {
        category: "Regular Author from Industry",
        rows: [
            { membership: "IEEE", inr: "INR 9,000 + 18% GST = INR 10,620", usd: "240" },
            { membership: "Non-IEEE", inr: "INR 10,000 + 18% GST = INR 11,800", usd: "300" },
        ],
    },
    {
        category: "Regular Author Student",
        rows: [
            { membership: "IEEE", inr: "INR 6,000 + 18% GST = INR 7,080", usd: "160" },
            { membership: "Non-IEEE", inr: "INR 7,500 + 18% GST = INR 8,850", usd: "200" },
        ],
    },
    {
        category: "Only Attending or Accompanying",
        rows: [
            { membership: "N/A", inr: "INR 3,000 + 18% GST = INR 3,540", usd: "100" },
        ],
    },
];

export default function Registration() {
    return (
        <div className="registration-page">
            <PageHero
                title="Registration"
                subtitle="Conference Registration Details & Fees"
                backgroundImage="/header/2.jpg"
            />

            <div className="page">
                {/* ═══ Registration Fee ═══ */}
                <div className="reg-section">
                    <h2 className="reg-section-title">
                        <FontAwesomeIcon icon={faClipboardList} />
                        Registration Fee
                    </h2>

                    <div className="fee-table-wrapper">
                        <table className="fee-table">
                            <thead>
                                <tr>
                                    <th>Registration Category</th>
                                    <th>Membership</th>
                                    <th>Registration Fees (INR)</th>
                                    <th>Registration Fees (USD)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registrationFees.map((group, gi) =>
                                    group.rows.map((row, ri) => (
                                        <tr key={`${gi}-${ri}`}>
                                            {ri === 0 && (
                                                <td
                                                    rowSpan={group.rows.length}
                                                    className="category-cell"
                                                >
                                                    {group.category}
                                                </td>
                                            )}
                                            <td className="membership-cell">{row.membership}</td>
                                            <td>{row.inr}</td>
                                            <td className="usd-cell">{row.usd}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* <p className="fee-note">
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        Please note that any paper that is not covered by the registration fee will not be published in the Conference Proceedings.
                    </p> */}
                </div>

                {/* ═══ Account Details ═══ */}
                <div className="reg-section">
                    <h2 className="reg-section-title">
                        <FontAwesomeIcon icon={faUniversity} />
                        Account Details
                    </h2>

                    <div className="coming-soon-box">
                        <div className="coming-soon-icon">🔜</div>
                        <div>
                            <h3>To be updated soon</h3>
                            <p>Bank account details for registration payment will be shared here shortly. Please check back later.</p>
                        </div>
                    </div>
                </div>

                {/* ═══ Registration Procedure ═══ */}
                <div className="reg-section">
                    <h2 className="reg-section-title">
                        <FontAwesomeIcon icon={faClipboardList} />
                        Registration Procedure
                    </h2>

                    <div className="procedure-content">
                        <p>
                            All participants are requested to register online. The participants should submit the filled registration form along with an electronic receipt. Please mention <strong>AIDL-HCSY 2027</strong> in the transaction remarks.
                        </p>

                        <div className="procedure-steps">
                            <div className="procedure-step">
                                <span className="procedure-num">1</span>
                                <p>Complete the payment as per the applicable registration fee mentioned above.</p>
                            </div>
                            <div className="procedure-step">
                                <span className="procedure-num">2</span>
                                <p>Fill the online registration form (link will be shared soon).</p>
                            </div>
                            <div className="procedure-step">
                                <span className="procedure-num">3</span>
                                <p>Upload the payment receipt along with the registration form.</p>
                            </div>
                            <div className="procedure-step">
                                <span className="procedure-num">4</span>
                                <p>A confirmation email will be sent to your registered email address upon successful registration.</p>
                            </div>
                        </div>

                        <div className="procedure-note">
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            <p>At least <strong>one author</strong> per accepted paper must register with a <strong>full registration</strong> and present the paper at the conference. Papers not presented will not be included in the final proceedings or submitted to IEEE Xplore.</p>
                        </div>
                    </div>
                </div>
            </div>
            <SponsorsBar />
        </div>
    );
}
