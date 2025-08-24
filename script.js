// JavaScript for interactivity

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // 2. Date Picker Initialization using Flatpickr
    flatpickr("#date-picker", {
        mode: "range", // Allows selecting a start and end date
        minDate: "today", // Prevents selecting past dates
        dateFormat: "Y-m-d", // Date format
        altInput: true, // Shows a user-friendly date format
        altFormat: "F j, Y", // Format for the user-friendly date
        onChange: function(selectedDates, dateStr, instance) {
            if (selectedDates.length === 2) {
                console.log('Selected range:', selectedDates[0], 'to', selectedDates[1]);
            }
        }
    });

    // 3. Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
