import './scss/index.scss';

const calculator = document.querySelector('.agh-calculator__form');

calculator.addEventListener('input', e => {
    const t = e.target;
    if (!t.classList.contains('agh-calculator__slider')) return;

    t.nextElementSibling.value = t.value;
});