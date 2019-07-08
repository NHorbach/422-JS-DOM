//const link=document.querySelector ('a'); // вибирає усі посиланням на тег єає 
//link.textContent = 'Mozilla Developer Network';
//link.href = 'https://developer.mozilla.org';

//var sect = document.querySelector('section');
//var para = document.createElement('p');
//para.textContent = 'We hope you enjoyed the ride.';
//sect.appendChild(para);

//const text = document.createTextNode(' — the premier source for web development knowledge.');

//const linkPara = document.querySelector('p');
//linkPara.appendChild(text); // знаходить текст з URL і додає до нього

//sect.appendChild(linkPara); //linkpara вказує на параграф 1, потім переміщуємо в них сторінки. заново зробити apenChild. переміщує параграф 
//sect.removeChild(linkPara);
// якщо немає посилання на секцію а лише на параграф
//linkPara.parentNode.removeChild(linkPara) // тільки батьківський елемент може вбити дочірній

//para.style.color = 'white'; // стиліми краще не робити, просто додавати і віднімати класи а не міняти стилі
//para.style.backgroundColor = 'black';
//para.style.padding = '10px';
//para.style.width = '250px';
//para.style.textAlign = 'center';

//para.classList.add('chosen'); // до параграфа додасть код а в css додати селектор chosen

// подія це коли клікаємо ми можемо приствоїти додаємо метод addEventListner

document.querySelector('.click-me').addEventListener('click', showAlert);
function showAlert() {
    alert('button clicked');
}

const clockDisplay = document.querySelector('.clock');
setInterval( () => clockDisplay.innerText = new Date().toLocaleTimeString(),1000 );

const display = document.querySelector('.calculator .display')

document.querySelector('digits button') // знаходить всі кнопки в div digits
.forEach(digit =>document.addEventListener('click', digitPressed))

function digitPressed(ev) {
display.value += ev.target.innerText; // витягуємо текст з кнопочки яку ми витягуємо і на яку ми клікнули
}

document
querySelectorAll('opers button')
.forEach(oper => oper.addEventListener('click', operPressed))

function operPressed(ev) {
    display.value += ev.target.innerText; 
    }

document.querySelector('.equal').addEventListener('clicl', equal)

function equalPressed (){
display.value = eval(display.value)
}

document
querySelectorAll('demicals button')
.forEach(oper => oper.addEventListener('click', demicalsPressed))

function demicalsPressed(ev) {
    display.value += ev.target.innerText; 
    
    }

