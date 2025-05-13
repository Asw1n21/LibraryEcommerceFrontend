// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/Login';
import SignupPage from './components/Pages/SignupPage';
import AdminDashboard from './components/Pages/AdminDashboard/AdminDashboard';
import AddBookPage from './components/Pages/AdminDashboard/AddBookPage';
import CategoryPage from './components/Pages/AdminDashboard/CategoryPage';
import StaffDashboard from './components/Pages/StaffDashboard';
import CartPage from './components/Pages/CartPage';
import BookmarkPage from './components/Pages/BookmarkPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-book" element={<AddBookPage />} />
        <Route path="/admin/categories" element={<CategoryPage />} />
        <Route path="/staff/dashboard" element={<StaffDashboard />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/bookmarks" element={<BookmarkPage />} />
      </Routes>
    </Router>
  );
}

export default App;
