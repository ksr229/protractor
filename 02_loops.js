

//for loop:ITerates for as long as the condition is true.

for (var i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("*******");

//while loop: If the condition is true then perform the action.
var j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}
console.log("*******");
var k = 0;

//do-while loop: Executes the command atleast once before checking the condition.
do {
    console.log(k);
    k++;
} while (k < 5)

//ARRAYS and Iterable
console.log("$$$$$$$$$$$$$$$$$$$$$$$")

var b = ['one', 'two', 'three'];  //An arrray can be defined like this.
var c = ['one', 2, 'three'];      //An array can have string and int together

console.log(c[1]);
console.log("The length of the array is:  " + b.length);  // Length of an Array can be found out by the property
//An array can be iterated using the loops.
for (var i = 0; i < b.length; i++) {
    console.log(b[i]);
}

// Initializing a new Array

var d = new Array();
console.log(d);
for (i = 0; i < 5; i++) {
    d[i] = i + 1;
}
console.log(d.constructor); // Gives the CONSTRUCTOR PROPERTY of all javascript variables
console.log(d);
console.log(d.length);

var e = 1;
console.log(String(e))  //TYPECASTING
console.log(typeof String(e)); // typeof OPERATOR
console.log(String(e).constructor);
console.log(e.toString());
console.log(Date());
console.log(Date().toString());  //DATE function and Converting it to string

//Reversing an Array
console.log("Print the Array in REVERSE order: ");
var revstr = new Array();
j=0;
for (i = (d.length - 1); i >= 0; i--) {
    revstr[j] = d[i];
    j++;
}
console.log(revstr);


