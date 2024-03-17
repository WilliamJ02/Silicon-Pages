document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var fullName = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var specialist = document.getElementById('specialist').value.trim();
    var date = document.getElementById('date').value.trim();
    var time = document.getElementById('time').value.trim();
    
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var specialistError = document.getElementById('specialistError');
    var dateError = document.getElementById('dateError');
    var timeError = document.getElementById('timeError');

    nameError.textContent = '';
    emailError.textContent = '';
    specialistError.textContent = '';
    dateError.textContent = '';
    timeError.textContent = '';

    if (fullName === '') {
        nameError.textContent = 'Name is required';
        document.getElementById('name').classList.add('error-input');
        return; 
    }

    if (email === '') {
        emailError.textContent = 'Email is required';
        document.getElementById('email').classList.add('error-input');
        return;
    }

    if (specialist === '') {
        specialistError.textContent = 'Specialist is required';
        document.getElementById('specialist').classList.add('error-input');
        return;
    }

    if (date === '') {
        dateError.textContent = 'Date is required';
        document.getElementById('date').classList.add('error-input');
        return;
    }

    if (time === '') {
        timeError.textContent = 'Time is required';
        document.getElementById('time').classList.add('error-input');
        return;
    }

    const formData = { 
        fullName: fullName,
        email: email,
        specialist: specialist,
        date: date,
        time: time
    };

    fetch('https://kyhnet23-assignment.azurewebsites.net/api/book-appointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => {
        if (res.status === 200)
            console.log('Appointment created successfully.')

        if (res.status === 400)
            console.log('Incorrect form data was submitted.')
    })
});

document.querySelectorAll('.form-box').forEach(function(input) {
    input.addEventListener('input', function() {
        this.classList.remove('error-input');
    });
});
