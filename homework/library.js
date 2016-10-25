//3 types of functions - Named, Anonymous, Arrow
// function driveCar() {
//
// }
//
// var driveCar = function(doStuff) {
//     var stuffMessage = doStuff()
//     alert(stuffMessage)
//
//     return function() {
//         return 'Hello From Your Car' + stuffMessage
//         //alert('Hello From Your Car')
//     }
// }
// //arrow functions
// var greeting = driveCar(() => {
//     return('Zoom!')
// })
//
// console.log(greeting())
// var msg = greeting()
// document.body.innerHTML = greeting()
//
//
// function makeFood() {
//
//     var lettuce = true
//
//     function makeTacos() {
//         var chesse = true
//         console.log(lettuce)
//     }
//
// }
//
// if (true === true) {
//     let city = 'Indianapolis'
// }
// console.log(city)

//MAKING A LIBRARY
//IIFE - immediately invoked function expression
(function() {
    'use strict'//magic error checking stuff that is added to your code
    //HOMEWORK
    var one = function (selector) {
        return document.querySelector(selector)
    }

    var capitalizeFirst = function(word) {
        return word.charAt(0).toUpperCase() + word.substring(1)
    }

    var capitalizeAll = function(words) {
        return words.split('').map(capitalizeFirst).join('')
        //split takes our string and makes it into an array
        //map takes each word in the array and passes it through the capitalizeFirst function
        //join takes an array and makes it into an array
    }

//Example: padLeft('1', '0', 2) => 01
    var padLeft = function(word, char, length) {
        //padLeft('1', '0', 2) => 01
        //padLeft('1', '0', 3) => 001
        return char.repeat(length - word.length) + word
        //Better Example
        //If the word length is less than the specified length
        // if (word.length < length) {
        // //Then we want to put the char on the left side of the word
        //     var test = char.repeat(length - word.length) + word
        // }
        // //Then return that new value
        // return test
    }
    var padLeft = function(word, char = '0', length = 2) {
        //default arguments
        // char = char || '0'
        // length = length || 2


        return char.repeat(length - word.length) + word
    }

    //Saving all of these functions into a namespace
    window.dog = {
        //property name: function,
        capitalizeFirst: capitalizeFirst,
        capitalizeAll: capitalizeAll,
        pad: padLeft,
        one: one,
    }

}())







//HOMEWORK
