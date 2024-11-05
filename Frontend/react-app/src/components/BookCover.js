// src/components/BookCover.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookCover.css';

function BookCover() {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/table-of-contents');
    };

    return (
        <section className="book-cover">
            <div className="left-panel">
                <h1>The Lament of Loss</h1>
                <p className="author">- Prabigya Thapa</p>
                <p className="subtitle">A tribute to my mother, life, loss, and enduring memories.</p>
                <button onClick={handleExploreClick} className="button">Explore</button>
            </div>
            <div className="right-panel">
                <img src={`${process.env.PUBLIC_URL}/cover image.jpg`} alt="Mandala Cover" className="cover-image" />
            </div>
        </section>
    );
}

export default BookCover;
