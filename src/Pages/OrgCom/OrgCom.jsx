import './OrgCom.css';
import committeeData from "../../info/Committees"
import Section from '../../Components/Common/Section';
import MemberCard from '../../Components/Common/MemberCard';
import PageHero from '../../Components/Common/PageHero';

export default function OrgCom() {
  return (
    <div className='orgCom-page'>
      <PageHero
        title="Organizing Committee"
        subtitle="Meet the Team Behind AIDL-HCSY 2027"
        backgroundImage="/header/3.jpg"
      />
      <div className='page orgCom'>
        {committeeData.organising.map((section, i) => (
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
        ))}
      </div>
    </div>
  );
}
