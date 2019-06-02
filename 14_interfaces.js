var BMW = {
    color: "Black",
    engine: 1000,
    camera: true
};
var Merc = {
    color: "Red",
    engine: 1500,
    // camera: false,   //When this is commented an error/warning is displayed that the property is missing.
    keyless: true // when not defined in the interface used an error saying, parameter is not available is displayed.
};
var Audi = {
    color: "Red",
    engine: 1500,
    camera: true
};
console.log(BMW.color);
console.log("***********************Using Interfaces to validate the shape of the object values*************************");
function validateVehicleType(config) {
    console.log("Color of the vehicle is: " + config.color);
    console.log("Engine capacity: " + config.engine);
    console.log("Rear Camera available: " + config.camera);
    console.log("Keyless available: " + config.keyless);
}
validateVehicleType(BMW);
validateVehicleType(Merc);
validateVehicleType(Audi);
