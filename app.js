// Pure functions
// only input in
// only output out
// PURE //

// function greet(name){
//     return `hello ,${name}`
// }
// console.log(greet('Turabek'));

// FUNCTIONAL //

// function greeting(greet,name){
//     return `${greet},${name}`
// }
// console.log(greeting('Hi','Tim'));
// console.log(greeting('Hello','Turabek'));


// AVOID SIDE EFFECTS
// do nothing but return output
// based on nothing but input 

// NO SIDE EFFECTS 
// const thesis = { name: 'Churchs', date: 1930 }
// function renamethesis(oldThesis, newName) {
//     return {
//         name: newName, date: oldThesis.date
//     }
// }
// const thesis2 = renamethesis(thesis, 'Church-Turing')
// console.log(thesis);
// console.log(thesis2);


//  Pure Functions
// A pure function has two characteristics:

// No Side Effects: A pure function has no effect on the program or the world besides outputting its return value
// Deterministic: Given the same input values, a pure function will always return the same output.This is because its
//  return value depends only on its input parameters, and not on any other information(e.g.global program state)

// ======================================================================================================================== //
// ITERATION //                   // RECURSION //
// imperative                      // functional    
// looping                         // self - referential
// stateful                        // stateless

// Iterative Fibanacci

// function iterativeFibanaci(n){
//     if(n===0) return 0;
//     if(n===1) return 1;

//     let previous = 0;
//     let current = 1;
//     for(let i = n;i>1;i--){
//         let next = previous + current;
//         previous = current;
//         current = next;
//     }
//     return current;
// }
// console.log(iterativeFibanaci(2));
// console.log(iterativeFibanaci(6));
// console.log(iterativeFibanaci(10));
// console.log(iterativeFibanaci(20));


// RECURSIVE FUNCTIONS
// function recursiveFibanacci(n){
//     if(n===0) return 0;
//     if(n===1) return 1;
//     return recursiveFibanacci(n-2) + recursiveFibanacci(n-1)
// }
// console.clear()
// console.log(recursiveFibanacci(2));
// console.log(recursiveFibanacci(6));
// console.log(recursiveFibanacci(10));
// console.log(recursiveFibanacci(20));


// ============================================================================================================================= //
// HIGHER--ORDER FUNCTIONS //  // MAP,FILTER & REDUCE //
     // FILTER //
// function isEven(n) {
//      return n % 2 === 0
// }

// odds = filter(n => {
//      return n % 2 !== 0
// }, wholes)


// odds2 = filter(n => {
//      return !isEven(n)
// }, wholes)


// greaterThanFour = filter(
//      (n) => {
//           return n > 4
//      },
//      wholes
// )


// function isPrime(n) {
//      if (n <= 1) {
//           return false
//      }
//      for (let i = 2; i <= Math.sqrt(n); i++) {
//           if (n % i === 0) {
//                return false;
//           }
//      }

//      return true;
// }

// ======================================================= //
    // MAP //
//  map = f(fn,array)
//  function map(fn,array){
//      if(length(array)) return [];
//      return [fn(head(array))].concat(map(fn,tail(array)))
//  }
//  double = Array(11) [0,1,2,3,4,5,6,7,8]
//  double = map(n => n * 2,wholes)

// fizzBuzz = map(n => {
//      const fizzed = n % 3 === 0 ? 'fizz' : '';
//      const buzzed = n % 5 === 0 ? 'buzz' : '';
//      return fizzed || buzzed ? fizzed + buzzed : n;
//    }, wholes)

 // ====================================================== //
// REDUCE //

// sum = reduce(
//      (accumulator, value) => {
//           return accumulator + value
//      },
//      0,
//      wholes
// )

// const numbers = [10, 5, 8, 20, 3, 15];

// const max = numbers.reduce((acc, curr) => {
//      return Math.max(acc, curr);
// });

// console.log(max);


// max = reduce(
//      (acc, val) => {
//        return val > acc ? val : acc;
//      },
//      0,
//      [7, 1, 3, 5, 6, 2, 8, 10, 0, 4, 9]
//    )