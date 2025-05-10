import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  RiBookmarkLine,
  RiShoppingCartLine,
  RiUserLine,
} from 'react-icons/ri';
import book1 from '../../images/book1.jpg';
import book2 from '../../images/book2.jpg';
import book3 from '../../images/book3.jpg';
import book4 from '../../images/book4.jpg';

import announcement1 from '../../images/announcement1.jpg';
import announcement2 from '../../images/announcement2.jpg';
import announcement3 from '../../images/announcement3.jpg';

import '../../Styles/Home.css';

import { useNavigate } from 'react-router-dom';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomePage() {
  const [activeTab, setActiveTab] = useState('All Books');
  const [sliderIndex, setSliderIndex] = useState(0);
  const navigate = useNavigate();

  const tabs = [
    'All Books',
    'Bestsellers',
    'Award Winners',
    'New Releases',
    'New Arrivals',
    'Coming Soon',
    'Deals',
  ];

  const announcements = [
    { text: 'Big Sale this weekend!', image: announcement1 },
    { text: 'New Arrivals just dropped!', image: announcement2 },
    { text: 'Don’t miss our Bestsellers!', image: announcement3 },
  ];

  const books = [
    {
      id: 1,
      title: 'Had That Same Dream Again',
      price: 640,
      discountPrice: 449,
      image: book1,
      availability: 'In Stock',
      onSale: true,
      categories: ['Award Winners', 'Deals'],
    },
    {
      id: 2,
      title: 'November 9',
      price: 800,
      discountPrice: 299,
      image: book2,
      availability: 'Library Only',
      onSale: true,
      categories: ['Bestsellers', 'Deals'],
    },
    {
      id: 3,
      title: 'Heaven Official’s Blessing',
      price: 3020,
      discountPrice: null,
      image: book3,
      availability: 'In Stock',
      onSale: false,
      categories: ['Award Winners'],
    },
    {
      id: 4,
      title: 'Ugly Love',
      price: 800,
      discountPrice: 359,
      image: book4,
      availability: 'Library Only',
      onSale: true,
      categories: ['New Arrivals', 'Deals'],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  const filteredBooks =
    activeTab === 'All Books'
      ? books
      : books.filter((book) => book.categories.includes(activeTab));

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">BookNest</div>
        <input
          className="search-input"
          placeholder="Search by title, ISBN, or description..."
        />
        <div className="nav-icons">
          <Link to="/bookmarks"><RiBookmarkLine /></Link>
          <Link to="/login"><RiUserLine /> Login</Link>
          <Link to="/signup"><RiUserLine /> Sign Up</Link>
          <Link to="/cart"><RiShoppingCartLine /> Cart</Link>
        </div>
      </nav>

      {/* Slider */}
      <div className="slider-container">
        {announcements.map((item, index) => (
          <div
            key={index}
            className={`slider-slide ${index === sliderIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="slider-text">{item.text}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${tab === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="product-card">
            {book.onSale && <div className="product-badge">Sale</div>}
            <img src={book.image} alt={book.title} className="product-image" />
            <div className="product-info">
              <h4 className="product-title">{book.title}</h4>
              <div className="product-pricing">
                {book.discountPrice ? (
                  <>
                    <span className="original-price">₹{book.price}</span>
                    <span className="discounted-price">₹{book.discountPrice}</span>
                  </>
                ) : (
                  <span className="discounted-price">₹{book.price}</span>
                )}
              </div>
              <p className="availability-text">{book.availability}</p>
              <div className="product-buttons">
  <button
    className="bookmark-icon"
    onClick={() => navigate('/bookmarks')}
  >
    <RiBookmarkLine />
  </button>

  <button
    className="cart-button"
    onClick={() => navigate('/cart')}
  >
    Add to cart
  </button>
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
