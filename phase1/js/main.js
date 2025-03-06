//(1)variable declaration

// var: Function-scoped or globally-scoped, can be re-declared and updated
// let: Block-scoped, can be updated but not re-declared within the same scope
// const: Block-scoped, cannot be updated or re-declared




// var x = 5;
// const y = 6;
// let z = 7;



//(2)console



// console.log(x)
// console.error(y)
// console.warn(z)



//(3)-data types 


// Primitive data types: string, number, boolean, null, undefined, symbol



// const x = 5
// const y = 'Hello'
// const z = true
// const a = null
// const b = undefined
// let c;
// const d = [1,2,3,4,5]
// const e = {name: 'john', age: 30}
// const f = new Date()
// const g = Symbol()
// const h = function(){
//     return 'hello'
// }

// console.log(x,typeof x)
// console.log(y,typeof y)       
// console.log(z,typeof z)
// console.log(a,typeof a) 
// console.log(b,typeof b)
// console.log(c,typeof c)
// console.log(d,typeof d)
// console.log(e,typeof e)
// console.log(f,typeof f)
// console.log(g,typeof g)
// console.log(h,typeof h)


//(4)loops

//for loop

// for(let i = 0; i < 10; i++){
//     console.log('for',i)
// }

// while loop

// let i = 0
// while(i < 10){
//     console.log('while',i)
//     i++
// }


//(5)if else

// * == vs === vs =

//|| //or
//&& //and

// const x = 10
// if(x === 10){
//     console.log('x is 10')
// }else{
//     console.log('x is not 10')
// }

//(6)functions

// function addNums(num1 = 1, num2 = 1){
//     return num1 + num2
// }


// console.log(addNums(5,5))

//arrow function

// const addNums = (num1 = 1, num2 = 1) => num1 + num2

// console.log(addNums(5,5))

// *arrow fuction vs regular function



// (7)object



// const car = {
//     name: 'BMW',
//     year: 2020,
//     color: 'black',
//     getCar: function(){
//         return `The car is ${this.name} and it is ${this.color}`
//     }
// }

// console.log(car.getCar())

// car.color = 'red' //change
// console.log(car.getCar())

// delete car.color //delete

// car.price = 50000 //add


// console.log(car)




//destructuring


// const color = car.color

// const {name, year} = car




// (8)array


// const fruits = ['apple', 'banana', 'orange']

// console.log(fruits[1])

// fruits.push('mango') //add to end

// fruits.splice() //remove last element

// fruits.pop() //remove last element

// fruits[1] = 'grapes' //change

// console.log(fruits)

//destructuring

// const [fruit1, fruit2] = fruits

// console.log(fruit1, fruit2)

// fruits.find(fruit => fruit === 'apple') //find



// (9)map 

// *map vs loop

// *The Array entries() Method

// *The Array every() Method

// *The Array filter() Method

// *The Array forEach() Method

// *The Array keys() Method

// *The Array map() Method

// *The Array reduce() Method

// *The Array some() Method

// *The Array values() Method

// *The Array indexOf() Method

// *The Array lastIndexOf() Method


// *The Array findIndex() Method

// *The Array from() Method

// *The Array isArray() Method


// const users = [
//     {id: 1, name: 'john'},
//     {id: 2, name: 'sara'},
//     {id: 3, name: 'karen'}
// ]
// const usersNames = users.map(user => user.name)

// const ids = users.map((user,i)=>{
//     console.log(user)
//     console.log()
// })

// console.log(usersNames.includes('john')) 

// console.log(users.includes({id: 1, name: 'john'})) // why false 


// console.log(ids)


//(10) local storage and session storage

// localStorage.setItem('name', 'john')
// localStorage.setItem('age', 30)

// localStorage.removeItem('name')

// localStorage.clear()

// const name = localStorage.getItem('name')
// const age = localStorage.getItem('age')




// sessionStorage.setItem('name', 'john')
// sessionStorage.setItem('age', 30)

// sessionStorage.removeItem('name')

// sessionStorage.clear()

// const name = sessionStorage.getItem('name')
// const age = sessionStorage.getItem('age')



// crud operations //

// create
// read
// update
// delete

// const users = [
//     {id: 1, name: 'john'},
//     {id: 2, name: 'sara'},
//     {id: 3, name: 'karen'}
// ]

// //create
// function createUser(user){

// }

// //read
// function readUser(id){
    
// }

// //update
// function updateUser(id, newName){
 
// }

// //delete

// function deleteUser(id){
// //1

// //2

// }



// console.log(users)

