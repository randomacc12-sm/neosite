// When the envelope is clicked, display the message and buttons
document.getElementById('envelope').addEventListener('click', function() {
    var closedEnvelope = document.getElementById('closed-envelope');
    var messageContainer = document.getElementById('message-container');

    closedEnvelope.style.opacity = '0';

    // After a short delay, hide the envelope and show the message and buttons
    setTimeout(function() {
        closedEnvelope.style.display = 'none';
        messageContainer.style.display = 'block';
    }, 500);
});

// Make the "Decline" button move randomly on hover
document.getElementById('decline-button').addEventListener('mouseover', function() {
    var declineButton = document.getElementById('decline-button');
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);

    // Ensure the button doesn't go off-screen
    if (x > window.innerWidth - declineButton.offsetWidth) {
        x = window.innerWidth - declineButton.offsetWidth;
    }
    if (y > window.innerHeight - declineButton.offsetHeight) {
        y = window.innerHeight - declineButton.offsetHeight;
    }

    declineButton.style.position = 'absolute';
    declineButton.style.left = x + 'px';
    declineButton.style.top = y + 'px';
});
// Switch to the flower site when the "Accept" button is clicked
document.getElementById('accept-button').addEventListener('click', function() {
    document.getElementById('mail-site').style.display = 'none';
    document.getElementById('flower-site').style.display = 'block';
});
