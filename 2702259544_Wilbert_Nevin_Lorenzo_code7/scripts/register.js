document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        let valid = true;
        
        // Validasi nama
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            valid = false;
            alert('Name is required');
        }

        // Validasi email
        const email = document.getElementById('email');
        if (email.value.trim() === '' || !email.value.includes('@')) {
            valid = false;
            alert('Please enter a valid email');
        }

        // Validasi password
        const password = document.getElementById('password');
        if (password.value.length < 6) {
            valid = false;
            alert('Password must be at least 6 characters long');
        }

        // Jika tidak valid, prevent form submit
        if (!valid) {
            event.preventDefault();
        }
    });
});
