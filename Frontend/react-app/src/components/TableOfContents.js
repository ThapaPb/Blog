import React from 'react';
import './TableOfContents.css';

function TableOfContents() {
    const chapters = [
        { id: 1, title: 'A Brush with Death', date: 'March 1, 2024' },
        { id: 2, title: 'A Mother\'s Love', date: 'April 12, 2024' },
        // Add more chapters as needed
    ];

    return (
        <section className="toc">
            <h1>Table of Contents</h1>
            <div className="chapter-list">
                {chapters.map((chapter) => (
                    <div key={chapter.id} className="chapter">
                        <span className="chapter-title">{`Chapter ${chapter.id}: ${chapter.title}`}</span>
                        <span className="chapter-date">{chapter.date}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
