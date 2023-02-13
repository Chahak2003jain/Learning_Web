//higher order arrays
//map() function-->creates a new array by performing same operation on each array element
let arr = [45, 23, 36, 78]
console.log("Using map function")
let a = arr.map((value, index, array) => {    //it creates new array
    console.log(value, index, array)
    return value + index;
})
console.log(a)   //new array formed
console.log("Without map function")
console.log(arr)

//Array filter method-->filters an array with values  that passes a test, creates a new array
let arr2 = [45, 23, 21, 0, 3, 5]
let b = arr2.filter((a) => {
    return a < 10
})
console.log(b)
//These functions do not modify the original array

//Array reduce method-->reduces an array to single element
let arr3 = [1, 2, 3, 4, 5, 6, 2, 1]
let c = arr3.reduce((c1, c2) => {
    return c1 + c2
})
console.log(c)
//Another way can be
const reduce_arr = (a1, b1) => {
    return a1 + b1;
}
let d = arr3.reduce(reduce_arr)
console.log(d)
