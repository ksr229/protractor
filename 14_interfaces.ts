/**
 * INTERFACES
 * **********
 * 
 * One of TypeScript’s core principles is that type checking focuses on the shape that values have. 
 * This is sometimes called “duck typing” or “structural subtyping”. 
 * In TypeScript, interfaces fill the role of naming these types, 
 * and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.
 */
interface vehicle {
    color: string;
    engine: number;
    camera: boolean;
    keyless?:  ;
}

let BMW = {
    color:"Black",
    engine: 1000,
    camera: true,
}


let Merc = {
    color:"Red",
    engine: 1500,
    // camera: false,   //When this is commented an error/warning is displayed that the property is missing.
    keyless: true       // when not defined in the interface used an error saying, parameter is not available is displayed.
}

let Audi = {
    color:"Pink",
    engine: 2000,
    camera: true,   
    // keyless: true       // The optional parameter may or may not be available.
}

console.log(BMW.color);
console.log("***********************Using Interfaces to validate the shape of the object values*************************")

function validateVehicleType(car:vehicle) {
    console.log(`Color of the vehicle is: ${car.color}`);
    console.log(`Engine capacity: ${car.engine}`);
    console.log(`Rear Camera available: ${car.camera}`);
    console.log(`Keyless available: ${car.keyless}`)
}

validateVehicleType(BMW);
validateVehicleType(Merc);
validateVehicleType(Audi);
