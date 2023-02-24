/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of parameters
and returns a function.

The returned function will also accept any number of parameters and will
return a string including all of the parameters of smoothieMachine as well
as the returned function's parameters. Look at the examples for a guide of
how your return should be formatted!

See below for examples:

let smoothie1 = smoothieMachine();


// prints "I'm having a smoothie with milk"

// prints "I'm having a smoothie with milk and kale and spinach"

// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

const smoothieMachine = () => {
  let smoothie = "I'm having a smoothie with";
  let beginning_arr = smoothie.split(' ');
  return function(...ingredients) {
    let newArr = ingredients.map(function(element){
       element = element + ' and';
       return element;
    });

   beginning_arr = beginning_arr.concat(newArr);
    let saying = beginning_arr.join(' ');
    let finalSaying = saying.substring(0, saying.length -4);

    return finalSaying;

  }
};
let smoothie1 = smoothieMachine();
console.log(smoothie1("milk"));
console.log(smoothie1("kale", "spinach"));
console.log(smoothie1("honey", "pears", "berries"));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  return null;
}
