/*
functional programming is a paradigm of building computer programs using expressions and functions without mutating state
and data
*/

const add = (a,b) => a+b //pure function

//console.log(add(10,20))
const SECRET = 41
const getId = (a) => SECRET * a;  //impure function

let id_count = 3
const getIdC = () => ++id_count //impure function

const cars = ["BMW","VOLVO","RENAULT","AUDI","SUZUKI"]

cars.push("MG")

cars.forEach((car => {
    console.log(car)
}))
