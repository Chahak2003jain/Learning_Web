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
for (let a in marks) {
    console.log(a, ":", marks[a]) //accesing keys of object created
}
console.log("Length of object: ", Object.keys(marks).length) //print total no. of keys in an object marks
//for of loop
for (let b of "Chahak") {
    console.log(b)
}

//functions
function onePlusAvg(x, y)    //creating function
{
    return 1 + (x + y) / 2;
}
console.log("After calling the function:", onePlusAvg(2, 2))
//arrow function--another way of writing a function
const sum = (p, q) => {
    return p + q
}
console.log("Sum: ", sum(3, 3));

//Strings
let name = "Chahak";
console.log(name.length);   //returns length of string--works like character array
//template literals--use backticks
let girl1 = "Heena"
let girl2 = "Sheena"
let sentence = `${girl1} is a friend of ${girl2}`
console.log(sentence)
//When we insert variable directly in template literal, it is known as string interpolation
//Escapesequence characters
let fruit = 'Ban\'ana'
console.log(fruit)
//string methods
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2, 4))
console.log(name.slice(2))
console.log(name.replace("Cha", "Ma"))
console.log(name.concat(" Jain"))
console.log(name.trim())

//Arrays
let arr = [1, 2, 3, 34, 4, 9]
console.log(typeof arr) //Array is a type of object
//Array methods
let brr = arr.toString() //brr is now a string
console.log(brr)
console.log(arr.join("_"))  //works as connector
console.log(typeof brr)
console.log(arr.pop())  //changes the original array and returns the  popped element
console.log(arr.push(56))  //push returns the new array length
console.log(arr)
console.log(arr.shift(), arr)  //shift removes the first element and returns it
console.log(arr.unshift(12), arr)  //it adds the element at first and returns new array length
delete arr[0]
console.log(arr, arr.length)   //array length is not affected after deletion
let arr2 = [7, 8, 9, 10]
console.log(arr.concat(arr2), arr)  //original array is not affected
let bro = [0, 0, 0, -1]
console.log(arr.concat(bro, arr2))  //can concat more than one array together at a time
bro.sort()   //change the original array
console.log(bro)
let compare = (a, b) => {
    return b - a
}
bro.sort(compare)  //sorting in descending order using a function
console.log(bro)
bro.reverse()
console.log(bro)
//splicing and slicing
let arra = [4, 5, 6, 7, 8, 9]
let dvalues = arra.splice(2, 3, 11, 12, 13)
console.log(arra)
console.log(dvalues)   //prints deleted elements
console.log(arra.slice(2, 5))   //creates new array, does not modify the original one
//Looping through arrays
for (let i = 0; i < arra.length; i++) {
    console.log(arra[i]);
}
//forEach Loop
arra.forEach((element) => {   //forEach can be used to access each element of array
    console.log(element * element);
})
//Array.from -> used to create an array from any other object
let name1 = 'Chahak'
let ar = Array.from(name1)
console.log(ar)
//for...of---to access the elements of array
for (let ij of arra) {
    console.log(ij);
}
//for..in
for (let h in arra) {
    console.log(h); //prints keys
    console.log(arra[h])  //prints the elements
}