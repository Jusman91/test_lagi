const burgerBtn = document.getElementById('bar');
const navBar = document.querySelector('.navbar');

burgerBtn.addEventListener('click', function() {
    navBar.classList.toggle('slide');
})