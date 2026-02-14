import { useState } from 'react';
import './OrgCom.css';
import committeeData from "../../info/Committees";
import Section from '../../Components/Common/Section';
import MemberCard from '../../Components/Common/MemberCard';
import PageHero from '../../Components/Common/PageHero';

export default function SupCom() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter logic for supporting committee
  const filteredSupporting = committeeData.supporting.map(section => ({
    ...section,
    members: section.members.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.members.length > 0);

  return (
    <div className='supCom-page'>
      <PageHero
        title="Supporting Committee"
        subtitle="Finance, Publication, Publicity & More"
        backgroundImage="/header/3.jpg"
      />
      <div className='page orgCom'>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search supporting committee..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {filteredSupporting.length > 0 ? (
          filteredSupporting.map((section, i) => (
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
