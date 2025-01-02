import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import "./JobPost.css";

const JobPost = ({ addJob }) => {
  console.log("before", addJob);

  const [jobTitle, setJobTitle] = useState("");
  const [tags, setTags] = useState("");
  const [jobRole, setJobRole] = useState("developer");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [salaryType, setSalaryType] = useState("monthly");
  const [education, setEducation] = useState("bachelors");
  const [experience, setExperience] = useState("0-1");
  const [jobType, setJobType] = useState("full-time");
  const [vacancies, setVacancies] = useState("");
  const [jobLevel, setJobLevel] = useState("entry");
  const [expirationDate, setExpirationDate] = useState("");
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a job object with all form data
    const newJob = {
      jobTitle,
      tags,
      jobRole,
      minSalary,
      maxSalary,
      salaryType,
      education,
      experience,
      jobType,
      vacancies,
      jobLevel,
      expirationDate,
      description,
      responsibilities,
    };

    // Call the addJob function to save the job data
    addJob(newJob);
    console.log("NewJobs", newJob);

    // Reset form fields
    setJobTitle("");
    setTags("");
    setJobRole("developer");
    setMinSalary("");
    setMaxSalary("");
    setSalaryType("monthly");
    setEducation("bachelors");
    setExperience("0-1");
    setJobType("full-time");
    setVacancies("");
    setJobLevel("entry");
    setExpirationDate("");
    setDescription("");
    setResponsibilities("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Job Title Section */}
      <div className="title_tags">
        <div className="title_tage_title">
          <label>
            Job Title:
            <input
              type="text"
              name="jobTitle"
              placeholder="Enter job title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="title_tags_role">
          <label className="tags">
            Tags:
            <input
              type="text"
              name="tags"
              placeholder="Add tags separated by commas"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </label>
          <label className="job-role">
            Job Role:
            <select
              name="jobRole"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
            >
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </select>
          </label>
        </div>
      </div>

      {/* Salary Section */}
      <h3>Salary</h3>
      <div className="salary-row">
        <div className="salary-input">
          <label>
            Min Salary:
            <div className="input-group">
              <input
                type="number"
                name="minSalary"
                placeholder="Minimum salary"
                value={minSalary}
                onChange={(e) => setMinSalary(e.target.value)}
              />
              <select name="minCurrency">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
              </select>
            </div>
          </label>
        </div>
        <div className="salary-input">
          <label>
            Max Salary:
            <div className="input-group">
              <input
                type="number"
                name="maxSalary"
                placeholder="Maximum salary"
                value={maxSalary}
                onChange={(e) => setMaxSalary(e.target.value)}
              />
              <select name="maxCurrency">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
              </select>
            </div>
          </label>
        </div>
        <label className="salary-type">
          Salary Type:
          <select
            name="salaryType"
            value={salaryType}
            onChange={(e) => setSalaryType(e.target.value)}
          >
            <option value="monthly">Monthly</option>
            <option value="hourly">Hourly</option>
            <option value="yearly">Yearly</option>
          </select>
        </label>
      </div>

      {/* Advanced Information Section */}
      <h3>Advanced Information</h3>
      <div className="advanced-info">
        <div className="row">
          <label>
            Education:
            <select
              name="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            >
              <option value="bachelors">Bachelors</option>
              <option value="masters">Masters</option>
              <option value="phd">PhD</option>
            </select>
          </label>
          <label>
            Experience:
            <select
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="0-1">0-1 Years</option>
              <option value="2-5">2-5 Years</option>
              <option value="5+">5+ Years</option>
            </select>
          </label>
          <label>
            Job Type:
            <select
              name="jobType"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="freelance">Freelance</option>
            </select>
          </label>
        </div>
        <div className="row">
          <label>
            Vacancies:
            <input
              type="number"
              name="vacancies"
              placeholder="Number of vacancies"
              value={vacancies}
              onChange={(e) => setVacancies(e.target.value)}
            />
          </label>
          <label>
            Job Level:
            <select
              name="jobLevel"
              value={jobLevel}
              onChange={(e) => setJobLevel(e.target.value)}
            >
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
            </select>
          </label>

          <label>
            Expiration Date:
            <input
              type="date"
              name="expirationDate"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
          </label>
        </div>
      </div>

      {/* Description & Responsibilities Section */}
      <h3>Description & Responsibilities</h3>
      <label>
        Description:
        {/* <ReactQuill value={description} onChange={setDescription} /> */}
      </label>
      <label>
        Responsibilities:
        {/* <ReactQuill value={responsibilities} onChange={setResponsibilities} /> */}
      </label>

      {/* Submit Button */}
      <button type="submit">Submit Job Post</button>
    </form>
  );
};

export default JobPost;
