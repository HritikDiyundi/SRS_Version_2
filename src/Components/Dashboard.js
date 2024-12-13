import React from "react";
import Header from "./Header";
import "./Dashboard.css";
import { useState } from "react";

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Total Applications");

  const menuItems = [
    { name: "Total Applications", icon: "📊" },
    { name: "Job Listings", icon: "📋" },
    { name: "Open Positions", icon: "📂" },
    { name: "Interview Schedule", icon: "📅" },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case "Total Applications":
        return <p> You have 150 applications in total!</p>;
      case "Job Listings":
        return <p> Here is your active job listings...</p>;
      case "Open Positions":
        return <p> Open Positions details..</p>;
      case "Interview Schedule":
        return <p> Your interview schedule details..</p>;
      default:
        return <p> Select an option from menu</p>;
    }
  };

  return (
    <div className="Dashboard-container">
      <Header />
      {/* <div className='content-container'>
      </div> */}
      <div className="dashboard">
        <aside className="sidebar">
          <div className="profile">
            <div className="avatar">👤</div>
            <h3>Luis</h3>
          </div>
          <nav>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`menu-item ${
                  activeMenu === item.name ? "active" : ""
                }`}
                onClick={() => setActiveMenu(item.name)}
              >
                <span className="icon">{item.icon}</span>
                {item.name}
              </div>
            ))}
          </nav>
        </aside>
        {/* {content} */}
        <div className="content-container">{renderContent()}</div>
      </div>

      {/* Main Dashboard */}
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <input
            type="text"
            placeholder="Search Jobs..."
            className="search-bar"
          />
        </header>

        <div className="cards">
          <div className="card">
            <h3>Total Applications</h3>
            <div className="chart">📈</div>
          </div>
          <div className="card">
            <h3>Application Scheduled</h3>
            <div className="chart">📊</div>
          </div>
          <div className="card">
            <h3>Job Positions</h3>
            <div className="chart">📉</div>
          </div>
        </div>
      </main>
    </div>
  );
}
