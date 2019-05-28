/**
 * ES5, Typescript ---> Javascript
 * TSC -basics.ts
 * Browser does not understand the let/const/import and it needs to be converted back into ES5 so that it can be understood by the browser.
 * Var will not work in TS...try the below code with variable defined with var and let.
 * let/const
 * types
 */

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 100 * i);
}

//Data Types in Typescript string, number, any, boolean, array

let a: number = 4;
console.log(4);


// a="string" //This will not be allowed.

let b: string = "This is string";
console.log(b);

let c: any = true;
c = 4;
c = "Finally its a string";
console.log(c);     //This can hold value of any type and will function more or less like a Var in Javascript.

let d: boolean;
d = true;
console.log(d);

let e: Array<number>;
//e = ["string",2,3]; will not allow any string as its defined as a variable of type Array<string>
e = [1,2,3];
console.log(e);

