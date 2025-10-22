document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        let valid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const day = document.getElementById('day');
        const month = document.getElementById('month');
        const year = document.getElementById('year');
        const gender = document.getElementById('gender');
        const country = document.getElementById('country');

        // Name validation
        if (name.value.trim() === '') {
            valid = false;
            alert('Name is required');
        }

        // Email validation
        if (email.value.trim() === '' || !email.value.includes('@')) {
            valid = false;
            alert('Valid email is required');
        }

        // Password validation
        if (password.value.length < 6) {
            valid = false;
            alert('Password must be at least 6 characters');
        }

        // Age validation
        const dayValue = parseInt(day.value);
        const monthValue = parseInt(month.value);
        const yearValue = parseInt(year.value);
        const currentDate = new Date();
        const selectedDate = new Date(yearValue, monthValue - 1, dayValue);
        const ageInYears = currentDate.getFullYear() - selectedDate.getFullYear();
        const monthDifference = currentDate.getMonth() - selectedDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < selectedDate.getDate())) {
            ageInYears--;
        }
        if (isNaN(dayValue) || isNaN(monthValue) || isNaN(yearValue) || ageInYears <= 0) {
            valid = false;
            alert('Valid date of birth is required');
        }

        // Gender validation
        if (gender.value === '') {
            valid = false;
            alert('Gender is required');
        }

        // Country validation
        if (country.value === '') {
            valid = false;
            alert('Country is required');
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
