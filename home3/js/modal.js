const modalBtn = document.querySelector('.modal__button')
const modal = document.querySelector('.modal')
const courseBtn = document.querySelector('.course__button');
const modalInner = document.querySelector('.modal__inner');

const closeBtn = document.createElement('button');
closeBtn.type = 'button';
closeBtn.classList.add('modal__close');
closeBtn.innerHTML = 'X';
closeBtn.style.color = 'red';
closeBtn.style.position = 'absolute';
closeBtn.style.top = '8px';
closeBtn.style.right = '8px';
closeBtn.style.width = '36px';
closeBtn.style.height = '36px';
closeBtn.style.backgroundColor = 'transparent';
closeBtn.style.border = 'none';
closeBtn.style.fontSize = '24px';
closeBtn.style.cursor = 'pointer';

modalInner.style.position = 'relative';
modalInner.appendChild(closeBtn)


modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

courseBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = '';
});

modal.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner');
    if (!modalContent) {
        modal.style.display = '';
    }

})