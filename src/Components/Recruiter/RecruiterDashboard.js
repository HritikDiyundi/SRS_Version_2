import React from "react";
// import Sidebar from "../components/Sidebar";
// import Header from "../Components/Header";
import RecruiterJobCard from "./RecruiterJobCard";
import "./RecruiterDashboard.css";

const RecruiterDashboard = () => {
  const jobs = [
    {
      title: "UI/UX Designer",
      type: "Full Time",
      status: "Active",
      applications: 798,
      days: "27 days remaining",
    },
    {
      title: "Senior UX Designer",
      type: "Internship",
      status: "Active",
      applications: 185,
      days: "8 days remaining",
    },
    {
      title: "Technical Support Specialist",
      type: "Part Time",
      status: "Active",
      applications: 556,
      days: "4 days remaining",
    },
    {
      title: "Junior Graphic Designer",
      type: "Full Time",
      status: "Active",
      applications: 583,
      days: "24 days remaining",
    },
    {
      title: "Front End Developer",
      type: "Full Time",
      status: "Expired",
      applications: 740,
      days: "Dec 7, 2019",
      expired: true,
    },
  ];

  return (
    // <div className="dashboard-container">
    <div className="main-content">
      {/* <Header /> */}
      <div className="overview">
        <p className="overview_greeting">Hello, Instagram</p>
        <p className="overview_greeting_sub">
          Here is your daily activities and applications
        </p>
        <div className="stats">
          <div className="stat-1">
            <div>
              <h3>589</h3>
              <span>Open Jobs</span>
            </div>
            <p className="stat_icon">👜</p>
          </div>
          <div className="stat-2">
            <div>
              <h3>2,517</h3>
              <span>Saved Candidates</span>
            </div>
            <p className="stat_icon">📟</p>
          </div>
        </div>
      </div>
      <div className="jobs">
        <h3>Recently Posted Jobs</h3>
        <table className="jobs-table">
          <thead>
            <tr className="jobs-table-titles">
              <th>Jobs</th>
              <th>Status</th>
              <th>Applications</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <RecruiterJobCard
                key={index}
                jobTitle={job.title}
                type={job.type}
                status={job.status}
                applications={job.applications}
                daysRemaining={job.days}
                expired={job.expired}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
