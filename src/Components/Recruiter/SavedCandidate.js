import React from "react";
import "./SavedCandidate.css";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBookmark } from "@fortawesome/free-solid-svg-icons";

const candidates = [
  {
    id: 1,
    name: "Guy Hawkins",
    role: "Technical Support Specialist",
    biography:
      "Guy is an experienced technical support specialist with a knack for resolving customer issues efficiently.",
    email: "guy.hawkins@example.com",
    phone: "+1-555-123-4561",
    location: "New York, NY",
    dateOfBirth: "1990-05-14",
    nationality: "American",
    experience: 5,
    education: "Bachelor's in Information Technology",
    coverLetter:
      "I thrive in fast-paced environments and have a passion for technology.",
    socialMedia: [
      { platform: "LinkedIn", link: "https://linkedin.com/in/guyhawkins" },
      { platform: "Twitter", link: "https://twitter.com/guyhawkins" },
    ],
  },
  {
    id: 2,
    name: "Jacob Jones",
    role: "Product Designer",
    biography:
      "Jacob is a creative product designer who excels in crafting innovative solutions.",
    email: "jacob.jones@example.com",
    phone: "+1-555-123-4562",
    location: "San Francisco, CA",
    dateOfBirth: "1988-11-23",
    nationality: "American",
    experience: 8,
    education: "Bachelor's in Design",
    coverLetter:
      "I am known for my attention to detail and a strong understanding of user needs.",
    socialMedia: [
      { platform: "LinkedIn", link: "https://linkedin.com/in/jacobjones" },
      { platform: "Behance", link: "https://behance.net/jacobjones" },
    ],
  },
  {
    id: 3,
    name: "Cameron Williamson",
    role: "Marketing Officer",
    biography:
      "Cameron is a results-oriented marketing officer with expertise in digital campaigns.",
    email: "cameron.williamson@example.com",
    phone: "+1-555-123-4563",
    location: "Chicago, IL",
    dateOfBirth: "1992-02-10",
    nationality: "Canadian",
    experience: 4,
    education: "Master's in Business Administration",
    coverLetter:
      "I enjoy working on projects that require strategic planning and creativity.",
    socialMedia: [
      {
        platform: "LinkedIn",
        link: "https://linkedin.com/in/cameronwilliamson",
      },
      { platform: "Facebook", link: "https://facebook.com/cameronwilliamson" },
    ],
  },
  {
    id: 4,
    name: "Robert Fox",
    role: "Marketing Manager",
    biography:
      "Robert is a seasoned marketing manager with over 8 years of experience.",
    email: "robert.fox@example.com",
    phone: "+1-555-123-4564",
    location: "Austin, TX",
    dateOfBirth: "1985-09-17",
    nationality: "British",
    experience: 10,
    education: "Bachelor's in Marketing",
    coverLetter: "I specialize in brand development and team leadership.",
    socialMedia: [
      { platform: "LinkedIn", link: "https://linkedin.com/in/robertfox" },
    ],
  },
  {
    id: 5,
    name: "Kathryn Murphy",
    role: "Junior Graphic Designer",
    biography:
      "Kathryn is a junior graphic designer with a fresh perspective and creative ideas.",
    email: "kathryn.murphy@example.com",
    phone: "+1-555-123-4565",
    location: "Seattle, WA",
    dateOfBirth: "1998-06-30",
    nationality: "American",
    experience: 1,
    education: "Bachelor's in Graphic Design",
    coverLetter: "I am eager to build my portfolio and contribute fresh ideas.",
    socialMedia: [
      { platform: "Behance", link: "https://behance.net/kathrynmurphy" },
      {
        platform: "Instagram",
        link: "https://instagram.com/kathrynmurphydesigns",
      },
    ],
  },
  {
    id: 6,
    name: "Darlene Robertson",
    role: "Visual Designer",
    biography:
      "Darlene is a talented visual designer with a passion for creating stunning visuals.",
    email: "darlene.robertson@example.com",
    phone: "+1-555-123-4566",
    location: "Los Angeles, CA",
    dateOfBirth: "1991-12-05",
    nationality: "Australian",
    experience: 6,
    education: "Bachelor's in Arts and Design",
    coverLetter: "I have experience in both digital and print media.",
    socialMedia: [
      { platform: "Dribbble", link: "https://dribbble.com/darlenedesigns" },
    ],
  },
  {
    id: 7,
    name: "Kristin Watson",
    role: "Senior UX Designer",
    biography:
      "Kristin is a senior UX designer with over a decade of experience.",
    email: "kristin.watson@example.com",
    phone: "+1-555-123-4567",
    location: "Boston, MA",
    dateOfBirth: "1982-03-14",
    nationality: "Canadian",
    experience: 12,
    education: "Master's in Human-Computer Interaction",
    coverLetter:
      "I specialize in crafting intuitive user interfaces and enhancing customer satisfaction.",
    socialMedia: [
      { platform: "LinkedIn", link: "https://linkedin.com/in/kristinwatson" },
    ],
  },
  {
    id: 8,
    name: "Jenny Wilson",
    role: "Interaction Designer",
    biography:
      "Jenny is an innovative interaction designer focused on creating seamless user experiences.",
    email: "jenny.wilson@example.com",
    phone: "+1-555-123-4568",
    location: "Portland, OR",
    dateOfBirth: "1987-08-22",
    nationality: "American",
    experience: 7,
    education: "Bachelor's in Interaction Design",
    coverLetter: "I enjoy solving complex design challenges.",
    socialMedia: [
      { platform: "LinkedIn", link: "https://linkedin.com/in/jennywilson" },
      { platform: "Twitter", link: "https://twitter.com/jennywilsondesign" },
    ],
  },
  {
    id: 9,
    name: "Marvin McKinney",
    role: "Networking Engineer",
    biography:
      "Marvin is a skilled networking engineer with expertise in infrastructure management.",
    email: "marvin.mckinney@example.com",
    phone: "+1-555-123-4569",
    location: "Denver, CO",
    dateOfBirth: "1989-01-09",
    nationality: "American",
    experience: 8,
    education: "Bachelor's in Computer Science",
    coverLetter:
      "I have a proven track record of maintaining secure and efficient networks.",
    socialMedia: [],
  },
  {
    id: 10,
    name: "Theresa Webb",
    role: "Software Engineer",
    biography:
      "Theresa is a proficient software engineer with a deep knowledge of full-stack development.",
    email: "theresa.webb@example.com",
    phone: "+1-555-123-4570",
    location: "Miami, FL",
    dateOfBirth: "1993-07-15",
    nationality: "American",
    experience: 5,
    education: "Master's in Computer Science",
    coverLetter:
      "I am passionate about building scalable and robust applications.",
    socialMedia: [
      { platform: "GitHub", link: "https://github.com/theresawebb" },
      { platform: "LinkedIn", link: "https://linkedin.com/in/theresawebb" },
    ],
  },
];

