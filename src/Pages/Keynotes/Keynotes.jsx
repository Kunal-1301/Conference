import { useMemo } from "react";
import "./keynotes.css";
import Section from "../../Components/Common/Section";
import MemberCard from "../../Components/Common/MemberCard";
import { keynotes } from "../../data/conferenceData";

export default function Keynotes() {
    const keynoteCards = useMemo(() =>
        keynotes.map((speaker) => (
            <MemberCard
                key={speaker.id}
                isKeynote={true}
                name={speaker.name}
                position={speaker.position}
                affiliation={speaker.affiliation}
                img={speaker.image}
            >
                <p>{speaker.bio}</p>
                <div className="speakerdtv">
                    <div>{speaker.sessionDate}</div>
                    <div>{speaker.sessionTime}</div>
                    <div>{speaker.sessionMode}</div>
                </div>
            </MemberCard>
        )),
        []
    );

    return (
        <main className="keynotes page">
            <article>
                <Section title="Our Keynote Speakers">
                    {keynoteCards}
                </Section>
            </article>
        </main>
    );
}

