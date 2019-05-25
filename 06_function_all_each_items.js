/*
Create an Add Function.
Capturing multiple elements using $$/element.all and each function 
Printing DropDown Values using element.all/$$, getAttribute().
String Concat using dynamic value inside a static string.
*/
describe("Test working with DropDowns- ", function () {
    it("Open browser and navigate to test page", function () {
        browser.manage().window().maximize();
        browser.get("https://juliemr.github.io/protractor-demo/");
        console.log("page open");
    });
    function add(a, b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }


    it("Add and print first pair", function () {
        add(2, 3);
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log("The sum of first pair is->" + text);
            expect(text).toBe('5');
        });
    });


    it("Add and print multiple pairs from the history", function () {
        add(3, 3);
        add(3, 4);
        add(4, 4);

        element.all(by.repeater("result in memory")).each(function (item, index) {
            item.$('td:nth-child(3)').getText().then(function (text) {
                // console.log(index+1);
                let num = index+1
                // console.log("Item: " + num +  "  on history table is->" + text)   //Use the below method to concatenate the dynamic values to a static string.
                console.log(`Item: ${num} on history table is->` + text)  //This will work only in ES6
            });
        });
    });

    it("Printing values of the dropdown", function () {

        $$('select[ng-model="operator"]>option').each(function (item) {
            item.getAttribute('value').then(function(text){
                console.log(text);
            });
        });
    });

    it("**Close browser**", function () {
        browser.close();
        console.log("page closed.");
    });
});