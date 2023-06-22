//predictable

// function customMap(arr){
//     const result = []
//     // write your code here
//     for(let i = 0; i < arr.length;i++){
//         result.push(arr[i] + 2)
//     }
//     return result
//  }
//  console.log(customMap([1,2,3,4]));
//  console.log(customMap([1,2,3,4]));

// let cart = [
//     { name: 'Apple', category: 'Fruit', quantity: 10, price: 0.5 },
//     { name: 'Orange', category: 'Fruit', quantity: 5, price: 0.8 },
//     { name: 'Broccoli', category: 'Vegetable', quantity: 2, price: 1.5 },
//     { name: 'Carrot', category: 'Vegetable', quantity: 8, price: 0.2 },
//     { name: 'Chicken', category: 'Meat', quantity: 1, price: 10 }
//   ]
// let cartNames = cart.map(function(value){
//     return value.name
// })
// console.log(cartNames);




//   const result = cart.reduce((acc, eachVal) => {
//     const newObj = {};
//     newObj.name = eachVal.name;
//     newObj.totalPrice = eachVal.quantity * eachVal.price;
//     acc.push(newObj);
//     return acc;
//   }, []);

// console.log(result);
//   let fruits = cart.filter((value) => value.category === 'Fruit')
//   let vegatables = cart.filter(value => value.category === 'Vegetable' )

// //   let objeFruVeg = {
     
// //   }
//   let sumFruits = fruits.reduce((acc,value)=> acc + value,{})
// //   let sumVege = vegatables.reduce((acc,value)=> acc + value)

// ================================================================================================================================================================== //


// function divisible_by_b(a,b){

// }

// function format_date(a){

// }


// function add(a,b){
//     return Number(a) + Number(b)
// }
// console.log(add('111','111'));
// console.log(add('','20'));


// function list_of_Multiplies(a,b){
//     let result = []
//     for(let i = 1; i <= b;i++){
//         result.push(a * i)
//     }
//     return result
// }
// console.log(list_of_Multiplies(7,5));


// function make_rug(a, b, c) {
//     let result = [];
//     for (let i = 0; i < a; i++) {
//       let m = "";
//       result.push(m);
//       for (let j = 0; j < b; j++) {
//         m += c;
//       }
//     }
//     return result;
//   }
  
//   console.log(make_rug(3, 5, 'A'));

let cart = [
    { name: 'Apple', category: 'Fruit', quantity: 10, price: 0.5 },
    { name: 'Orange', category: 'Fruit', quantity: 5, price: 0.8 },
    { name: 'Broccoli', category: 'Vegetable', quantity: 2, price: 1.5 },
    { name: 'Carrot', category: 'Vegetable', quantity: 8, price: 0.2 },
    { name: 'Chicken', category: 'Meat', quantity: 1, price: 10 },
  ];
//   let cart2 = cart;
//   console.log(cart.length,cart2.length);
//   cart2.pop();
//   console.log(cart.length, cart2.length);

  

