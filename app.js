window.onload = function() {
    validaLogin();
};

function setLocalstorage(key, value) {
    localStorage.setItem(key, value);
}

function logOut() {
    localStorage.clear();
    window.location.href = 'login.html';
}

function validaLogin() {
    const username = localStorage.getItem("username");

    // If user is not logged in (no username in localStorage)
    if (username === null && !window.location.href.includes("login.html")) {
        // Redirect to login page if not already on login page
        window.location.href = 'login.html';
    } else {
        // If user is logged in and on login page, redirect to logged-in page
        if (username !== null && window.location.href.includes("login.html")) {
            window.location.href = 'loggedin.html';
        } else {
            // Try to display username on other pages
            const resultado = document.getElementById('userValue');
            if (resultado) {
                resultado.innerHTML = 'Bem-vindo: ' + username;
            }
        }
    }
}

// Optional: Separate function for displaying user info
function displayUserInfo() {
    const userValue = document.getElementById('userValue');
    const username = localStorage.getItem('username');
    
    if (userValue && username) {
        userValue.textContent = `Bem-vindo, ${username}!`;
    }
}