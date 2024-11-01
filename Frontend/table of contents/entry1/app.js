function nextSection() {
    document.querySelector('.entry-page').classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'next_entry.html'; // Adjust to the actual next page path
    }, 600); // Duration of the fade-out transition
}
