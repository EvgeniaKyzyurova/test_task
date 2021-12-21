const button = document.querySelector('.button');
const output = document.querySelector('.result');

button.addEventListener('click',() => {
    const firstNumber = Number(document.querySelector('#firstnumber').value);
    const secondNumber = Number(document.querySelector('#secondnumber').value);
    const operation = document.querySelector('#operation').value;
    var result;

    console.log('firstNumber ',firstNumber);
    console.log('secondNumber ',secondNumber);
    console.log('operation ',operation);

    
    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
          break;
        case '-':
          result = firstNumber - secondNumber;
          break;
        case '*':
          result = firstNumber * secondNumber;
          break;
        case '/':
          if (secondNumber) {
            result = firstNumber / secondNumber;
          } else {
            result = 'бесконечность';
          }
          break;
        default:
          result = 'выберите операцию';
      }
    console.log(result)
    output.innerHTML = firstNumber + operation + secondNumber + '=' + Math.round(result) ;
    
});
