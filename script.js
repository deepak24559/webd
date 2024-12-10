document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

    let isValid = true;

    // Form field validations
    const firstName = document.getElementById('firstName');
    if (!firstName.value.trim()) {
        document.getElementById('firstNameError').textContent = 'First name is required';
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }

    const lastName = document.getElementById('lastName');
    if (!lastName.value.trim()) {
        document.getElementById('lastNameError').textContent = 'Last name is required';
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }

    const number = document.getElementById('number');
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(number.value)) {
        document.getElementById('numberError').textContent = 'Enter a valid 10-digit phone number';
        document.getElementById('numberError').style.display = 'block';
        isValid = false;
    }

    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    const password = document.getElementById('password');
    if (password.value.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    const address = document.getElementById('address');
    if (!address.value.trim()) {
        document.getElementById('addressError').textContent = 'Address is required';
        document.getElementById('addressError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset();
    }
});

