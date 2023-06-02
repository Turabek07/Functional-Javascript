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
   const thesis = {name:'Churchs',date:1930}
   function renamethesis(oldThesis,newName){
    return {
        name:newName,date:oldThesis.date
    }
   }
   const thesis2 = renamethesis(thesis,'Church-Turing')
   console.log(thesis);
   console.log(thesis2);