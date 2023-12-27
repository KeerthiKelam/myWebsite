// public/frontend.js

$(document).ready(function () {
    // Initial setup
    let currentSet = 1;

    // Function to fetch and display questions
    function fetchQuestions(set) {
        $.ajax({
            method: 'GET',
            url: `/questions?set=${set}`,
            success: function (data) {
                const questionsHtml = data.questions.map(question => `<p>${question}</p>`).join('');
                $('#question-container').html(`<h2>Set ${data.set} Questions</h2>${questionsHtml}`);
            },
            error: function (error) {
                console.error('Error fetching questions:', error);
            }
        });
    }

    // Fetch and display questions when the page loads
    fetchQuestions(currentSet);

    // Periodically check for set changes
    setInterval(function () {
        $.ajax({
            method: 'GET',
            url: '/check-set',
            success: function (data) {
                if (data.set !== currentSet) {
                    currentSet = data.set;
                    fetchQuestions(currentSet);
                }
            },
            error: function (error) {
                console.error('Error checking set:', error);
            }
        });
    }, 5000); // Check every 5 seconds (adjust as needed)
});
