// Your DOM library code goes here inside of an IIFE and must set a global variables called md.
(function() {
    'use strict'
    //Number 1
    var one = function (selector) {
        return document.querySelector(selector)
    }

    var add = function() {
        var numbers = Array.from(arguments)

        var total = numbers.reduce(function(previousNumber, currentNumber) {
            return previousNumber + currentNumber
        }, 0)

        return total
    }

    //Number 2
    var all = function (selector) {
        return document.querySelectorAll(selector)
    }

    //Number 3
    // var remove = function (selector) {
    //     return document.querySelector(selector).remove()
    // }
    //Class Answer
    var remove = function (selector) {
        one(selector).remove()
    }

    // //Number 4
    // var addClass = function (selector, className) {
    //     return document.querySelector(selector).classList.add(className)
    // }
    //Class Answer
    var addClass = function (selector, className) {
        one(selector).classList.add(className)
    }

    //Number 5
    // var removeClass = function (selector, className) {
    //     return document.querySelector(selector).classList.remove(className)
    // }
    //Class Answer
    var removeClass = function (selector, className) {
        one(selector).classList.remove(className)
    }

    //Number 6
    // var hasClass = function (tag, className) {
    //     return document.querySelector(tag).classList.contains(className)
    // }
    var hasClass = function(selector, className) {
        one(selector).classList.contains(className)
    }

    //Number 7
    // var getAttr = function (selector, attribute) {
    //     return document.querySelector(selector).getAttribute(attribute)
    // }
    //Class Answer
    var getAttr = function (selector, attribute) {
        return one(selector).getAttribute(attribute)
    }

    //Number 8
    // var setAttr = function (selector, attriubute, value) {
    //     return document.querySelector(selector).setAttribute(attribute, value)
    // }
    //Class Answer
    var setAttr = function (selector, attribute, value) {
        one(selector).setAttribute(attribute, value)
    }

    //Number 9
    // var setHtml = function (selector, value) {
    //     return document.querySelector(selector).innerHTML = value
    // }
    //Class Answer
    var setHtml = function (selector, value) {
        one(selector).innerHTML = value
    }

    //Number 10
    // var getHtml = function (selector) {
    //     return document.querySelector(selector).innerHTML
    // }
    //Class Answer
    var getHtml = function (selector) {
        return one(selector).innerHTML
    }

    //Upside Down
    var flipPage = function () {
        return document.body.style.transform='rotate(180deg)'
    }
    // var colorPage = function (colorName) {
    //     return document.body.style.backgroundColor=colorName
    // }








    // //Adventure Mode
    // // Add an ajax() function that fetches API data.
    // var ajax = function(url, successCallback) {
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(successCallback)
    // }
    // // Add a getProp() function that gets an element's object property value.
    // var getProp = function(selector, property) {
    //     return one(selector)[property]
    // }
    // // Add a setProp() function that sets an element's object property value.
    // var setProp = function(selector, property, value) {
    //     one(selector)[property] = value
    // }
    // // Add a getValue() function that sets an form field's value attribute.
    // var getValue = function(selector) {
    //     return one(selector).value
    // }
    // // Add a setValue() function that sets an form field's value attribute.
    // var setValue = function(selector, value) {
    //     one(selector).value = value
    // }

    //Saving all of these functions into a namespace
    window.md = {
        //property name: function,
        one: one,
        add: add,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHtml: setHtml,
        getHtml: getHtml,
        flipPage: flipPage,
        // colorPage: colorPage,
        // //Adventure Mode
        // ajax: ajax,
        // getProp: getProp,
        // setProp: setProp,
        // getValue: getValue,
        // setValue: setValue,
    }

}())
