let text = document.querySelector('input');
let button = document.querySelector('button');
let element = document.querySelector('.special');

button.addEventListener('click', function() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    let h1 = document.createElement('h1');
    h1.innerHTML = text.value;
    let Minus = document.createElement('button');
    Minus.innerHTML = '-';
    let SymbolNumber = document.createElement('span');
    element.appendChild(wrapper);
    let wrapperAll = document.querySelectorAll('.wrapper');
    for (let j = 0; j < wrapperAll.length; j++) {
        SymbolNumber.innerHTML = j + 1;
    }
    wrapper.appendChild(SymbolNumber);
    wrapper.appendChild(h1);
    wrapper.appendChild(Minus);
    Minus.addEventListener('click', function() {
        Minus.parentNode.remove();
        wrapperAll = document.querySelectorAll('.wrapper');
        let SymbolNum = document.querySelectorAll('span');
        for (let i = 0; i < wrapperAll.length; i++) {
            SymbolNum[i].innerHTML = i + 1;
        };
    })
});