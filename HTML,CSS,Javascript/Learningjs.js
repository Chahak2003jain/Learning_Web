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

// let x=12 (Repeat declaration not allowed with let  but allowed with var)
// let x=5  (let can be updated but not redeclared)
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
