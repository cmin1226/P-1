const toogleBtn = document.querySelector('.side_toogleBtn');
const list = document.querySelector('.side_list');

toogleBtn.addEventListener('click', () => {
    list.classList.toggle('active');
});