// app.js

// Function for soft fade-in transitions
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("fade-in");
});

function goToContents() {
    document.body.classList.remove("fade-in");
    setTimeout(() => {
        window.location.href = "./table of contents/toc.html" // Adjust this path to the Table of Contents page
    }, 300); // Delay to allow for transition
}

