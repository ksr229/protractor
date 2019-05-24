// import {browser} from protractor;

/*
Function in Javascript

Dealing with DropDown element type.

*/

describe("Test working with DropDowns", function () {
    it("Open browser and navigate to test page", function () {
        browser.manage().window().maximize();
        browser.get("https://juliemr.github.io/protractor-demo/");
        console.log("page open");
    });
    it("Close browser", function () {
        browser.close();
        console.log("page closed.");
    });
});