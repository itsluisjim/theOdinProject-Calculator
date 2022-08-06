const numberBtns = document.querySelectorAll('.number');
const operatorsBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.del')
const previousDisplay = document.querySelector('.previous-operand');
const currentDisplay = document.querySelector('.current-operand');

function appendNumber (number) {
    let symbols = /[\-\+\*\/]/;
    if(currentDisplay.innerText.length == 0 && symbols.test(number)) return;
    if(number === '.' && currentDisplay.innerText.includes('.')) return;
    if(symbols.test(number) && symbols.test(currentDisplay.innerText)) return;
    currentDisplay.innerText += number;
    
}

function updateDisplay() {
    previousDisplay.innerText = currentDisplay.innerText;
}


function deleteOne() {
    currentDisplay.innerText = currentDisplay.innerText.substring(0, currentDisplay.innerText.length-1);
}

function operate(){
    let result = eval(previousDisplay.innerText);

    if(result == 'Infinity'){
        result = 'error';
    }
    currentDisplay.innerText = result;
}
function clear() {
    currentDisplay.innerText = '';
    previousDisplay.innerText = '';
}

//Add eventListeners to all buttons
numberBtns.forEach(button => {
    button.addEventListener('click', (e)=> {
        appendNumber(e.target.innerText);
        updateDisplay();  
    })
});

operatorsBtns.forEach(button => {
    button.addEventListener('click', (e)=> {
        appendNumber(e.target.innerText);
        updateDisplay();
    })
});

clearBtn.addEventListener('click', ()=>{
    clear();
    updateDisplay();
});

deleteBtn.addEventListener('click', ()=> {
    deleteOne();
})

equalBtn.addEventListener('click',  ()=>  {
    if(currentDisplay.innerText.length == 0) {
        clear();
        return;
    }
    updateDisplay();
    operate();
    previousDisplay.innerText += ' =';

});