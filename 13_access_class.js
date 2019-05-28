"use strict";
exports.__esModule = true;
/**
 * To import a class its import that the class name is prefixed with an export keyboard in the source file.
 * use import keyword to import the class using below syntax.
 * import {classname} from 'relative path of the file'
 */
var _12_classes_typescript_1 = require("./12_classes_typescript");
console.log("***********Calling from Another file************************");
var classObj = new _12_classes_typescript_1.classDemo(123);
console.log(classObj.getSSN());
classObj.setUserName("Rana");
console.log(classObj.getUserName());
// FUNCTIONS: These are methods defined outside the class. 
function validateA() {
    console.log("I do not return any value");
}
function validateB(value) {
    return value + 1;
}
validateA();
console.log(validateB(99));
