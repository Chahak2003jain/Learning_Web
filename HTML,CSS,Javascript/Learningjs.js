console.log("Hello world")

//Datatypes : var, let, const
//var is globally scoped whereas let is locally scoped. 
let a = 5
var b = 6
let c = null
let d = undefined
console.log(a)
console.log(b)
{
    let a = "Chahak"  //block scoped
    b = "jain"
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b) //global scoped

//let x=12 (Repeat declaration not allowed with let  but allowed with var)
//x=5  (let can be updated but not redeclared)
//const can neither be updated nor redeclared
//var variable are initialised with undefined whereas let and const variable are not initialised
const e = "Happy"
// p="Ending" //throw  error
// const e; //error as not initialised
console.log(e)

//There are 7 primitative data types:  NNSSBBU(Null,Number,Symbol,string,boolean,bigint,undefined) and non primitive data type is object
let m = null
let n = 345
let o = true
let p = BigInt("567")
let q = "Chahak"
let r = Symbol("I am a nice symbol")
let s = undefined
console.log(m, n, o, p, q, r, s)
console.log(typeof p)

//Objects:Non-primitive data type
const item = {
    "Chahak": true,
    "Dhwani": false,  //not mandatory to write keys in double quotes
    "Lovish": 56,
    "Neetu": undefined
}
console.log(item["Chahak"])
console.log(item) //printing complete list of key-value pair
//we can change the attributes inside const object but not  the type data stored by cons variable like:
const a1 = {
    name: "Chahak",
    age: 19,
    section: "A"
}
//a1=45 //error
a1['rollno'] = 12
a1['rollnoreverse'] = 21
console.log(a1)
console.log(a1.name)   //Another  way of accessing keys

//Expressions and conditions
"Chahak Jain"  //valid expression
let b1 = 45
let b2 = 4
console.log("b1+b2: ", b1 + b2)
console.log("b1*b2: ", b1 * b2)
console.log("b1/b2: ", b1 / b2)
console.log("b1-b2: ", b1 - b2)
console.log("b1**b2: ", b1 ** b2)
console.log("b1%b2: ", b1 % b2)
console.log("b1++: ", b1++)
console.log("b1--: ", b1--)
//comparison operators
//===: equal value and type
//!==: not equal value and type

//Conditional statements
const prompt = require("prompt-sync")();  //npm install prompt-sync in VS code
let pro = prompt("Hey what's your age?")  //always accepts string
console.log(typeof pro)
console.log(pro)   //prints the input taken by prompt
//typecasting:converting string into another data type
pro = Number.parseInt(pro)
console.log(typeof pro)
// const alert=require("alert-sync")();
// if (a > 0) {
//     alert("This is a valid age")
// }

//switch statement in javascript
let day;
switch (new Date().getDay()) {  //It takes day number between 0 to 6
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day)

//loops
for (let i = 0; i < 30; i++) {
    console.log(i);
}

let marks = {
    harry: 12,
    chahak: 89,
    dhwani: 90
}
console.log(marks)
//for in loop
for (let a in marks){
    console.log(a,":",marks[a]) //accesing keys of object created
}
//for of loop
for(let b of "Chahak")
{
    console.log(b)
}
