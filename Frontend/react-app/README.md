# The Memorial Blog Frontend
### This is the frontend of The Memorial Blog project, a React-based application designed to provide a seamless, book-like experience for readers. It connects to a Django backend for dynamic content, with blog entries that form an interconnected, reflective story.
## Features
1. Autumn-Inspired Theme: A warm, cozy aesthetic inspired by autumn colors.
2. Dynamic Table of Contents: Lists blog entries as chapters, sorted chronologically.
3. Individual Entry Pages: Each entry is styled with ample spacing, resembling a book layout.
4. Home Navigation: Easily return to the main page or move between chapters.
5. Backend Integration: Fetches dynamic content from the Django backend API.

## Project Structure
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

## Prerequisites
Node.js: Make sure you have Node.js installed. Download here.
Docker: If deploying with Docker, ensure Docker is installed. Download here.
Setup and Installation
Clone the Repository:
bash
Copy code
git clone https://github.com/your-username/your-repository.git
cd your-repository/frontend


Install Dependencies:
bash
Copy code
npm install


Environment Variables:
If needed, create a .env file to store any environment-specific variables.
Update Backend URL:
In TableOfContents.js and Entry.js, ensure the backend API URL is set to the production server for deployment:
javascript
Copy code
axios.get('https://your-backend-url/api/entries/')


Running the App Locally
To run the app in development mode:
bash
Copy code
npm start

Open http://localhost:3000 to view it in your browser.
The page will automatically reload if you make edits.
Building the App for Production
To build a production-ready version of the app, run:
bash
Copy code
npm run build

This will bundle React in production mode and optimize the build for deployment in the build/ folder.
Docker Deployment
Build the Docker Image:
bash
Copy code
docker build -t memorial-blog-frontend .


Run the Docker Container:
bash
Copy code
docker run -p 3000:80 memorial-blog-frontend


Deployment
To deploy the application:
Set up a deployment service, such as Render or DigitalOcean, with Docker support.
Use the Docker configuration in this project to deploy a full-stack environment, linking the frontend to the backend.
Contributing
If you'd like to contribute:
Fork this repository.
Create a branch: git checkout -b feature-name.
Make your changes and commit them: git commit -m 'feature details'.
Push to the branch: git push origin feature-name.
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

