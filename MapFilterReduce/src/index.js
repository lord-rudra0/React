// var numbers = [3, 56, 2, 48, 5];





// using forEach=== MAP
// let newNumber=[];
// function double(num){
//     newNumber.push(num*2);
// }
// numbers.forEach(double);
// console.log(newNumber);

// numbers.forEach((num)=>
// {
//     newNumber.push(num*2);
// });
// console.log(newNumber);

// FILTER ===foreach
// let newNumber=[];

// numbers.forEach(function(num){
//     // return newNumber.push(num%2===0);
//     if(num%2===0)
//         newNumber.push(num);
// });
// console.log(newNumber);


// REDUCE===foreach
// let newNumber=0;
// numbers.forEach(function(num){
// newNumber+=num
// })
// console.log(newNumber);




            //Map -Create a new array by doing something with each item in an array.
//  function double(num){
//     return num*2;
//  }

// const new_map= numbers.map(double);
// console.log(new_map);

// const newNumber= numbers.map((num)=>
// {
//    return (num*2);
// })
// console.log(newNumber);





            //Filter - Create a new array by keeping the items that return true.
// const newNumber=numbers.filter(function(num){
//     return num%2===0;
// });
// console.log(newNumber);




//Reduce - Accumulate a value by doing something to each item in an array.
// let newNumber=numbers.reduce(function(num,sum){
//     console.log(num);
//     console.log("sum is ",sum);
//     return num+sum;
// })
// console.log(newNumber);



//Find - find the first item that matches from an array.
// const newNumber=numbers.find((num)=>
// {
//     return num>500;
// })
// console.log(newNumber);

//FindIndex - find the index of the first item that matches.
// const newNumber=numbers.findIndex((num)=>
//     {
//         return num===48;
//     })
//     console.log(newNumber);


import emojipedia from "./emojipedia";


const mean=emojipedia.map(function(mean){
return mean.meaning.substring(0,99)
});
console.log(mean)

console.log(mean);