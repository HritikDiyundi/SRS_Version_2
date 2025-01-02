import React, { useState } from "react";
import "./RecruiterJobCard.css";

const RecruiterJobCard = ({
  jobTitle,
  type,
  status,
  applications,
  daysRemaining,
  expired,
}) => {
  // State for dropdown visibility
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <tr>
      {/* Job Details */}
      <td>
        <div className="Employe-job-details">
          <p className="Employe_job_title">{jobTitle}</p>
          <span className="Employe_job_dur">
            {type} • {daysRemaining}
          </span>
        </div>
      </td>

      {/* Job Status */}
      <td className={`status ${expired ? "expired" : "active"}`}>{status}</td>

      {/* Applications Count */}
      <td>{applications} Applications</td>

      {/* Actions */}
      <td>
        <div className="more-options">
          <button className="view-applications">View Applications</button>

          {/* Menu Button */}
          <button className="menu-button" onClick={toggleDropdown}>
            ⋮
          </button>

          {/* Dropdown Menu */}
          {isDropdownVisible && (
            <div className="dropdown">
              <button>Send Email</button>
              <button>Download CV</button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default RecruiterJobCard;
