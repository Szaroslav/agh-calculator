import './scss/index.scss';
import { agh, subjects } from './data';

const calculator = document.querySelector('.agh-calculator__form');
const calculateBtn = document.querySelector('#calculate-btn');
const extraSubjects = document.querySelector('.agh-calculator__extra-subjects');

const getRealValue = n => {
    if (n < 30)
        return n;
    if (n >= 30 && n <= 80)
        return n + 2 * (n - 30);

    return n + 100;
}

const calculateResult = (g1, g2, m) => {
    g1 = getRealValue(parseInt(g1));
    g2 = getRealValue(parseInt(g2));
    m = 2 * parseInt(m);
    
    return 4 * (0.75 * g1 + 0.25 * g2) + m;
};

const getResults = (e) => {
    e.preventDefault();

    const alInputs = Array.from(document.querySelectorAll('.al-input'));

    const list = document.createElement('ul');
    const resultsContainer = document.querySelector('.agh-calculator__results');
    agh.faculties[0].fields.forEach(f => {
        const s = [[],[]];

        alInputs.forEach(input => {
            for (let i = 0; i < f.subjects[0].length; i++)
            {
                if (input.id === f.subjects[0][i])
                {
                    s[0].push(input.id);
                    break;
                }
            }

            for (let i = 0; i < f.subjects[1].length; i++)
            {
                if (input.id === f.subjects[1][i])
                {
                    s[1].push(input.id);
                    break;
                }
            }
        });

        const results = [[],[]];
        s[0].forEach(s => {
            results[0].push(document.querySelector(`#${s}`).value);
        });
        s[1].forEach(s => {
            results[1].push(document.querySelector(`#${s}`).value);
        });
        results[0].sort((a, b) => b - a);
        results[1].sort((a, b) => b - a);

        const r = calculateResult(results[0][0], results[1][0], document.querySelector('#maths-el-result').value);
        resultsContainer.querySelector(`.results__item[data-id="${f.id}"] > .results__result`).innerHTML = `[${r}]`;
    });
};

calculator.addEventListener('input', e => {
    const t = e.target;
    if (!t.classList.contains('agh-calculator__slider')) return;

    t.nextElementSibling.value = t.value;;
});

calculator.addEventListener('click', e => {
    e.preventDefault();

    const t = e.target;
    if (t.tagName !== 'BUTTON')
        return;

    const id = t.parentElement.parentElement.getAttribute('data-id');
    document.querySelector(`.extra-subjects__item[data-id="${id}"]`).classList.remove('hidden');
    t.parentElement.parentElement.remove();
});

extraSubjects.addEventListener('click', e => {
    const t = e.target;
    if (!t.classList.contains('extra-subjects__item'))
        return;

    const li = document.createElement('li');
    li.classList.add('agh-calculator__subject');

    const l = document.createElement('label');
    l.textContent = subjects[t.getAttribute('data-id')];

    const b = document.createElement('button');
    b.textContent = 'X';

    const s = document.createElement('input');
    s.type = 'range';
    s.min = 0;
    s.max = 100;
    s.step = 1;
    s.value = 100;

    const n = document.createElement('input');
    n.type = 'number';
    n.min = 0;
    n.max = 100;
    n.value = 100;

    li.appendChild(l).appendChild(b);
    li.appendChild(s);
    li.appendChild(n);

    document.querySelector('.agh-calculator__subject-list').appendChild(li);
    t.classList.add('hidden');
});

calculateBtn.addEventListener('click', e => getResults(e));