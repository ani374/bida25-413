// Mobile Menu Toggle
function toggleMenu() {
    var mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Contact Form Submission
function submitContact(event) {
    event.preventDefault();
    var form = document.getElementById('contactForm');
    var successMsg = document.getElementById('contactSuccess');
    
    // Basic validation logic
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        successMsg.style.display = 'block';
        form.reset();
        
        setTimeout(function() {
            successMsg.style.display = 'none';
        }, 5000);
    }
    
    return false;
}

// Feedback Form Submission
function submitFeedback(event) {
    event.preventDefault();
    var form = document.getElementById('feedbackForm');
    var successMsg = document.getElementById('feedbackSuccess');
    
    var name = document.getElementById('fbName').value;
    var email = document.getElementById('fbEmail').value;
    var rating = document.getElementById('rating').value;
    var message = document.getElementById('fbMessage').value;
    
    if (name && email && rating && message) {
        successMsg.style.display = 'block';
        form.reset();
        
        setTimeout(function() {
            successMsg.style.display = 'none';
        }, 5000);
    }
    
    return false;
}