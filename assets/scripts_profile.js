document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
        document.getElementById('userName').textContent = user.name;
        document.getElementById('userEmail').textContent = user.email;
    document.getElementById('logoutButton').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});