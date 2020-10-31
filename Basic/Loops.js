/*We have 3 ways to declare a for:*/

/*the normal for*/
console.log('\n--- For ---');
for (let i = 0; i < 5; i++){
    console.log(i);
}
/*for in better use for objects*/
console.log('\n--- For in ---');
let person =  {firstName:"Isidro", lastName:"Fernando", age:21};
for (let values in person){
    console.log(values + " : " + person[values]);
}

/*for of better use for arrays*/
console.log('\n--- For of ---');
let cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
    console.log(car);
}

/*While*/
let flag = true;

console.log('\n--- while ---');// the conditional is the first in execute
while (flag !== false){
    if (flag === true){
        console.log('flag: ' + flag);
        flag = false;
    }
}

console.log('\n--- do while ---'); // the statement is the first in execute
do {
    if (flag === false){
        console.log('flag: ' + flag);
        flag = false;
    }
} while (flag !== false)
