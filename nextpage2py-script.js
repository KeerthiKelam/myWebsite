function navigateToNextPage() {
    window.location.href = 'nextpage3.html';
}

function copyCode() {
    // Select the text within the code box
    var codeBox = document.querySelector('.code-box');
    var range = document.createRange();
    range.selectNode(codeBox);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Deselect the text
    window.getSelection().removeAllRanges();

    // Provide feedback to the user (you can customize this further)
    alert('Code copied to clipboard!');
}
