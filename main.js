const popUpBox = document.querySelector('.pop-up-box');
const close = document.querySelector('.close-box');
const deleteBtn = document.querySelector('.delete');

deleteBtn.addEventListener('click', () => {
    popUpBox.classList.add('show');
})

close.addEventListener('click', () => {
    popUpBox.classList.remove('show');
})