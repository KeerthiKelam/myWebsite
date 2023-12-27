function navigateToNextPage() {
    window.location.href = 'nextpage3.html';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        navigateToNextPage();
    }
});
