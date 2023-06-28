import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Portfolio.css';

function ProfessionalSummary() {
  return (
    <div className="section">
      <h2>Professional Summary</h2>
      <p>
        Dedicated and efficient full stack developer with 5+ years of experience in building scalable web applications. Possesses excellent knowledge in cutting-edge web technologies including Python-Django, React JS, Docker, Restful API, Ajax, jQuery, PostgreSQL, JSON, HTML, CSS, XML, GitHub, AWS, and Unit testing. Extensive experience in all phases of the product development cycle using Agile methodology. Self-motivated individual who thrives to perform best and ensure quality work while working in a collaborative environment.
      </p>
    </div>
  );
}

function TechnicalSkills() {
  const skills = [
    'Web Development: Python, HTML5, CSS3, JavaScript, JSON, Ajax, jQuery, XML, Webpack, Bootstrap4',
    'Programming skills: Django, React JS, WordPress',
    'Database: PostgreSQL, MongoDB, SQLite, Oracle, MYSQL',
    'Version Control: Confluence Jira-Kanban, GitHub',
    'Tools: Slack, Postman, CircleCI, Sentry, VS Code, Navicat Premium, BrowserStack',
    'DevOps: AWS, Docker',
  ];

  return (
    <div className="section">
      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      company: 'Ford Motor Company - Waterloo, ON',
      duration: 'Dec 2021 - June 2023',
      role: 'Software Tools Developer',
      responsibilities: [
        'Building, designing, and maintaining REST APIs using Django Rest framework',
        'Refactored APIs with CTE implementation for improved performance',
        // Add more responsibilities as needed
      ],
    },
    // Add more experience objects as needed
  ];

  return (
    <div className="section">
      <h2>Experience</h2>
      <TransitionGroup>
        {experiences.map((experience, index) => (
          <CSSTransition key={index} classNames="fade" timeout={500}>
            <div className="experience-item">
              <h3>{experience.company}</h3>
              <p>{experience.duration}</p>
              <h4>{experience.role}</h4>
              <ul>
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

function Education() {
  return (
    <div className="section">
      <h2>Education</h2>
      <h3>Master of Engineering (Computer & Electrical Engg.)</h3>
      <p>Sept 2017 - Dec 2018</p>
      <p>University of Windsor - Windsor, ON</p>
    </div>
  );
}

function Certifications() {
  const certifications = [
    'Application Security and Secure coding training in Python Django – Code bashing',
    'Certified Solution Architect Associate(AWS) – A Cloud Guru',
    'IBM Cloud Essentials',
  ];

  return (
    <div className="section">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((certification, index) => (
          <li key={index}>{certification}</li>
        ))}
      </ul>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="portfolio">
      <ProfessionalSummary />
      <TechnicalSkills />
      <Experience />
      <Education />
      <Certifications />
    </div>
  );
}

export default Portfolio;