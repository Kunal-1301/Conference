import React from "react";
import Section from "../../Components/Common/Section";
import MemberCard from "../../Components/Common/MemberCard";

export default function SupCom() {
  const committeeSections = [
    {
      title: "Finance Committee",
      members: [
        { name: "Sh. Pankaj Sinha", img: "./dummy.jpg", position: "Chair" },
        {
          name: "Dr. Shashikant",
          img: "https://eced.thapar.edu/files/microfaculty/17/17295741451270.jpg",
          position:
            "Assistant Professor, Department of Electronics & Communication Engineering",
        },
        {
          name: "Dr. Harsimar Kaur",
          img: "https://tslas.thapar.edu/assets/uploads/Dr__Harsimar_41333.jpg",
          position: "Assistant Professor, TSLAS",
        },
        {
          name: "Ms. Vaibhav Sakshi",
          img: "https://tslas.thapar.edu/assets/uploads/Dr-Vaibhav-Sakshi_48033.jpg",
          position: "Assistant Professor, TSLAS",
        },
      ],
    },
    {
      title: "Publications Committee",
      members: [
        {
          name: "Dr. Hemdutt Joshi",
          img: "https://www.thapar.edu/webroot/files/faculty/271/1508247387271.png",
          position: "Associate Professor, Department of Electronics & Communication Engineering",
        },
        {
          name: "Dr. Ashutosh Kumar Singh",
          img: "https://www.thapar.edu/webroot/files/faculty/280/1505882899280.jpg",
          position: "Associate Professor, Department of Electronics & Communication Engineering",
        },
        { name: "Dr. Sandeep Mandia", img: "https://eced.thapar.edu/files/microfaculty/17/17296598861668.jpg", position: "Assistant Professor, Department of Electronics & Communication Engineering" },
        { name: "Dr. Jay Prakash Mishra", img: "https://tslas.thapar.edu/assets/uploads/Dr_-jayaprakash-Mishra_74243.jpg", position: "Assistant Professor, TSLAS" },
        { name: "Dr. Neeru Sharma", img: "./dummy.jpg", position: "Member" },
      ],
    },
    {
      title: "Sponsorship and Industry Liaison Committee",
      members: [
        { name: "Dr. Anupam Garg", img: "https://tslas.thapar.edu/assets/uploads/Dr__Anupam_99587.jpg", position: "Member" },
        { name: "Dr. Gaganpreet Kaur", img: "https://www.thapar.edu/webroot/files/faculty/101/1500982326101.jpg", position: "Member" },
        { name: "Dr. Amrita Kaur", img: "https://csed.thapar.edu/files/microfaculty/21/17307930121365.jpg", position: "Member" },
        { name: "Dr. Alka Pandita", img: "https://www.thapar.edu/webroot/files/faculty/554/1743153125554.png", position: "Member" },
        { name: "Mr. Navdeep Singh", img: "https://tslas.thapar.edu/assets/uploads/Navdeep-Singh_15715.jpg", position: "Member" },
      ],
    },
    {
      title: "Publicity Committee",
      members: [
        { name: "Ms. Radhika Kalia", img: "https://tslas.thapar.edu/assets/uploads/MsRadhikaKalia-office-dean_52322.jpg", position: "" },
        { name: "Ms. Nivedita Anand", img: "https://tslas.thapar.edu/assets/uploads/nivedita1_22641.jpg", position: "" },
        { name: "Ms. Sharnish Kaur", img: "https://tslas.thapar.edu/assets/uploads/sarnish_banner_img_72191.jpg", position: "" },
        { name: "Mr. Arnab Rath", img: "https://tslas.thapar.edu/assets/uploads/Mr__Arnab__22395.jpg", position: "" },
      ],
    },
    {
      title: "Registration Committee",
      members: [
        { name: "Dr. Arun Chatterjee", img: "./dummy.jpg", position: "Member" },
        { name: "Dr. Gaganpreet Kaur", img: "https://www.thapar.edu/webroot/files/faculty/101/1500982326101.jpg", position: "Member" },
        {
          name: "Dr. Gitanjali Chandwani",
          img: "./dummy.jpg",
          position: "Member",
        },
        { name: "Dr. Rajneesh Sharma", img: "./dummy.jpg", position: "Member" },
        { name: "Dr. Sheikh Adil Edrisi", img: "https://tslas.thapar.edu/assets/uploads/Dr__Adil-Google_Scholar_14141.jpg", position: "Member" },
      ],
    },
    {
      title: "Local Arrangement Committee",
      members: [
        { name: "Dr. Anil Arora", img: "https://eced.thapar.edu/files/microfaculty/17/17295752611232.jpg", position: "Member" },
        { name: "Ms. Riya Kalia", img: "https://tslas.thapar.edu/assets/uploads/Ms__Riya__67333.jpg", position: "Member" },
        {
          name: "Ms. Palack Deep Kaur",
          img: "https://tslas.thapar.edu/assets/uploads/Ms_-Palack-varraich_69993.JPG",
          position: "Member",
        },
        { name: "Mr. Harvinder", img: "https://tslas.thapar.edu/assets/uploads/HARVINDER-SINGH-PHOTO_853.jpg", position: "Member" },
        { name: "Mr. Manoj Arya", img: "./dummy.jpg", position: "Member" },
        { name: "Mr. Armaan Goyal", img: "https://media.licdn.com/dms/image/v2/D5603AQFM1jud0SSC1w/profile-displayphoto-shrink_400_400/B56ZbibXrEHgAg-/0/1747555548767?e=1756339200&v=beta&t=60sL1Ml-q-DtxpfevccoiVSQRiGET_yUVXlVFK2iCcs", position: "Member" },
      ],
    },
  ];

  return (
    <div className="page orgCom">
      <h2>Support Committee</h2>
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
