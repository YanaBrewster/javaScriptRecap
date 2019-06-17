// console.log("hello");
// function favouriteColour(colour){
//   console.log('Your favourite colour is ' + colour);
// }
//
// favouriteColour('red');
// favouriteColour('blue');
// favouriteColour('green');

function calculate(x){
  var result = x * 10;
  return result;
}

var firstNumber = calculate(2);
console.log(firstNumber);
var secondNumber = calculate(3);
console.log(secondNumber);

for (var i = 0; i < 20; i++) {
  var calc = calculate(i);
  // console.log(calc);
}

function removeSpaces(word){
  var newString = word.split(' ').join('_').toLowerCase();
  return newString;
}


var username = removeSpaces('hello there');
console.log(username);

var names = ['Gen Deer', 'Jo King'];
var names2 = [];
for (var i = 0; i < names.length; i++) {
  var newName = removeSpaces (names[i]);
  names2.push(newName);
}

console.log(names);
console.log(names2);

var extraPerson = removeSpaces("Lena Berry");
console.log(extraPerson);
