// Botões trocados
const btnLeft = document.querySelector('.button-arrow.-right') 
const btnRight = document.querySelector('.button-arrow.-left')
const elements = document.querySelector('.elements');
let pixels = 100;

btnRight.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
})

btnLeft.addEventListener('click', function() {
    pixels = pixels - 100
    elements.style = `transform: translateX(${pixels}px)`;
})


