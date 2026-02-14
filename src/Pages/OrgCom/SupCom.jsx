import './OrgCom.css';
import committeeData from "../../info/Committees";
import Section from '../../Components/Common/Section';
import MemberCard from '../../Components/Common/MemberCard';
import PageHero from '../../Components/Common/PageHero';

export default function SupCom() {
  return (
    <div className='supCom-page'>
      <PageHero
        title="Supporting Committee"
        subtitle="Finance, Publication, Publicity & More"
        backgroundImage="/header/3.jpg"
      />
      <div className='page orgCom'>
        {committeeData.supporting.map((section, i) => (
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
