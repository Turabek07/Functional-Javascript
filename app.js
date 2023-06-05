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