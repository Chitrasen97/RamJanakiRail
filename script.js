document.addEventListener('DOMContentLoaded', () => {
    // Get Sign-Up Modal Elements
    const openSignUpFormButton = document.getElementById('openSignUpForm');
    const signUpForm = document.getElementById('signUpForm');
    const closeButtons = document.querySelectorAll('.close'); // Select all close buttons
    const signupForm = document.getElementById('signup-form');

    // Intersection Observer for Hero Section Animation
    const hero = document.querySelector('.hero');
    if (hero) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    hero.classList.add('in-view');
                    observer.unobserve(hero);
                }
            });
        });
        observer.observe(hero);
    }

    // Open Sign-Up Modal
    if (openSignUpFormButton) {
        openSignUpFormButton.addEventListener('click', () => {
            signUpForm.style.display = 'flex'; // Use flex for centering
        });
    }

    // Close Sign-Up and Booking Modal
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none'; // Close the correct modal
        });
    });

    // Handle Sign-Up Form Submission (Placeholder)
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Sign-Up form submitted (placeholder).');
        });
    }

    // Get Booking Modal Elements
    const bookNowButton = document.querySelector('.cta-button');
    const bookingForm = document.getElementById('bookingForm');

    // Open Booking Modal
    if (bookNowButton && bookingForm) {
        bookNowButton.addEventListener('click', () => {
            bookingForm.style.display = 'flex';
        });
    }

    // Close Modal When Clicking Outside
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // Get Login Modal Elements
    const loginButton = document.querySelector('.login-button');
    const loginForm = document.getElementById('loginForm');
    const signUpLink = document.getElementById('showSignUp');

    // Open Login Modal
    if (loginButton && loginForm) {
        loginButton.addEventListener('click', () => {
            loginForm.style.display = 'flex';
        });
    }

    // Close Login Modal and Sign-Up Modal when clicking close button
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginForm.style.display = 'none';
            signUpForm.style.display = 'none';
        });
    });

    // Show Sign-Up Modal when clicking "Sign Up" inside Login Modal
    if (signUpLink) {
        signUpLink.addEventListener('click', (event) => {
            event.preventDefault();
            loginForm.style.display = 'none';
            signUpForm.style.display = 'flex';
        });
    }

    // Handle Login Form Submission (Placeholder)
    const loginFormElement = document.getElementById('login-form');
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Login form submitted (placeholder).');
        });
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("contactBtn").addEventListener("click", function() {
    var contactSection = document.getElementById("contact");
    if (contactSection.style.display === "none") {
        contactSection.style.display = "block";
        this.textContent = "Hide Contact Info"; // Change button text
    } else {
        contactSection.style.display = "none";
        this.textContent = "Contact Us"; // Reset button text
    }
});
