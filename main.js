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
    let ArrowUp = document.createElement('button');
    ArrowUp.innerHTML = "↑"
    let ArrowDown = document.createElement('button');
    ArrowDown.innerHTML = "↓"
    let SymbolNumber = document.createElement('span');
    element.appendChild(wrapper);
    let wrapperAll = document.querySelectorAll('.wrapper');
    for (let j = 0; j < wrapperAll.length; j++) {
        SymbolNumber.innerHTML = j + 1;
    }
    wrapper.appendChild(SymbolNumber);
    wrapper.appendChild(h1);
    wrapper.appendChild(Minus);
    wrapper.appendChild(ArrowUp);
    wrapper.appendChild(ArrowDown);
    Minus.addEventListener('click', function() {
        Minus.parentNode.remove();
        let wrapperAll = document.querySelectorAll('.wrapper');
        let SymbolNum = document.querySelectorAll('span');
        for (let i = 0; i < wrapperAll.length; i++) {
            SymbolNum[i].innerHTML = i + 1;
        };
    })
    ArrowUp.addEventListener('click', function() {
        let wrapperAll = document.querySelectorAll('.wrapper');
        for (let i = 0; i < wrapperAll.length; i++) {
            if (ArrowUp.parentNode == wrapperAll[i]) {
                let parent = wrapperAll[i].parentNode;
                parent.insertBefore(wrapperAll[i], wrapperAll[i - 1])
            }
        }
        let SymbolNum = document.querySelectorAll('span');
        for (let i = 0; i < wrapperAll.length; i++) {
            SymbolNum[i].innerHTML = i + 1;
        };
    })
    ArrowDown.addEventListener('click', function() {
        let wrapperAll = document.querySelectorAll('.wrapper');
        for (let i = 0; i < wrapperAll.length; i++) {
            if (ArrowDown.parentNode == wrapperAll[i]) {
                let parent = wrapperAll[i].parentNode;
                if (i === wrapperAll.length - 1) {
                    parent.insertBefore(wrapperAll[i], wrapperAll[0]);
                } else {
                    parent.insertBefore(wrapperAll[i + 1], wrapperAll[i])
                }
            }
        }
        let SymbolNum = document.querySelectorAll('span');
        for (let i = 0; i < wrapperAll.length; i++) {
            SymbolNum[i].innerHTML = i + 1;
        };
    })
});