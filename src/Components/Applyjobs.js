
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Applyjobs.css";
import Header from "./Header";

const jobsData = [
  {
    jobName: "Software Engineer",
    companyName: "Abcd Tech Private Limited",
    location: "Bangalore, India",
    ctc: "8-12 LPA",
    exp:"2 years",
    industryType:"IT Service & Consulting",
    employmentType: "Full-Time",
    jobDescription:
      "Design and develop scalable web and mobile applications using modern frameworks. Collaborate with cross-functional teams to meet project goals. Maintain high-quality code standards, conduct code reviews, and debug complex issues. Create and implement efficient algorithms and data structures.",
    jobshort:
      "Responsible for developing and maintaining web applications using React and Nodejs. Design and develop scalable web and mobile applications. Collaborate with cross-functional teams to meet project goals.",
    jobRating: 4.5,
    roleCategory: "IT/Software Development",
    educationRequired: "B.E./B.Tech in Computer Science or equivalent",
    jobPostedOn: "2024-12-10",
    openings: 5,
    totalApplications: 120,
  },
  {
    jobName: "Data Analyst",
    companyName: "Abcd Tech Private Limited",
    location: "Hyderabad, India",
    ctc: "8-12 LPA",
    exp:"4-6 years",
    industryType:"IT Service & Consulting",
    employmentType: "Full-Time",
    jobDescription:
      "Analyze and interpret complex data to generate actionable insights for business decisions. Work with stakeholders to define data requirements and create visualizations using tools like Power BI and Tableau. Automate data workflows and ensure data integrity.",
    jobshort:
      "Analyze large datasets to identify trends and generate actionable insights. Work with stakeholders to define data requirements. Create visualizations using tools like Power BI and Tableau.",
    jobRating: 4.2,
    roleCategory: "Analytics",
    educationRequired: "B.Sc./M.Sc. in Statistics, Mathematics, or related fields",
    jobPostedOn: "2024-12-08",
    openings: 3,
    totalApplications: 85,
  },
  {
    jobName: "Digital Marketing Specialist",
    companyName: "Abcd Tech Private Limited",
    exp:"5-6 years",
    location: "Mumbai, India",
    industryType:"IT Service & Consulting",
    ctc: "6-8 LPA",
    employmentType: "Full-Time",
    jobDescription:
      "Develop and execute digital marketing campaigns across multiple platforms. Optimize SEO strategies and analyze campaign performance metrics. Enhance brand visibility by managing social media accounts and paid advertising.",
    jobshort:
      "Develop and execute digital marketing strategies to enhance brand visibility. Optimize SEO strategies and analyze campaign performance metrics. Enhance brand visibility by managing social media accounts.",
    jobRating: 4.0,
    roleCategory: "Marketing",
    educationRequired: "MBA in Marketing or equivalent",
    jobPostedOn: "2024-12-05",
    openings: 2,
    totalApplications: 60,
  },
  {
    jobName: "HR Manager",
    companyName: "Abcd Tech Private Limited",
    industryType:"IT Service & Consulting",
    exp:"6 years",
    location: "Delhi, India",
    ctc: "10-12 LPA",
    employmentType: "Full-Time",
    jobDescription:
      "Oversee recruitment processes, employee engagement, and performance management. Implement HR policies that align with company goals. Foster a collaborative work environment and address employee concerns effectively.",
    jobshort:
      "Manage the end-to-end recruitment process and employee engagement programs. Oversee recruitment processes and performance management. Foster a collaborative work environment.",
    jobRating: 4.3,
    roleCategory: "Human Resources",
    educationRequired: "MBA in HR or equivalent",
    jobPostedOn: "2024-12-07",
    openings: 1,
    totalApplications: 45,
  },
  {
    jobName: "UI/UX Designer",
    companyName: "Abcd Tech Private Limited",
    industryType:"IT Service & Consulting",
    exp:"2 years",
    location: "Remote",
    ctc: "9-15 LPA",
    employmentType: "Full-Time",
    jobDescription:
      "Design intuitive user interfaces and experiences for web and mobile applications. Create wireframes, prototypes, and mockups to communicate design ideas. Collaborate with developers to ensure seamless implementation of designs.",
    jobshort:
      "Design intuitive and user-friendly interfaces for web and mobile applications. Create wireframes, prototypes, and mockups. Collaborate with developers to ensure seamless implementation of designs.",
    jobRating: 4.6,
    roleCategory: "Design",
    educationRequired: "B.Des. in Graphic Design or equivalent",
    jobPostedOn: "2024-12-09",
    openings: 4,
    totalApplications: 95,
  },
  {
    jobName: "UI/UX Designer",
    companyName: "Abcd Tech Private Limited",
    industryType:"IT Service & Consulting",
    exp:"2 years",
    location: "Remote",
    ctc: "9-15 LPA",
    employmentType: "Full-Time",
    jobDescription:
      "Design intuitive user interfaces and experiences for web and mobile applications. Create wireframes, prototypes, and mockups to communicate design ideas. Collaborate with developers to ensure seamless implementation of designs.",
    jobshort:
      "Design intuitive and user-friendly interfaces for web and mobile applications. Create wireframes, prototypes, and mockups. Collaborate with developers to ensure seamless implementation of designs.",
    jobRating: 4.6,
    roleCategory: "Design",
    educationRequired: "B.Des. in Graphic Design or equivalent",
    jobPostedOn: "2024-12-09",
    openings: 4,
    totalApplications: 95,
  },
  {
    jobName: "UI/UX Designer",
    companyName: "Abcd Tech Private Limited",
    industryType:"IT Service & Consulting",
    exp:"2 years",
    location: "Remote",
    ctc: "9-15 LPA",
    employmentType: "Full-Time",
    jobDescription:
      "Design intuitive user interfaces and experiences for web and mobile applications. Create wireframes, prototypes, and mockups to communicate design ideas. Collaborate with developers to ensure seamless implementation of designs.",
    jobshort:
      "Design intuitive and user-friendly interfaces for web and mobile applications. Create wireframes, prototypes, and mockups. Collaborate with developers to ensure seamless implementation of designs.",
    jobRating: 4.6,
    roleCategory: "Design",
    educationRequired: "B.Des. in Graphic Design or equivalent",
    jobPostedOn: "2024-12-09",
    openings: 4,
    totalApplications: 95,
  },
  {
    jobName: "UI/UX Designer",
    companyName: "Abcd Tech Private Limited",
    industryType:"IT Service & Consulting",
    exp:"2 years",
    location: "Remote",
    ctc: "9-15 LPA",
    employmentType: "Full-Time",
    jobDescription:
      "Design intuitive user interfaces and experiences for web and mobile applications. Create wireframes, prototypes, and mockups to communicate design ideas. Collaborate with developers to ensure seamless implementation of designs.",
    jobshort:
      "Design intuitive and user-friendly interfaces for web and mobile applications. Create wireframes, prototypes, and mockups. Collaborate with developers to ensure seamless implementation of designs.",
    jobRating: 4.6,
    roleCategory: "Design",
    educationRequired: "B.Des. in Graphic Design or equivalent",
    jobPostedOn: "2024-12-09",
    openings: 4,
    totalApplications: 95,
  },
  {
    jobName: "UI/UX Designer",
    companyName: "Abcd Tech Private Limited",
    industryType:"IT Service & Consulting",
    exp:"2 years",
    location: "Remote",
    ctc: "9-15 LPA",
    employmentType: "Full-Time",
    jobDescription:
      "Design intuitive user interfaces and experiences for web and mobile applications. Create wireframes, prototypes, and mockups to communicate design ideas. Collaborate with developers to ensure seamless implementation of designs.",
    jobshort:
      "Design intuitive and user-friendly interfaces for web and mobile applications. Create wireframes, prototypes, and mockups. Collaborate with developers to ensure seamless implementation of designs.",
    jobRating: 4.6,
    roleCategory: "Design",
    educationRequired: "B.Des. in Graphic Design or equivalent",
    jobPostedOn: "2024-12-09",
    openings: 4,
    totalApplications: 95,
  },
  {
    jobName: "UI/UX Designer",
    companyName: "Abcd Tech Private Limited",
    industryType:"IT Service & Consulting",
    exp:"2 years",
    location: "Remote",
    ctc: "9-15 LPA",
    employmentType: "Full-Time",
    jobDescription:
      "Design intuitive user interfaces and experiences for web and mobile applications. Create wireframes, prototypes, and mockups to communicate design ideas. Collaborate with developers to ensure seamless implementation of designs.",
    jobshort:
      "Design intuitive and user-friendly interfaces for web and mobile applications. Create wireframes, prototypes, and mockups. Collaborate with developers to ensure seamless implementation of designs.",
    jobRating: 4.6,
    roleCategory: "Design",
    educationRequired: "B.Des. in Graphic Design or equivalent",
    jobPostedOn: "2024-12-09",
    openings: 4,
    totalApplications: 95,
  },
  
  {
    jobName: "UI/UX Designer",
    companyName: "Abcd Tech Private Limited",
    industryType:"IT Service & Consulting",
    exp:"2 years",
    location: "Remote",
    ctc: "9-15 LPA",
    employmentType: "Full-Time",
    jobDescription:
      "Design intuitive user interfaces and experiences for web and mobile applications. Create wireframes, prototypes, and mockups to communicate design ideas. Collaborate with developers to ensure seamless implementation of designs.",
    jobshort:
      "Design intuitive and user-friendly interfaces for web and mobile applications. Create wireframes, prototypes, and mockups. Collaborate with developers to ensure seamless implementation of designs.",
    jobRating: 4.6,
    roleCategory: "Design",
    educationRequired: "B.Des. in Graphic Design or equivalent",
    jobPostedOn: "2024-12-09",
    openings: 4,
    totalApplications: 95,
  },
  {
    jobName: "UI/UX Designer",
    companyName: "Abcd Tech Private Limited",
    industryType:"IT Service & Consulting",
    exp:"2 years",
    location: "Remote",
    ctc: "9-15 LPA",
    employmentType: "Full-Time",
    jobDescription:
      "Design intuitive user interfaces and experiences for web and mobile applications. Create wireframes, prototypes, and mockups to communicate design ideas. Collaborate with developers to ensure seamless implementation of designs.",
    jobshort:
      "Design intuitive and user-friendly interfaces for web and mobile applications. Create wireframes, prototypes, and mockups. Collaborate with developers to ensure seamless implementation of designs.",
    jobRating: 4.6,
    roleCategory: "Design",
    educationRequired: "B.Des. in Graphic Design or equivalent",
    jobPostedOn: "2024-12-09",
    openings: 4,
    totalApplications: 95,
  }
];
 
