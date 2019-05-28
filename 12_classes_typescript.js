"use strict";
/**
 * Classes
 * properties and methods. Although property is nothing but a varible inside a class, but we will have to define them as username below instead of using let keyword.
 * and then later use a constructor use them.
 * these can be inherited.
 */
exports.__esModule = true;
var classDemo = /** @class */ (function () {
    function classDemo(ssn) {
        this.ssn = ssn;
        console.log("I am the constructor");
    }
    //Methods inside a class.
    classDemo.prototype.getUserName = function () {
        return this.username; //this will identify the current instance member of property username
    };
    classDemo.prototype.setUserName = function (username) {
        if (username === void 0) { username = "default_user"; }
        this.username = username;
    };
    classDemo.prototype.getSSN = function () {
        return this.ssn;
    };
    return classDemo;
}());
exports.classDemo = classDemo;
//Create object of the class and then use that object to refer the properties and methods.
// Always use a let outside the scope of class to create objects, variables as seen below. 
var a = new classDemo(123);
a.setUserName(); //This will print the default value for the argument
console.log(a.getUserName());
a.setUserName("Sushank"); //This will set the value as per the runtime argument.
console.log(a.getUserName());
var b = a.getUserName();
console.log(b);
console.log(a.getSSN());
