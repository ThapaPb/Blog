# The Memorial Blog Frontend

This is the frontend of **The Memorial Blog** project, a React-based application designed to provide a seamless, book-like experience for readers. It connects to a Django backend for dynamic content, with blog entries that form an interconnected, reflective story.

## Features

- **Autumn-Inspired Theme**: A warm, cozy aesthetic inspired by autumn colors.
- **Dynamic Table of Contents**: Lists blog entries as chapters, sorted chronologically.
- **Individual Entry Pages**: Each entry is styled with ample spacing, resembling a book layout.
- **Home Navigation**: Easily return to the main page or move between chapters.
- **Backend Integration**: Fetches dynamic content from the Django backend API.

## Project Structure

```plaintext
frontend/
├── public/                      # Static assets
│   ├── assets/                  # Folder for images, icons, and other assets
│   ├── index.html               # Main HTML file for React to mount on
│   └── ...
├── src/                         # Source folder for React components
│   ├── components/              # Main components used in the app
│   │   ├── BookCover.js         # Cover page (homepage)
│   │   ├── TableOfContents.js   # Dynamic Table of Contents
│   │   ├── Entry.js             # Entry component for individual blog pages
│   │   └── ...
│   ├── App.js                   # Main app file with routes
│   ├── index.js                 # Entry point for the React app
│   └── ...
├── Dockerfile                   # Docker configuration for frontend deployment
├── package.json                 # NPM dependencies and scripts
└── ...
