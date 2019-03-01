// GOOD AUTHORS DIVIDE THEIR BOOKS INTO CHAPTERS,
// GOOD PROGRAMMERS DIVIDE THEIR PROGRAMS INTO MODULES

// GOOD MODULES ARE HIGHLY SELF-CONTAINED WITH DISTINCT,
// FUNCTIONALITY. THEY DO NOT DISRUPT THE SYSTEMS AS A WHOLE.

// A WELL-DESIGNED MODULE LESSENS DEPENDENCIES ON PARTS OF THE,
// CODEBASE AS MUCH AS POSSIBLE.

// MODULES HELP AVOOID GLOBAL NAMESPACE POLLUTION.

// MODULES CAN BE REUSED OVER AND OVER AGAIN IN DIFFERENT,
// PARTS OF DIFFERENT OBJECTS.

// MODULE PATTERN MIMICS THE CONCEPT OF CLASS PATTERNS USING CLOSURE.
// CAN STORE PUBLIC AND PRIVATE METHODS AND VARIABLES INSIDE,
// A SINGLE OBJECT. 


// THE BELOW FUNCTION ALLOWS US TO HIDE VARIABLES FROM THE GLOBAL SCOPE.

// let global = `hello, i'm a global variable!`;

// (function() {
//     // keep these variables private inside this closure scope

//     let myGrades = [93, 95, 88, 0, 55, 91];

//     let average = function() {
//         let total = myGrades.reduce(function(accumulator, item) {
//             return accumulator + item
//         }, 0);

//         return `Your average grade is ${total / myGrades.length}.`;
//     }

//     let failing = function() {
//         let failingGrades = myGrades.filter(function(item) {
//             return item < 70;
//         });
//     return `You failed ${failingGrades.length} times.`;
//     }
//     console.log(failing());
//     console.log(global);
// })();


// GLOBAL IMPORT
// DECLARE A GLOBAL VARIABLE UPFRONT, DO WORK INSIDE OF ANNONYMOUS CLOSURES

// OBJECT INTERFACE

// THIS APPROACH ALLOWS GREAT CONTROL OVER WHAT VARIABLES TO KEEP,
// PRIVATE, AND WHAT VARIABLES TO EXPOSE IN THE RETURN STATEMENT.

// let myGradesCalculate = (function() {
//     // keep these variables private inside this closure scope

//     let myGrades = [93, 95, 88, 0, 55, 91];

//     // shows the functions via an interface, but hides the implementation withing the function() block
//     return {
//         average: function() {
//             let total = myGrades.reduce(function(accumulator, item) {
//                 return accumulator + item
//             }, 0);
    
//             return `Your average grade is ${total / myGrades.length}.`;
//         },
    
//         failing: function() {
//             let failingGrades = myGrades.filter(function(item) {
//                 return item < 70;
//             });
//         return `You failed ${failingGrades.length} times.`;
//         }
//     }
// })();

// console.log(myGradesCalculate.failing());
// console.log(myGradesCalculate.average());



// REVEALING MODULE PATTERN
// ENSURES ALL METHODS AND VARIABLES ARE KEPT PRIVATE UNTIL EXPLICITLY EXPOSED.

// let myGradesCalculate = (function() {
//     // keep these variables private inside this closure scope

//     let myGrades = [93, 95, 88, 0, 55, 91];

//     let average = function() {
//         let total = myGrades.reduce(function(accumulator, item) {
//             return accumulator + item
//         }, 0);

//         return `Your average grade is ${total / myGrades.length}.`;
//     }

//     let failing = function() {
//         let failingGrades = myGrades.filter(function(item) {
//             return item < 70;
//         });
//     return `You failed ${failingGrades.length} times.`;
//     }
    
//     // EXPLICITLY REVEAL PUBLIC POINTERS TO THE PRIVATE,
//     // FUNCTIONS THAT WE WANT TO REVEAL PUBLICLY.

//     return {
//         average: average,
//         failing: failing
//     }
// })();

// console.log(myGradesCalculate.failing());
// console.log(myGradesCalculate.average());



// COMMON JS

// COMMONJS MODULE IS A REUSABLE PIECE OF JS, WHICH EXPORTS,
// SPECIFIC OBJECTS, MAKING THEM AVAILABLE FOR OTHER MODULES,
// TO 'REQUIRE' IN THEIR PROGRAMS.

// WITH COMMONJS, EACH JS FILE STORES MODULES IN IT'S OWN UNIQUE,
// MODULE CONTEXT. (JUST LIKE WRAPPING IT IN A CLOSURE).

// WE USE 'MODULE.EXPORTS' TO EXPOSE MODULES,
// AND 'REQUIRE' TO IMPORT THEM.

// function myModule() {
//     this.hello = function() {
//         return 'hello!';
//     }

//     this.goodbye = function() {
//         return 'goodbye!';
//     }
// }

// myModule.exports = myModule;


// let myModule = require('./myModule');

// let myModuleInstance = new myModule();

// console.log(myModuleInstance.hello());
// console.log(myModuleInstance.goodbye());


// define(['myModule'], function(myModule, myOtherModule) {
//     console.log(myModule.hello());
// });

// MY MODULE MIGHT LOOK LIKE THIS:

// define([], function() {

//     return {
//         hello: function() {
//             console.log('hello');
//         },
//         goodbye: function() {
//             console.log('goodbye');
//         }
//     };
// });

// COMMONJS ONLY SUPPORTS OBJECTS AS MODULES
// AMD SUPPORTS OBJECTS, FUNCTIONS, CONSTRUCTORS, STRINGS, JSON, ETC. AS MODULES



// UMD (UNIVERSAL MODULE DEFINITION)

// (function (root, factory) {
//     if(typeof define === 'function' && define.amd) {
//         // AMD
//         define(['myModule', 'myOtherModule'], factory);
//     } else if (typeof exports === 'object') {
//         // COMMON JS
//         module.exports = factory(require('myModule'), require('myOtherModule'));
//     } else {
//         // BROWSER GLOBALS
//         root.returnExports = factory(root.myModule, root.myOtherModule);
//     }
// }(this, function (myModule, myOtherModule) {
//     // METHODS
//     function notHelloOrGoodbye(){}; // private method
//     function hello(){}; // public method because it's returned
//     function goodbye(){}; // public method because it's returned

//     // EXPOSED PUBLIC METHODS
//     return {
//         hello: hello,
//         goodbye: goodbye
//     }
// }));



// NATIVE JS

// ES6 OFFERS BUILT IN MODULES

// IMPORTS ARE 'LIVE' AND READ-ONLY VIEWS OF THE EXPORTS.


// let counter = 1;

// function increment() {
//     counter++;
// }

// function decrement() {
//     counter--;
// }

// module.exports = {
//     counter: counter,
//     increment: increment,
//     decrement: decrement
// };


// let counter = require('app2');

// counter.increment();
// console.log(counter.counter);

// console.log('hi');

// export let counter = 1;

// export function increment() {
//     counter++;
// }

// export function decrement() {
//     counter--;
// }

// /////////

// import * as counter from '/counter';

// console.log(counter.counter); // 1
// counter.increment();
// console.log(counter.counter); // 2