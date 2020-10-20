let hasAccount = false;

if (hasAccount) {
 console.log('Welcome back!')
}

let money = 5;

console.log('WHILE LOOPS');
while (money > 0) {
    console.log(money);
    money -= 1;
}

console.log('\n' + 'FOR LOOPS');
for (let amount = 0; amount < 10; amount += 1) {
    console.log(amount);
}

let playerNames = ['Mark', 'John', 'Wendy'];
console.log('\n' + 'FOR OF LOOPS');
for (name of playerNames) {
    console.log(name);
}