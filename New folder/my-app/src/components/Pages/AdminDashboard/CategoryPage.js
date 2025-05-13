import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../Styles/Category.css';

function CategoryPage() {
  const [category, setCategory] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();

  const handleAdd = () => {
    if (category.trim() === '') return;
    setCategoryList([...categoryList, category]);
    setCategory('');
  };

  return (
    <div className="category-container">
      <div className="category-box">
        <h2>Add New Category</h2>
        <div className="input-row">
          <input
            type="text"
            placeholder="Enter category name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button onClick={handleAdd}>Add Category</button>
        </div>

        <button className="back-btn" onClick={() => navigate('/admin/dashboard')}>
          ← Back to Dashboard
        </button>

        <h3>Categories Added:</h3>
        <ul className="category-list">
          {categoryList.map((cat, index) => (
            <li key={index}>{cat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryPage;
