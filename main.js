let lastOperation;
let buffer = '0';
let numberBuffer = 0;



const screen = document.querySelector('.app__screen__number');


function butonClick(value) {
  
  if (isNaN(value)) {
    
    handlerSymbol(value);
    
  } else {
    
    handlerNumber(value);
    
  } 
  
  screen.innerHTML = buffer;
  
}


function handlerSymbol(symbol) {
  
  
  switch (symbol) {
    
    case 'C':
      lastOperation = 0;
      buffer = '0'; 
      number = 0;
      break;
    
    case '←':
      
      let num = buffer.toString();
      
      if (num.length === 1) {
        
        buffer = 0;
        
      }else {
        
        buffer = num.substring(0 , num.length - 1)
        
      }
      break;
    
    case '=':
      
      if (lastOperation === null) return;
      flushOperation(parseInt(buffer));
      lastOperation = null;
      buffer = numberBuffer;
      numberBuffer = 0;
      break;
    
    
    case '+':
    case '-':
    case '×':
    case '÷':
      handlerMath(symbol);
      break;
    
    
    
  }
  
}


function handlerMath(Symbol) {
  
  
  if (buffer === 0) return;
  
  const intBuffer = parseInt(buffer);
  
  if (numberBuffer === 0) {
    
    numberBuffer = intBuffer;
    
  }else {
    
    flushOperation(intBuffer);
    
  }
  
  lastOperation = Symbol;
  buffer = '0';
  
}


function flushOperation(intBuffer){
  
  if (lastOperation === '+') {
    
    numberBuffer += intBuffer;
    
  }else if (lastOperation === '-') {
    
    console.log(intBuffer)
    numberBuffer -= intBuffer;
    
  }else if (lastOperation === '×') {
    
    numberBuffer *= intBuffer;
    
  }else if (lastOperation === '÷') {
    
    numberBuffer /= intBuffer;
    
  }
  
}

function handlerNumber(numberString){
  
  if (buffer === '0' ) {
    
    buffer = numberString;
    
  }else if( buffer === 0 ){
    
    buffer = numberString;
    
  }else {
    
    buffer += numberString;
    
  }
  
}


function init() {
  
  let btns = document.querySelectorAll('.app__butons__content_BTN');
  
  btns.forEach( (btn) => {
    
    btn.addEventListener('click' , () => {
      
      butonClick(event.target.innerText);
      
    })
    
  })
  
}

init();
