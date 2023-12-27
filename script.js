function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Replace the following condition with your actual login validation logic
    if (username === 'BeaNerd' && password === 'password') {
        errorMessage.style.color = 'green';
        errorMessage.innerHTML = 'Login successful! Redirecting...';

        // Redirect to the dashboard page after a short delay (2 seconds in this example)
        setTimeout(function() {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        errorMessage.style.color = 'red';
        errorMessage.innerHTML = 'Invalid username or password. Please try again.';
    }
}
