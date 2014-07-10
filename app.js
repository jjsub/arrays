//app.js
//
//This code explores arrays. It also uses a new node module called chalk that 
//allows you to have output in different colors.  The code shows some basic 
//ways to manipulate arrays.  The final project asks the user to type in  number
//and stores the numbers until the user quits.  Then the program sums all the 
//numbers that were entered.
//
//Z.Ames 7/10/14

//load modules
var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

//examples of using chalk
console.log(chalk.blue('this is blue text'));
console.log(chalk.blue.bgRed.bold('this is blue text on a red background'));
console.log(  chalk.green('I am a green line ' + chalk.blue('with a blue substring') + ' that becomes green again!')  );

//define an array
var evens = [2, 4, 6, 8,10,12,14,16, 18, 20];

console.log(evens);
console.log(evens);
console.log(chalk.red(evens[1]));


//loop through numbers
for (var i = 0; i<10; i++){
  console.log(i);
}

//print even numbers blue and odd numbers red - use modulus (%) to get remainder
for (var i = 0; i<10; i++){
  if (i%2 === 0 ){
    //even
    console.log(chalk.red(i))
  }else{
    //odd
    console.log(chalk.yellow(i))
  }
}


for (var j = 0; j < evens.length; j++){
console.log('evens -> '+ evens[j]);
}


//prompts user to inset numbers then sums them
var numbers = [];
var response = prompt('Enter a number or (q)uit: ');

while (response != 'q'){
  response = parseInt(response);//converts string to number
  numbers.push(response)  //pushes number to array
  response = prompt('Enter a number or (q)uit: '); //re-prompt
}
console.log('The numbers you entered are: '+ numbers);

var sum=numbers[0];
for(var k=1; k < numbers.length; k++){
sum=sum+numbers[k]
}
console.log('The sum of your numbers is: '+sum);
