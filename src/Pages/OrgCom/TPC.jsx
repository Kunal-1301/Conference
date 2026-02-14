import { useState } from 'react';
import tracks from "../../info/Tracks"
import committeeData from "../../info/Committees"
import PageHero from "../../Components/Common/PageHero"
import './OrgCom.css'; // Ensure CSS is imported

export default function TPC() {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter logic for technical committees
    const filteredTechnical = committeeData.technical.map(section => ({
        ...section,
        members: section.members.filter(member =>
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.position.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(section => section.members.length > 0);

    return (
        <div className="tpc-page">
            <PageHero
                title="Technical Program Committee"
                subtitle="Track Chairs & Review Committee"
                backgroundImage="/header/1.jpg"
            />
            <div className="page orgCom">
                <div className="tracks">
                    {
                        tracks.map((track, index) => (
                            <div className="track" key={index}>
                                <div className="trackTitle">
                                    <h3>{track.title}</h3>
                                    <p>{track.sub}</p>
                                </div>

                                <div className="trackChairs">
                                    <h4>Track Chairs</h4>
                                    <div>
                                        {
                                            track.chairs.map((chair, index) => (
                                                <div key={index}>
                                                    <span><strong>{chair.name}</strong></span>
                                                    <span>{chair.des}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="technical-committee-section">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search reviewers or committee members..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    {/* Render Filtered Technical Committee Sections */}
                    {filteredTechnical.length > 0 ? (
                        filteredTechnical.map((section, index) => (
                            <div key={index} className="technical-section-group">
                                <h2 className="section-title">{section.title}</h2>
                                <ul className="reviewCom">
                                    {section.members.map((member, idx) => (
                                        <li key={idx}>
                                            <span><strong>{member.name}</strong></span>
                                            <span>{member.position}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">No members found matching "{searchTerm}"</p>
                    )}
                </div>
            </div>
        </div>
    )
}
