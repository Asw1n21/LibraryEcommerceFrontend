// src/components/Pages/BookmarkPage.js
import React, { useState, useEffect } from 'react';
import '../../Styles/BookmarkPage.css';

function BookmarkPage() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(stored);
  }, []);

  const removeBookmark = (index) => {
    const updated = [...bookmarks];
    updated.splice(index, 1);
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  return (
    <div className="bookmark-page">
      <h2>Your Bookmarked Books</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        <div className="bookmark-list">
          {bookmarks.map((book, i) => (
            <div key={i} className="bookmark-card">
              <img src={book.image} alt={book.title} />
              <div>
                <h4>{book.title}</h4>
                <p>₹{book.discountPrice || book.price}</p>
                <button onClick={() => removeBookmark(i)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookmarkPage;
