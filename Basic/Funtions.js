//normal function with a console.log
function greeting(){
    console.log('Good Day Sr.');
}

//function with arguments and return
function addition(number1, number2){
    return number1 + number2;
}

//Arrow function
const reduction = (a, b) => {
    return a - b;
}
//or
const reduction2 = (a, b) => a - b;

//Another way to declare function
let multiplication;
multiplication = function (x, y){
    return x * y;
}

console.log('---greeting---\n', greeting());
console.log('---addition---\n', addition(3,5));
console.log('---reduction---\n', reduction(3,2));
console.log('---reduction 2---\n', reduction2(7,3));
console.log('---multiplication---\n', multiplication(2,5));
