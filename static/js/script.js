const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
    const loginInput = document.getElementById('login').value;
    alert(`Bienvenid@ ${loginInput}`)
});