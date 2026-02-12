import './OrgCom.css';
import committeeSections from "../../info/Committees"
import Section from '../../Components/Common/Section';
import MemberCard from '../../Components/Common/MemberCard';

export default function OrgCom() {

  return (
    <div className='page orgCom'>
      <h2>Organizing Committee</h2>
      {committeeSections.map((section, i) => (
        <Section key={i} title={section.title}>
          {section.members.map((member, j) => (
            <MemberCard
              key={j}
              name={member.name}
              img={member.img}
              position={member.position}
            />
          ))}
        </Section>
      ))}
    </div>
  );
}
