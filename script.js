document.getElementById('to-signup').addEventListener('click', function() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.signup-form').style.display = 'block';
});

document.getElementById('to-login').addEventListener('click', function() {
    document.querySelector('.signup-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
});






