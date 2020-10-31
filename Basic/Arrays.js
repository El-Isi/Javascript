let iceCream = ['vanilla', 'chocolate', 'strawberry'];
let prices = [3.5, 3.7, 3.9];

console.log('\n---Iterating in the array---');
for (let i = 0; i < iceCream.length; i++){
    console.log(iceCream[i] + " $" + prices[i]);
}

console.log('\n---Adding new element---');
iceCream.push('lemon');
prices.push(3.3);

console.log(iceCream[3] + " $" + prices[3]);

console.log('\n---Reducing the arrays---');
iceCream.pop();
iceCream.pop();
prices.pop();
prices.pop();

for (let i = 0; i < iceCream.length; i++){
    console.log(iceCream[i] + " $" + prices[i]);
}
