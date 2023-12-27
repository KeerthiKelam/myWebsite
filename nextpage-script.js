function navigateToNextPage() {
    window.location.href = 'nextpage2.html';
}

function navigateToPrevPage() {
    window.location.href = 'dashboard.html';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        navigateToNextPage();
    }
});
