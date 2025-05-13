import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Styles/AddBookPage.css";
import { FaTags } from 'react-icons/fa';
import { FaUsers, FaBook, FaBullhorn, FaSignOutAlt } from "react-icons/fa";

function AddBookPage() {
  const initialState = {
    title: '',
    author: '',
    genre: '',
    publisher: '',
    language: '',
    format: '',
    isbn: '',
    availability: 'InStock',
    stockQuantity: '',
    publicationDate: '',
    description: '',
    price: '',
    discountPrice: '',
    isOnSale: false,
    categoryId: '',
    bookImage: null
  };

  const [form, setForm] = useState(initialState);
  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setForm((prev) => ({ ...prev, bookImage: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookList((prev) => [...prev, form]);
    setForm(initialState);
    alert("Book added (mock only)");
  };

  const handleDelete = (index) => {
    const updated = [...bookList];
    updated.splice(index, 1);
    setBookList(updated);
  };

  const handleEdit = (index) => {
    setForm(bookList[index]);
    handleDelete(index);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <div className="nav-group">
          <button className="nav-button" onClick={() => navigate('/admin/dashboard')}>
            <FaUsers /> Manage Users
          </button>
              <button className="nav-button" onClick={() => navigate('/admin/categories')}>
            <FaTags /> Manage Categories
          </button>
          <button className="nav-button" onClick={() => navigate('/admin/add-book')}>
            <FaBook /> Add Book
          </button>
          <button className="nav-button">
            <FaBullhorn /> Add Announcement
          </button>
          <button className="nav-button">
            <FaBullhorn /> Ordered Books
          </button>
          <button className="nav-button logout-button" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      <div className="main">
        <h1 className="main-heading">Add New Book</h1>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-column">
            <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
            <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
            <input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} required />
            <input name="publisher" placeholder="Publisher" value={form.publisher} onChange={handleChange} required />
            <input name="language" placeholder="Language" value={form.language} onChange={handleChange} required />
            <input name="format" placeholder="Format" value={form.format} onChange={handleChange} required />
          </div>
          <div className="form-column">
            <input name="isbn" placeholder="ISBN" value={form.isbn} onChange={handleChange} required />
            <select name="availability" value={form.availability} onChange={handleChange}>
              <option value="InStock">In Stock</option>
              <option value="LibraryOnly">Library Only</option>
            </select>
            <input type="number" name="stockQuantity" placeholder="Stock Quantity" value={form.stockQuantity} onChange={handleChange} required />
            <input type="date" name="publicationDate" value={form.publicationDate} onChange={handleChange} required />
            <input name="categoryId" placeholder="Category ID" value={form.categoryId} onChange={handleChange} required />
            <input type="file" onChange={handleImageChange} />
          </div>
          <div className="form-column">
            <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
            <input type="number" name="discountPrice" placeholder="Discount Price" value={form.discountPrice} onChange={handleChange} />
            <label className="checkbox">
              <input type="checkbox" name="isOnSale" checked={form.isOnSale} onChange={(e) => setForm({ ...form, isOnSale: e.target.checked })} />
              On Sale
            </label>
            <button type="submit" className="submit-btn">Add Book</button>
          </div>
        </form>

        <h2 className="section-title">Books Added</h2>
        <div className="card-list">
          {bookList.map((book, index) => (
            <div className="card" key={index}>
              <div className="card-image-section">
                {book.bookImage && (
                  <img src={URL.createObjectURL(book.bookImage)} alt="Book" className="card-image" />
                )}
              </div>
              <div className="card-grid">
                <div><strong>Title:</strong> {book.title}</div>
                <div><strong>Author:</strong> {book.author}</div>
                <div><strong>Genre:</strong> {book.genre}</div>
                <div><strong>Language:</strong> {book.language}</div>
                <div><strong>Publisher:</strong> {book.publisher}</div>
                <div><strong>Format:</strong> {book.format}</div>
                <div><strong>ISBN:</strong> {book.isbn}</div>
                <div><strong>Availability:</strong> {book.availability}</div>
                <div><strong>Stock:</strong> {book.stockQuantity}</div>
                <div><strong>Publication Date:</strong> {book.publicationDate}</div>
                <div><strong>Category ID:</strong> {book.categoryId}</div>
                <div><strong>Price:</strong> ₹{book.price}</div>
                <div><strong>Discount:</strong> ₹{book.discountPrice}</div>
                <div><strong>On Sale:</strong> {book.isOnSale ? "Yes" : "No"}</div>
                <div className="description"><strong>Description:</strong> {book.description}</div>
              </div>
              <div className="card-actions">
                <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddBookPage;
