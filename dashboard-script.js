// Add animations or other dynamic behavior as needed


// Add this function to handle navigation to the next page
function navigateToNextPage() {
    window.location.href = 'nextpage.html';
}

// Add an event listener to handle the "Enter" key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        navigateToNextPage();
    }
});
