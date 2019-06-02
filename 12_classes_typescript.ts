

/**
 * CLASS/PROPERTIES/METHODS
 * properties and methods. Although property is nothing but a varible inside a class, but we will have to define them as username below instead of using let keyword. 
 * and then later use a constructor use them.  
 * these can be inherited.
 */

export class classDemo {                //export is the keyword we need to use so that the class can be imported.
    //Properties inside a class
    username: string;
    password: string;
    ssn: number;

    constructor(ssn: number) {          //Constructor method is the first to be executed inside the class when an object of the class is created. And need not be called EXPLICITLY
        this.ssn = ssn;
        console.log("I am the constructor");
    }
                                        //Methods inside a class.
    getUserName() {
        return this.username;           //this will identify the current instance member of property username

    }

    setUserName(username: string = "default_user") {
        this.username = username;

    }

    getSSN() {
        return this.ssn;
    }

}
//Create object of the class and then use that object to refer the properties and methods.
// Always use a let outside the scope of class to create objects, variables as seen below. 
let a = new classDemo(123);
a.setUserName();                                //This will print the default value for the argument
console.log(a.getUserName());
a.setUserName("Sushank")                        //This will set the value as per the runtime argument.
console.log(a.getUserName());
let b = a.getUserName();
console.log(b);                                 
console.log(a.getSSN());