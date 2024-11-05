import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BookCover from './components/BookCover';
import TableOfContents from './components/TableOfContents';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<BookCover />} />
                <Route path="/table-of-contents" element={<TableOfContents />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
