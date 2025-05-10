import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaBook, FaBullhorn, FaSignOutAlt, FaClipboardList } from 'react-icons/fa';
import '../../../Styles/AdminDashboard.css';

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('users');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'users':
        return <p>Here you can view all registered users.</p>;
      case 'announcements':
        return <p>Post announcements to the homepage from here.</p>;
      case 'orders':
        return <p>Here are the books that have been ordered.</p>;
      default:
        return <p>Select a section from the sidebar.</p>;
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>

        <div className="nav-group">
          <button className="nav-button" onClick={() => setActiveSection('users')}>
            <FaUsers /> Manage Users
          </button>
          <button className="nav-button" onClick={() => navigate('/admin/add-book')}>
            <FaBook /> Add Book
          </button>
          <button className="nav-button" onClick={() => setActiveSection('orders')}>
            <FaClipboardList /> Ordered Books
          </button>
          <button className="nav-button" onClick={() => setActiveSection('announcements')}>
            <FaBullhorn /> Add Announcement
          </button>
        </div>

        <button className="nav-button logout-button" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <div className="main">
        <h1 className="main-heading">
          {activeSection === 'users' && 'User Management'}
          {activeSection === 'orders' && 'Ordered Books'}
          {activeSection === 'announcements' && 'Announcements'}
        </h1>
        <div className="main-content">{renderSection()}</div>
      </div>
    </div>
  );
}

export default AdminDashboard;
