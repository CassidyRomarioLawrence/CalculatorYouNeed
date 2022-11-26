let btnZero = document.getElementById('number0');
let btnOne = document.getElementById('number1');
let btnTwo = document.getElementById('number2');
let btnThree = document.getElementById('number3');
let btnFour = document.getElementById('number4');
let btnFive = document.getElementById('number5');
let btnSix = document.getElementById('number6');
let btnSeven = document.getElementById('number7');
let btnEight = document.getElementById('number8');
let btnNine = document.getElementById('number9');
let decimalBtn = document.getElementById('decimal');
let plus = document.getElementById('addition');
let sub = document.getElementById('subtract');
let times = document.getElementById('multiply');
let divide = document.getElementById('divide');

let allClear = document.getElementById('clear');
let equals = document.getElementById('equal');
let erase = document.getElementById('del');
let display = document.getElementById('outcome');

// buttons
btnOne.addEventListener('click', () => {
    let first = btnOne.innerText;
    display.value += first;
})
btnTwo.addEventListener('click',() => {
    let second = btnTwo.innerText;
    display.value += second;
})
btnThree.addEventListener('click',() => {
    let third = btnThree.innerText;
    display.value += third;
})
btnFour.addEventListener('click',() => {
    let fourth = btnFour.innerText;
    display.value += fourth;
})
btnFive.addEventListener('click',() => {
    let fifth = btnFive.innerText;
    display.value += fifth;
})
btnSix.addEventListener('click',() => {
    let sixth = btnSix.innerText;
    display.value += sixth;
})
btnSeven.addEventListener('click',() => {
    let seventh = btnSeven.innerText;
    display.value += seventh;
})
btnEight.addEventListener('click',() => {
    let eighth = btnEight.innerText;
    display.value += eighth;
})
btnNine.addEventListener('click',() => {
    let ninth = btnNine.innerText;
    display.value += ninth;
})
btnZero.addEventListener('click',() => {
    let zero = btnZero.innerText;
    display.value += zero;
})
//end of buttons (numbers)

// operators
plus.addEventListener('click',() => {
    let add = plus.textContent;
    display.value += add;
    allowed = true;
})
sub.addEventListener('click',() =>{
    let minus = sub.textContent;
    display.value += minus;
    allowed = true;
})
divide.addEventListener('click',() =>{
    let divide = divide.textContent;
    display.value += divide;
    allowed = true;
})
times.addEventListener('click',() => {
    let multiply = times.textContent;
    display.value += multiply;
    allowed = true;
})
// end of operators

// other buttons
decimalBtn.addEventListener('click',() => {
    if (allowed) {
        display.value += decimal.textContent;
        allowed = false;
    }    
})
allClear.addEventListener('click',() => {
    let clear = allClear.textContent;
    display.value = '';
    allowed = true;
})
erase.addEventListener('click',() => {
    if (display.value[display.value.length -1] == '.') {
        display.value = display.value.slice(0,-1);
        allowed =true;
    } else {
        display.value = display.value.slice(0,-1);
    }
})

// result button
equals.addEventListener('click',() => {
    display.value = eval(display.value);
    if (display.value.includes('.')) {
        allowed = false;
    } else allowed = true;
})