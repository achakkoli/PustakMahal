let isLoggedIn = false;
function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === 'achakkoli' && pass === 'achakkoli@2468') {
        isLoggedIn = true;
        document.getElementById('welcomeMessage').innerText = 'Welcome, ' + user + '!';
        document.getElementById('loginSection').style.display = 'none';
        alert('Login successful!');
    } else {
        alert('Invalid credentials!');
    }
}
function logout() {
    isLoggedIn = false;
    document.getElementById('welcomeMessage').innerText = '';
    document.getElementById('loginSection').style.display = 'block';
}