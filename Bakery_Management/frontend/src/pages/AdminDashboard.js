import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <Link to="/admin/add-product" className="admin-button">Add New Product</Link>
      <Link to="/admin/manage-products" className="admin-button">Manage Products</Link>
    </div>
  );
};

export default AdminDashboard;
