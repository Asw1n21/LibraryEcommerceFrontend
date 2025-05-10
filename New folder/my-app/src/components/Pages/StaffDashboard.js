import React from 'react';

function StaffDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Staff Dashboard</h1>
      <p style={styles.subtext}>Track orders, manage inventory, and assist customers.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f9f7f1',
    minHeight: '100vh',
  },
  heading: {
    color: '#2e5c3e',
    fontSize: '32px',
    marginBottom: '10px',
  },
  subtext: {
    fontSize: '16px',
    color: '#4f4f4f',
  },
};

export default StaffDashboard;
