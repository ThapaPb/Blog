import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TableOfContents.css';

function TableOfContents() {
    const chapters = [
        { id: 1, title: 'A Brush with Death', date: 'March 1, 2024' },
        { id: 2, title: 'A Mother\'s Love', date: 'April 12, 2024' },
        // Add more chapters as needed
    ];

    const navigate = useNavigate();

    return (
        <section className="toc">
            <h1>Table of Contents</h1>
            <div className="chapter-list">
                {chapters.map((chapter) => (
                     <div key={chapter.id} className="chapter" onClick={() => navigate(`/entry${chapter.id}`)}>
                     <span>{`Chapter ${chapter.id}: ${chapter.title}`}</span>
                     <span>{chapter.date}</span>
                 </div> 

                ))}

            </div>

            <button className="home-button" onClick={() => navigate('/')}>Home</button>
        
        </section>
    );
}

export default TableOfContents;
