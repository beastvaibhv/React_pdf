import React from 'react';

const ResumeTemplate = () => {
  // Static resume data
  const resumeData = {
    name: 'John Doe',
    title: 'Frontend Developer',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main Street, City, State',
    summary: 'A motivated frontend developer with experience...',
    experience: [
      {
        position: 'Senior Developer',
        company: 'ABC Company',
        duration: '2018 - Present',
        details: ['Led a team of developers...', 'Implemented new features...'],
      },
      {
        position: 'Junior Developer',
        company: 'XYZ Agency',
        duration: '2016 - 2018',
        details: ['Assisted in frontend development...', 'Collaborated with designers...'],
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of XYZ',
        duration: '2012 - 2016',
      },
    ],
    skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Git'],
  };

  return (
    <div className="resume-container">
      <h1 className="name">{resumeData.name}</h1>
      <h2 className="title">{resumeData.title}</h2>
      <ul className="contact-details">
        <li>Email: {resumeData.email}</li>
        <li>Phone: {resumeData.phone}</li>
        <li>Address: {resumeData.address}</li>
      </ul>

      <h3 className="section-title">Summary</h3>
      <p className="summary-text">{resumeData.summary}</p>

      <h3 className="section-title">Experience</h3>
      <ul className="experience-list">
        {resumeData.experience.map((exp, index) => (
          <li key={index} className="experience-item">
            <h4>{exp.position}</h4>
            <p>{exp.company}</p>
            <p>{exp.duration}</p>
            <ul className="experience-details">
              {exp.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h3 className="section-title">Education</h3>
      <ul className="education-list">
        {resumeData.education.map((edu, index) => (
          <li key={index} className="education-item">
            <h4>{edu.degree}</h4>
            <p>{edu.institution}</p>
            <p>{edu.duration}</p>
          </li>
        ))}
      </ul>

      <h3 className="section-title">Skills</h3>
      <ul className="skills-list">
        {resumeData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeTemplate;
