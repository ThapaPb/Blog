// Toggle between light and dark mode
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

function viewEntry(entryId) {
    // This function can be expanded to dynamically load blog entries in the future
    alert("Viewing Entry " + entryId);
}

// Simple navigation interactions
function goToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
}

function goToContents() {
    window.location.href = 'table_of_contents.html';  // Change this to the actual TOC page path
}





// Attach toggle function to a button in the header or footer
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle Mode";
    toggleButton.onclick = toggleMode;
    document.body.appendChild(toggleButton);
});