export default function ViewJobs() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobDetailsPosition, setJobDetailsPosition] = useState(null);
  const jobCardRefs = useRef({}); 
 
  const handleJobSelect = (job, index, event) => {
    const cardPosition = event.currentTarget.getBoundingClientRect();
    const containerScrollTop = document.documentElement.scrollTop;
 
    
    const cardElement = jobCardRefs.current[index];
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
 
    
    setJobDetailsPosition({
      top: cardPosition.top + containerScrollTop,
      left: cardPosition.right + 10, 
    });
    setSelectedJob(job);
  };
 
  const closeJobDetails = () => {
    setSelectedJob(null);
  };
 
  return (
    <div className="view-jobs-container">
      <Header />
      <div className="content">
        <main className="main-content">
          <section className="job-listings">
            {jobsData.map((job, index) => (
              <div
                key={index}
                className="job-card"
                ref={(el) => (jobCardRefs.current[index] = el)} 
                onClick={(e) => handleJobSelect(job, index, e)}
              >
                <h3>{job.jobName}</h3>
                <div className="joblist-location">
                  <p>{job.companyName}</p>
                  <p>{job.location}</p>
                  <p>{job.exp}</p>
                </div>
                <div className="joblist-brick">
                  <span>{job.ctc}</span>
                  <span>{job.employmentType}</span>
                </div>
                <div className="jobshort-bullet">
                  <strong>Responsibilities:</strong>
                  <ul>
                    {job.jobshort
                      .split(".")
                      .map(
                        (point, idx) =>
                          point.trim() && <li key={idx}>{point.trim()}</li>
                      )}
                  </ul>
                </div>
              </div>
            ))}
          </section>
          {selectedJob && (
            <section
              className="job-details"
              style={{
                position: "absolute",
                top: jobDetailsPosition.top,
                left: jobDetailsPosition.left,
                zIndex: 10, 
              }}
            >
              <button className="close-button" onClick={closeJobDetails}>
                ✖
              </button>
              <div className="jobdetails-con">
                <h2>{selectedJob.jobName}</h2>
                <p className="jobdetails-margin">
                  <strong>Location:</strong> {selectedJob.location}
                </p>
                <p>
                  <strong>Company Name:</strong> {selectedJob.companyName}
                  &nbsp; &nbsp; &nbsp;
                  {selectedJob.jobRating}&nbsp;
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#FFD43B" }}
                  />
                </p>
                <p>
                  <strong>CTC:</strong> {selectedJob.ctc}
                </p>
                <p>
                  <strong>Experience:</strong> {selectedJob.exp}
                </p>
                <button className="apply-btn">Apply Now</button>
                <button className="apply-btn">Save</button>
                <p className="mild">
                  <span>Posted On: {selectedJob.jobPostedOn}</span>
                  <span>Openings: {selectedJob.openings}</span>
                  <span>Applications: {selectedJob.totalApplications}</span>
                </p>
                <p className="jobdesc">
                  <strong>Job Description:</strong>
                  <br />
                  {selectedJob.jobDescription}
                </p>
                <p className="bottom-space">
                  <strong>Role:</strong> {selectedJob.jobName}
                </p>
                <p>
                  <strong>Employment Type:</strong> {selectedJob.employmentType}
                </p>
                <p>
                  <strong>Industry Type:</strong> {selectedJob.industryType}
                </p>
                <p>
                  <strong>Role Category:</strong> {selectedJob.roleCategory}
                </p>
                <p>
                  <strong>Education Required:</strong>{" "}
                  {selectedJob.educationRequired}
                </p>
                <div className="center-buttons">
                  <button className="apply-btn">Apply</button>
                  <button className="apply-btn">Report</button>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
 