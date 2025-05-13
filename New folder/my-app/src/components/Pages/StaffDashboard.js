import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaClock, FaSignOutAlt } from 'react-icons/fa';
import '../../Styles/StaffDashboard.css';

function StaffDashboard() {
  const [activeTab, setActiveTab] = useState('process');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'process':
        return <p>Here you can process new orders and update status.</p>;
      case 'pending':
        return <p>These are the orders still pending delivery or confirmation.</p>;
      default:
        return <p>Select an option from the sidebar.</p>;
    }
  };

  return (
    <div className="staff-dashboard">
      <div className="sidebar">
        <h2 className="sidebar-title">Staff Panel</h2>
        <div className="nav-group">
          <button className="nav-button" onClick={() => setActiveTab('process')}>
            <FaCheckCircle /> Process Orders
          </button>
          <button className="nav-button" onClick={() => setActiveTab('pending')}>
            <FaClock /> Pending Orders
          </button>
        </div>
        <button className="nav-button logout-button" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <div className="main">
        <h1 className="main-heading">
          {activeTab === 'process' && 'Process Orders'}
          {activeTab === 'pending' && 'Pending Orders'}
        </h1>
        <div className="main-content">{renderContent()}</div>
      </div>
    </div>
  );
}

export default StaffDashboard;
