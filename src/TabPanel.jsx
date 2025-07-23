import { useState } from "react";

function TabPanel({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tab-container">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""} `}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-panel ${activeTab === index ? "active" : ""} `}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabPanel;
