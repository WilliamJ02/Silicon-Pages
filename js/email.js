document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email1').value.trim();
    
    var emailError = document.getElementById('emailError1');
    var emailInput = document.getElementById('email1');

    emailError.textContent = '';

    if (email === '') {
        emailError.textContent = 'Email is required';
        emailInput.classList.add('error-input1');
        return;
    }

    fetch(`https://kyhnet23-assignment.azurewebsites.net/api/subscribe?email=${encodeURIComponent(email)}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => {
        if (res.status === 200) {
            console.log('Subscribed successfully');
            emailInput.classList.remove('error-input1'); 
        }

        if (res.status === 400)
            console.log('Incorrect form data was submitted.');
    })
});
    
document.getElementById('email1').addEventListener('input', function() {
    this.classList.remove('error-input1');
    document.getElementById('emailError1').textContent = '';
});