const SavedCandidate = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [dropdownVisibility, setDropdownVisibility] = useState({});

  const handleCandidateClick = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const closeOverlay = () => {
    setSelectedCandidate(null);
  };

  const toggleDropdown = (id) => {
    setDropdownVisibility((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currentDate = new Date();
  const dynamicDate = new Date(currentDate);
  dynamicDate.setDate(currentDate.getDate() + 90);
  const formattedDate = dynamicDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="saved-candidates-container">
      <header className="header">
        <h3 className="saved-candidates-title">Saved Candidates</h3>
        <p className="saved-candidates-until">
          All of the candidates are visible until <span>{formattedDate}</span>.
        </p>
      </header>
      <div className="candidate-list">
        {candidates.map((candidate) => (
          <div className="candidate-container" key={candidate.id}>
            <div
              className="candidate"
              onClick={() => handleCandidateClick(candidate)}
            >
              <div className="profile-picture"></div>
              <div className="candidate-details">
                <h3>{candidate.name}</h3>
                <p>{candidate.role}</p>
              </div>
              <div className="actions">
                <button className="bookmark">
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="custom-bookmark-icon"
                  />
                </button>
                <button className="view-profile">View Profile &rarr;</button>
                <div className="more-options">
                  <button
                    className="menu-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(candidate.id);
                    }}
                  >
                    ⋮
                  </button>

                  {dropdownVisibility[candidate.id] && (
                    <div className="dropdown">
                      <button>Send Email</button>
                      <button>Download CV</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCandidate && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-button" onClick={closeOverlay}>
              &times;
            </button>
            <h2>{selectedCandidate.name}</h2>
            <p>{selectedCandidate.role}</p>

            <h3>Biography</h3>
            <p>{selectedCandidate.biography}</p>

            <h3>Cover Letter</h3>
            <p>{selectedCandidate.coverLetter}</p>

            <section className="additional-info">
              <div className="info-group">
                <h4>Date of Birth</h4>
                <p>{selectedCandidate.dateOfBirth}</p>
              </div>
              <div className="info-group">
                <h4>Nationality</h4>
                <p>{selectedCandidate.nationality}</p>
              </div>
              <div className="info-group">
                <h4>Experience</h4>
                <p>{selectedCandidate.experience} Years</p>
              </div>
              <div className="info-group">
                <h4>Education</h4>
                <p>{selectedCandidate.education}</p>
              </div>
            </section>

            <h3>Contact Information</h3>
            <ul>
              <li>Website: {selectedCandidate.website || "Not provided"}</li>
              <li>Location: {selectedCandidate.location}</li>
              <li>Phone: {selectedCandidate.phone}</li>
              <li>Email: {selectedCandidate.email}</li>
            </ul>

            {selectedCandidate.socialMedia?.length > 0 && (
              <div className="social-media">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {selectedCandidate.socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`icon ${social.platform}`}
                    >
                      {social.platform}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedCandidate;
