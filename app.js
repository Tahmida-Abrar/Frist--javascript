//variables
var name = "mim";
var age = 30;
var temperature = "28.567deg cel";
var address = "123, Puran Dhaka -1206";

//console.log(name);
//console.log(age);
//console.log(name, age, address);

//data types
//primitive data type (countable, easy or simple)
//number
var mynumber = 20;
//console.log(typeof mynumber); typeof---check data type
//string
var myname = "suma";
//console.log(typeof myname);
//Boolean(
var isCold = true;
var isSheCute = false;
//console.log(typeof isSheCute);
//null
//undefined
//non primitive data type (complex)

//let, const and var
//declare
var speed = 85;
//re-declare
//var speed = 95;
//assign
speed = 95;

//console.log(speed);

//let
//declare
let herName = "tahmida";
//re-declare
herName = "toma";

//console.log(herName);

//const
const isRaining = true;
//re-declare
//const isRaining = false;

//assignment not possible
//isRaining = false;

//console.log(isRaining);

//variable naming convention
const backBencherFriendName = "Rifat";
//const HISNAME = "Mamun";
const PI = 3.1416;
//const BIKESEEPD = 1.2%;

//kabab case
//const BootSpeed = 1.2%;
//const function = 10;

// math operation
const a = 5;
const b = 10;

const sum = a + b;
const diff = a - b;
const product = a * b;
const div = a / b;
//modulus
const remainder = a % b;
const sq = a ** b;

/*console.log(sum);
console.log(diff);
console.log(product);
console.log(div);
console.log(remainder);
console.log(sq);*/

//assignment operation
let num1 = 15;
num1++;

//console.log(num1);

//comparison operators
// >, <, >=, <=, ==, !=

/*console.log(10 > 6);
console.log(10 > 11);
console.log(10 < 11);
console.log(10 >= 11);
console.log(10 != 11);*/

//strings and template literals
//const myParagraph = "This \n is \n my first \n paragraph";
const myParagraph = `This
is
      my
    best
  paragraph`;
//console.log(myParagraph);

const studentName = "Taskin";
const myAge = 22;
const sentence = `My name is ${studentName} and I am ${myAge} years old.`;

//console.log(sentence);

//conditions
if (myAge > 22) {
  //console.log("She can marry now.");
} else {
  //console.log("She can not.");
}

//burger inciudent arc
const broName = "Adil";
const pocketMoney = 500;

if (broName == "Adil") {
  if (pocketMoney >= 500) {
    console.log("Adil can buy burger.");
  } else {
    console.log("Adil can not buy.");
  }
} else {
  console.log("Not applicable for you.");
}
