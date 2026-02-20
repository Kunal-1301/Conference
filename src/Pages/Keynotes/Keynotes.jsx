import "./keynotes.css"

export default function Keynotes() {
    return (
        <div className="keynotes page">

            <h2>Our Keynote Speakers</h2>

            <div className="members">
                <div className="member keySpeaker">
                    <div className="memberImage">
                        <img src="https://about.uq.edu.au/sites/default/files/profiles/41328.png" alt="" />
                    </div>
                    <div className='memberInfo'>
                        <h2>Prof Tim Miller</h2>
                        <h4>Professor, School of Electrical Engineering and Computer Science, University of Queensland, Australia</h4>
                        <p>
                            Tim Miller is a world-leading researcher in Explainable Artificial Intelligence (XAI), focusing on developing methods to make AI systems transparent and interpretable. His work uniquely integrates insights from cognitive science and human-computer interaction to build human-centered AI. He is highly cited for foundational research that helps people understand, trust, and collaborate with complex AI decision-making systems.
                        </p>

                        <div className="speakerdtv">
                            <div>31st Feburary 2026</div>
                            <div>12 Noon</div>
                            <div>Online</div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="members">
                <div className="member keySpeaker">
                    <div className="memberImage">
                        <img src="https://i1.rgstatic.net/ii/profile.image/277711231701009-1443222925372_Q512/Jiri-Hosek-2.jpg" alt="" />
                    </div>
                    <div className='memberInfo'>
                        <h2>Prof Jiří Hošek</h2>
                        <h4>Associate Professor, Department of Telecommunications, Brno University of Technology, Czech Republic</h4>
                        <p>Jiří Hošek is a prolific researcher in wireless communications, having co-authored over 130 papers on 4G/5G cellular systems, the Internet of Things (IoT), and network performance. His work centrally focuses on optimizing Quality of Service (QoS) and Quality of Experience (QoE) for network users. His recent research also leverages AI and machine learning for optimizing emerging technologies, including UAV (drone) communication, mmWave networks, and satellite systems.</p>

                        <div className="speakerdtv">
                            <div>31st Feburary 2026</div>
                            <div>12 Noon</div>
                            <div>Online</div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="members">
                <div className="member keySpeaker">
                    <div className="memberImage">
                        <img src="https://declercq.gatech.edu/images/2016-nico-declercq.jpg" alt="" />
                    </div>
                    <div className='memberInfo'>
                        <h2>Prof Nico F. Declercq</h2>
                        <h4>Professor, Georgia Institute of Technology, Atlanta, USA</h4>
                        <p>Dr. Declercq's lab specializes in experimental and theoretical Nondestructive Evaluation (NDE) for industrial applications, promoting environmental consciousness. The team is known for advanced ultrasonic NDE (0.5 MHz - 2 GHz) using diverse methods like linear/nonlinear acoustics and air-coupled/immersion scans. This research is applied to traditional materials, composites, solar panels, and metamaterials.</p>

                        <div className="speakerdtv">
                            <div>31st Feburary 2026</div>
                            <div>12 Noon</div>
                            <div>Online</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
