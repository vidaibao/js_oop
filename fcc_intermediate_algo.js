/**
 * Diff Two Arrays
 * 
 * Check two arrays and return a new array that contains only the items that are not in either of the original arrays
 * 
 * 
 * 
 */

function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]



/**
 * Seek and Destroy
You will be provided with an initial array as the first argument to the destroyer function, 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

The function must accept an indeterminate number of arguments, also known as a variadic function. 
You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
 * 
 * 
 * 
 */

function destroyer(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(val => !valsToRemove.includes(val));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



/**
 * Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 * 
 * 
 * >>> Basically while the second argument is not true, you will have to remove the first
 *  element from the left of the array that was passed as the first argument
 * 
 */





/**
 * Steamroller
Flatten a nested array. You must account for varying levels of nesting.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
function steamrollArray1(arr) {
    const flattenArray = []
    
    for(const i of arr) {
      if(Array.isArray(i)){
        flattenArray.push(...steamrollArray1(i)) // ... spread an array to elements for push() method
      } else {
        flattenArray.push(i)
      }
    }
    return flattenArray;
}
  
function steamrollArray(arr) {
    const flat = [].concat(...arr); // Use spread operator to concatenate each element of arr with an empty array
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat; // find out if the new array contains an array still
}
// console.log([].concat(...[1, [2], [3, [[4]]]]))
// console.log([1, [2], [3, [[4]]]].flat().flat()) // [ 1, 2, 3, [ 4 ] ]
steamrollArray([1, [2], [3, [[4]]]]);



/**
 * Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
 * 
 * 
 * 
 * 
 */
function binaryAgent(str) {
    var biString = str.split(" ");
    var uniString = [];
  
    /*using the radix (or base) parameter in parseInt, we can convert the binary
        number to a decimal number while simultaneously converting to a char*/
  
    for (var i = 0; i < biString.length; i++) {
      uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
  
    // we then simply join the string
    return uniString.join("");
  }
  


function binaryAgent(str) {
    return String.fromCharCode(
      ...str.split(' ').map(x => parseInt(x, 2)));
}
  
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



/**
 * 
 * Everything Be True
 * 
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object 
property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
 * 
 * 
 */
function truthCheck(collection, pre) {
    for(const obj of collection){
      console.log(obj[pre])
      if(!obj[pre]) return false
    }
    return true;
}
  
function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => obj[pre]);
}
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");




/**
 * Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
 * 
 * 
 * Hint 1
Every time you deal with an argument, you have to check if it is defined and if it is a number.

Hint 2
When working on the case that it needs to return a function, 
using closure can help you write the new function in terms of addTogether().

Hint 3
The early return pattern can simplify your code.
 */

function addTogether() {
    const [first, second] = arguments;
  
    function addSecond(second) {
      if (typeof (second) === "number") return first + second;
    }
  
    if (typeof (first) === "number") {
      if (arguments.length === 1) return addSecond;
      if (arguments.length === 2) return addSecond(second);
    }
}



/**
 * Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
Run the tests to see the expected output for each method. 
These methods must be the only available means of interacting with the object. 
Each test will declare a new Person instance as new Person('Bob', 'Ross').
 * 
 * 
 * Problem Explanation
You will need a closure to hold data that is not a property.
Two local variables hold the two names for the object.
For the full name getter and setter, we use the first and last name getters/setters.
 */

const Person = function(first, last) {
    let firstName = first
    let lastName = last
    // Getter
    this.getFullName = function() {
      return firstName.concat(' ', lastName);
    };
    this.getFirstName = function (){
      return firstName
    }
    this.getLastName = function (){
      return lastName
    }
    // Setter
    this.setFirstName = function (first){
      firstName = first
    }
    this.setLastName = function (last){
      lastName = last
    }
    this.setFullName = function (first, last){
      firstName = first
      lastName = last
    }
    
};





/**
 * Map the Debris
 * 
According to Kepler's Third Law, the orbital period  T
  of two point masses orbiting each other in a circular or elliptic orbit is:

T=2πa3μ−−−√
 
a
  is the orbit's semi-major axis
μ=GM
  is the standard gravitational parameter
G
  is the gravitational constant,
M
  is the mass of the more massive body.
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
 * 
 * 
 * GM and earthRadius are both given to us.
To make the code easier to edit and read, each part of the equation is written separately.
Create newArr to store the orbPeriod's.
a is 2 times pi. The part that is a constant is on the global scope while the rest is part of a function.
Create a function, gerOrbPeriod() that will do the required work for any amount of objects.
c is (earthRadius + avgAlt) to the cube.
b is the square root of c divided by GM.
Create orbPeriod to store the product of a and b, with the Math.round() function applied to round up to the next whole number.
Then we delete the key avgAlt, and add the new key and its value.
 */



function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];
  
    const getOrbPeriod = function(obj) {
      const c = Math.pow(earthRadius + obj.avgAlt, 3);
      const b = Math.sqrt(c / GM);
      const orbPeriod = Math.round(a * b);
      // create new object
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
  
    for (let elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
}
  
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);