import { useState } from 'react';
import './OrgCom.css';
import committeeData from "../../info/Committees"
import Section from '../../Components/Common/Section';
import MemberCard from '../../Components/Common/MemberCard';
import PageHero from '../../Components/Common/PageHero';

export default function OrgCom() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter logic for organizing committee
  const filteredOrganizing = committeeData.organising.map(section => ({
    ...section,
    members: section.members.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.members.length > 0);

  return (
    <div className='orgCom-page'>
      <PageHero
        title="Organizing Committee"
        subtitle="Meet the Team Behind AIDL-HCSY 2027"
        backgroundImage="/header/3.jpg"
      />
      <div className='page orgCom'>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search organizing committee..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {filteredOrganizing.length > 0 ? (
          filteredOrganizing.map((section, i) => (
            <Section key={i} title={section.title} variant="committee-grid">
              {section.members.map((member, j) => (
                <MemberCard
                  key={j}
                  variant="simple"
                  name={member.name}
                  position={member.position}
                />
              ))}
            </Section>
          ))
        ) : (
          <p className="no-results">No members found matching "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
}
