// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formSuccess = document.querySelector('.form-success');
const closeSuccess = document.querySelector('.btn-close-success');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission (replace with actual AJAX call)
        setTimeout(() => {
            contactForm.reset();
            formSuccess.classList.add('active');
        }, 1000);
    });
}

// Close success message
closeSuccess.addEventListener('click', () => {
    formSuccess.classList.remove('active');
});

// Floating label effect
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentNode.querySelector('label').classList.add('active');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentNode.querySelector('label').classList.remove('active');
        }
    });
    
    // Initialize labels for pre-filled values
    if (input.value) {
        input.parentNode.querySelector('label').classList.add('active');
    }
});

// Social media icons animation
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.1}s`;
    icon.classList.add('animate__animated', 'animate__fadeInUp');
});