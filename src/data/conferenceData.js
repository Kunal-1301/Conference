// Centralized conference data configuration
export const conferenceInfo = {
    name: "AIDL-HCSY 2027",
    fullName: "International Conference on Artificial Intelligence and Deep Learning Methods for Human-Centric Systems",
    year: 2027,
    dates: "18th - 20th January 2027",
    venue: "Thapar Institute of Engineering and Technology",
    location: "Patiala, India",
    countdownTarget: "2027-01-18T09:00:00",
};

export const importantDates = [
    {
        id: 1,
        label: "Paper Submission Deadline",
        date: "30th August 2026",
        key: "paperSubmission"
    },
    {
        id: 2,
        label: "Peer Review Period Start",
        date: "1st September 2026",
        key: "reviewStart"
    },
    {
        id: 3,
        label: "Peer Review Period End",
        date: "10th October 2026",
        key: "reviewEnd"
    },
    {
        id: 4,
        label: "Notification of Acceptance",
        date: "15th October 2026",
        key: "notification"
    },
    {
        id: 5,
        label: "Camera Ready Submission",
        date: "15th November 2026",
        key: "cameraReady"
    },
    {
        id: 6,
        label: "Registration Deadline",
        date: "30th November 2026",
        key: "registration"
    },
    {
        id: 7,
        label: "Conference Dates",
        date: "18th - 20th January 2027",
        key: "conference"
    }
];

export const conferenceThemes = [
    {
        id: 1,
        title: "Foundations of Artificial Intelligence and Knowledge-Driven Systems",
        icon: "faBrain",
        description: "Knowledge-based smart systems, bio-inspired AI, intelligent decision systems."
    },
    {
        id: 2,
        title: "Computer Vision and Image Intelligence for Human-Centric Applications",
        icon: "faEye",
        description: "Computer vision, deep learning for image processing, smart system perception."
    },
    {
        id: 3,
        title: "Natural Language Processing and Human-Machine Interaction",
        icon: "faComments",
        description: "Deep learning for text and NLP, conversational AI, multimodal interaction."
    },
    {
        id: 4,
        title: "AI-Enabled Healthcare and Disease Diagnosis",
        icon: "faHeartbeat",
        description: "AI/ML for biomedical diagnosis, predictive analytics for health, assistive smart systems."
    },
    {
        id: 5,
        title: "Intelligent Control, Robotics, and Autonomous Systems",
        icon: "faRobot",
        description: "Adaptive/robust control, cooperative/optimal/motion control, AI-based control systems."
    },
    {
        id: 6,
        title: "Innovation, Entrepreneurship, and Human-Centric System Design",
        icon: "faLightbulb",
        description: "Business model canvas, entrepreneurial opportunities, development of human-centric solutions."
    }
];

export const sponsors = [
    {
        id: 1,
        name: "Thapar Institute of Engineering and Technology",
        logo: "./tiet.png",
        url: "https://www.thapar.edu/"
    },
    {
        id: 2,
        name: "Thapar School of Liberal Arts and Sciences",
        logo: "./tslas.png",
        url: "#"
    },
    {
        id: 3,
        name: "IEEE",
        logo: "./IEEE.webp",
        url: "https://www.ieee.org/"
    }
];

export const keynotes = [
    {
        id: 1,
        name: "Prof Tim Miller",
        position: "Professor, School of Electrical Engineering and Computer Science",
        affiliation: "University of Queensland, Australia",
        image: "https://about.uq.edu.au/sites/default/files/profiles/41328.png",
        bio: "Tim Miller is a world-leading researcher in Explainable Artificial Intelligence (XAI), focusing on developing methods to make AI systems transparent and interpretable. His work uniquely integrates insights from cognitive science and human-computer interaction to build human-centered AI. He is highly cited for foundational research that helps people understand, trust, and collaborate with complex AI decision-making systems.",
        sessionDate: "28th February 2026",
        sessionTime: "12 Noon",
        sessionMode: "Online"
    },
    {
        id: 2,
        name: "Prof Jiří Hošek",
        position: "Associate Professor, Department of Telecommunications",
        affiliation: "Brno University of Technology, Czech Republic",
        image: "https://i1.rgstatic.net/ii/profile.image/277711231701009-1443222925372_Q512/Jiri-Hosek-2.jpg",
        bio: "Jiří Hošek is a prolific researcher in wireless communications, having co-authored over 130 papers on 4G/5G cellular systems, the Internet of Things (IoT), and network performance. His work centrally focuses on optimizing Quality of Service (QoS) and Quality of Experience (QoE) for network users. His recent research also leverages AI and machine learning for optimizing emerging technologies, including UAV (drone) communication, mmWave networks, and satellite systems.",
        sessionDate: "28th February 2026",
        sessionTime: "12 Noon",
        sessionMode: "Online"
    },
    {
        id: 3,
        name: "Prof Nico F. Declercq",
        position: "Professor",
        affiliation: "Georgia Institute of Technology, Atlanta, USA",
        image: "https://declercq.gatech.edu/images/2016-nico-declercq.jpg",
        bio: "Dr. Declercq's lab specializes in experimental and theoretical Nondestructive Evaluation (NDE) for industrial applications, promoting environmental consciousness. The team is known for advanced ultrasonic NDE (0.5 MHz - 2 GHz) using diverse methods like linear/nonlinear acoustics and air-coupled/immersion scans. This research is applied to traditional materials, composites, solar panels, and metamaterials.",
        sessionDate: "28th February 2026",
        sessionTime: "12 Noon",
        sessionMode: "Online"
    }
];

export const registrationFees = [
    {
        category: "Regular Author Academician",
        fees: [
            { membership: "IEEE", inr: 7000, usd: 240 },
            { membership: "Non-IEEE", inr: 8750, usd: 300 }
        ]
    },
    {
        category: "Regular Author from Industry",
        fees: [
            { membership: "IEEE", inr: 8000, usd: 240 },
            { membership: "Non-IEEE", inr: 10000, usd: 300 }
        ]
    },
    {
        category: "Regular Author Student",
        fees: [
            { membership: "IEEE", inr: 6000, usd: 160 },
            { membership: "Non-IEEE", inr: 7500, usd: 200 }
        ]
    },
    {
        category: "Only Attending or Accompanying",
        fees: [
            { membership: "NA", inr: 3000, usd: 100 }
        ]
    }
];

export const submissionGuidelines = [
    {
        label: "Paper Templates",
        value: "IEEE conference templates (Word & LaTeX)"
    },
    {
        label: "Language",
        value: "English"
    },
    {
        label: "Review Process",
        value: "Double-blind peer review"
    },
    {
        label: "Publication",
        value: "Selected papers will be published in IEEE Xplore",
        note: "*subject to quality and approval"
    }
];

export const evaluationCriteria = [
    {
        label: "Technical Soundness",
        description: "Correctness, validity, and robust methodology."
    },
    {
        label: "Novelty",
        description: "Originality, new insights, or significant contribution."
    },
    {
        label: "Effective Communication",
        description: "Clarity, organization, and clear presentation."
    }
];
