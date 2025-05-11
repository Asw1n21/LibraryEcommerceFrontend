import React from 'react';

// Book Categories
const BookCategory = {
    All: 'All Books',
    Bestsellers: 'Bestsellers',
    AwardWinners: 'Award Winners',
    NewReleases: 'New Releases',
    NewArrivals: 'New Arrivals',
    ComingSoon: 'Coming Soon',
    Deals: 'Deals'
};

// Book Formats
const BookFormat = {
    Paperback: 'Paperback',
    Hardcover: 'Hardcover',
    Ebook: 'E-book',
    Audiobook: 'Audiobook',
    Signed: 'Signed',
    Collectors: "Collector's Edition",
    Deluxe: 'Deluxe Edition'
};

// Mock Books Data
const mockBooks = [
    {
        id: 1,
        title: 'The Midnight Library',
        author: 'Matt Haig',
        isbn: '9780525559474',
        description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
        coverImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg',
        price: 12.99,
        originalPrice: 16.99,
        publicationDate: new Date('2020-08-13'),
        rating: 4.2,
        ratingsCount: 1523,
        formats: [BookFormat.Paperback, BookFormat.Ebook, BookFormat.Audiobook],
        genres: ['Fiction', 'Fantasy', 'Contemporary'],
        languages: ['English'],
        availability: true,
        isBestseller: true,
        isAwardWinner: true,
        isNewRelease: false,
        isNewArrival: false,
        isComingSoon: false,
        isDeal: true,
        featured: true
    },
    // ... Add more books as needed
];

const HomePage = () => {
    const generateStarRating = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        const stars = [];

        // Full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
        }

        // Half star
        if (halfStar) {
            stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
        }

        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
        }

        return stars;
    };

    const formatPrice = (price) => {
        return `$${price.toFixed(2)}`;
    };

    return (
        <div>
            <header className="site-header sticky-top">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <a className="navbar-brand logo" href="#">
                            <img src="./assets/logo.png" alt="PagesForYou Logo" height="43" />
                        </a>
                        {/* Add navigation items */}
                    </div>
                </nav>
            </header>

            <main className="container py-4">
                {/* Hero Section */}
                <section className="hero-section mb-5">
                    {/* Add hero content */}
                </section>

                {/* Book Grid */}
                <section className="book-grid mb-5">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {mockBooks.map(book => (
                            <div key={book.id} className="col">
                                <div className="card book-card h-100">
                                    <div className="position-relative">
                                        <img src={book.coverImage} className="book-cover card-img-top" alt={book.title} />
                                        {book.originalPrice && <div className="sale-tag">SALE</div>}
                                    </div>
                                    <div className="card-body book-info">
                                        <h5 className="book-title">{book.title}</h5>
                                        <p className="book-author">{book.author}</p>
                                        <div className="d-flex align-items-center mb-2">
                                            <div className="rating">
                                                {generateStarRating(book.rating)}
                                            </div>
                                            <span className="rating-count ms-2">({book.ratingsCount})</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            {book.originalPrice &&
                                                <span className="original-price">{formatPrice(book.originalPrice)}</span>
                                            }
                                            <span className="book-price">{formatPrice(book.price)}</span>
                                        </div>
                                        {/* Add buttons */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                {/* Add footer content */}
            </footer>
        </div>
    );
};

export default HomePage;