//  //var name = "Parag"
// let name = "Parag"
// console.log(name);
// name = "audi"
// console.log(name)
// const pi=3.14
// //pi = 22/7
// function count(){
//     var counter = 1;
//     console.log(counter)}
// //console.log(counter)
// for(let i= 0;i<5;i++){}
// //console.log(i)
// //1. 
// //var - redeclaration, reinitialization and function level scope
// //let - no redeclaration, reinitialization and block level scope
// //const - no redeclaration, no reinitializtion and block level scope
// //2. Arrow functions
// let noraisetopower = (num,power) => num**power;
// console.log(noraisetopower(2,6))
// //3. Default parameters
// let calcarea = (height=100,width=100) => height*width
// console.log(calcarea())
// console.log(calcarea(10))
// console.log(calcarea(20,10))
// //4. Template Literal
// let fname = "Parag"
// let lname = "Joshi"
// let job = "Program Manager"
// let info = `${fname} ${lname} is working as ${job}`
// console.log(info)
// //5. Destructuring Assignment
// let cars = ["BMW","VOLVO","RENAULT","AUDI","SUZUKI"]
// let[c1,c2,c3,c4,c5] = cars
// console.log(c1)
// let person = {name:"Parag","designation":"PM"}
//     let {cname,designation} = person
//     console.log(designation)


let emprecords = [
    {ename:"Parag",id:100,bsal:10000},
    {ename:"Prachi",id:101,bsal:13000},
    {ename:"Manas",id:200,bsal:9000},
    {ename:"Daesha",id:115,bsal:8000},
    {ename:"Anagha",id:104,bsal:20000}
]

let names =[]

//for traditional forloop
for (let index=0;index<emprecords.length;index++){
    names.push(emprecords[index].ename.toUpperCase())
}
console.log(names)

names =[]
for (const enames of emprecords){
    names.push(enames.ename.toLowerCase())
}
console.log(names)

names =[]
emprecords.forEach(enames=>{names.push(enames.ename.toUpperCase())})
console.log(names)


//Map -> The map() is used for creating a new array from an existing array , applying a function to each one of the elements of the existing array
//Filter -> The filter() takes each element in array and it applies a conditional statement against it. if the condition returns true the elements gets pushed to the output array else it will be skipped
//Reduce -> The reduce() reduces and array of values down to june one value. To get output value, it runs reducer function on each element of an array


var enames = emprecords.map(e=>e.ename.toLowerCase())
console.log("map ",enames)

var enames = emprecords.filter(e=>e.bsal>9000 && e.id>100)
console.log("filter", enames)

let totalsal = emprecords.reduce(((acc,e)=>acc+e.bsal),0)
console.log("Total Employee Salary",totalsal)




















